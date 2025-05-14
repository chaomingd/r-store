import { useCallback, useEffect, useMemo } from 'react';
import useSyncExternalStoreExports from 'use-sync-external-store/shim/with-selector';
import type { AsyncManagerOptions } from './Manager/AsyncManager';
import { AsyncManager } from './Manager/AsyncManager';
import { useMemoizedFn } from './hooks';
import type { IDispatchOptions, TComputed, TEqualityFn, TWatch } from './type';
import {
  calcComputedState,
  execWatchHandler,
  shallowEqualKeys,
} from './utils';

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;

type TSubscribeFunc<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends Record<string, any> = Record<string, any>,
> = (state: Model<TState, TEffects>, silent: boolean) => any;

type IEffects<M extends Model<any, any>> = Record<
  string,
  ((this: M, ...args: any[]) => any) | any
>;

export interface IModelConfig<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends IEffects<Model<TState, TEffects>> = IEffects<Model>,
> {
  state: TState;
  effects?: Partial<TEffects>;
  watch?: TWatch<TState>;
  computed?: TComputed<TState>;
}
export class Model<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends IEffects<Model<TState, TEffects>> = IEffects<
    Model<TState, any>
  >,
> {
  isUnMount = false;
  name?: string;
  state: TState = {} as TState;
  _effects = {} as TEffects;
  _preState: TState = {} as TState;
  _dispatchSignal: string = '';
  _subscribes: TSubscribeFunc<TState, TEffects>[] = [];
  asyncManagerMap: Record<
    string,
    AsyncManager<
      Partial<TState>,
      (
        aborts: {
          lastAbortController: AbortController | null;
          abortController: AbortController;
        },
        tryCount: number,
      ) => Promise<Partial<TState>>
    >
  > = {};
  _isInited = false;
  constructor(public config: IModelConfig<TState, TEffects>) {}
  init() {
    if (!this._isInited) {
      this._isInited = true;
      const config = this.config;
      this.state = this.getActualState({} as TState, config.state || {});
      this._preState = { ...this.state };
      if (config.effects) {
        this.setEffects(config.effects);
      }
    }
  }
  asyncManager(
    name: string,
    options?: {
      loadingKey?: string;
      errorKey?: string;
      config?: AsyncManagerOptions;
      showLoading?: boolean;
    },
  ) {
    const {
      loadingKey = 'loading',
      errorKey = 'error',
      showLoading = true,
      config,
    } = options || {};
    if (!this.asyncManagerMap[name]) {
      this.asyncManagerMap[name] = new AsyncManager(config);
    }
    const asyncManager = this.asyncManagerMap[name];
    asyncManager.offAllListeners();
    asyncManager.on('loading', () => {
      if (showLoading) {
        this.setState({
          [loadingKey]: true,
        } as Partial<TState>);
      }
    });
    asyncManager.on('success', (result) => {
      if (typeof result === 'object' && result !== null) {
        this.setState({
          [loadingKey]: false,
          ...result,
        } as Partial<TState>);
      }
    });
    asyncManager.on('error', (error) => {
      this.setState({
        [loadingKey]: false,
        [errorKey]: error,
      } as Partial<TState>);
    });
    return this.asyncManagerMap[name];
  }
  subscribe(func: TSubscribeFunc<TState, TEffects>) {
    this._subscribes.push(func);
    return () => {
      this.unsubscribe(func);
    };
  }
  unsubscribe(func: TSubscribeFunc<TState, TEffects>) {
    if (this._subscribes.length) {
      this._subscribes = this._subscribes.filter((fn) => fn !== func);
    }
  }
  setState(
    state: Partial<TState> | ((state: TState) => Partial<TState>),
    options?: IDispatchOptions,
  ) {
    if (!this._isInited) {
      this.init();
    }
    if (state) {
      if (typeof state === 'function') {
        this.state = this.getActualState(this._preState, state(this.state));
      } else {
        this.state = this.getActualState(this._preState, state);
      }
      this.dispatch(options);
      this._preState = { ...this.state };
    }
  }
  getActualState(prevState: TState, payload: Partial<TState>) {
    let nextState = { ...prevState, ...payload };
    const { watch, computed } = this.config || {};
    // 处理计算属性
    nextState = calcComputedState<TState>({
      prevState,
      nextState,
      computed,
    });
    // 执行 watch
    execWatchHandler({
      prevState,
      nextState,
      watch,
    });
    return nextState;
  }
  getState = () => {
    if (!this._isInited) {
      this.init();
    }
    return this.state;
  };
  dispatch(options?: IDispatchOptions) {
    if (this.isUnMount) return;
    this._subscribes.forEach((func) =>
      func(this, options?.silent || false),
    );
  }
  setEffect<M extends TEffects[keyof TEffects]>(
    name: keyof TEffects,
    effect: M,
  ) {
    if (this._effects[name] !== effect) {
      this._effects[name] =
        typeof effect === 'function' ? effect.bind(this) : effect;
    }
  }
  setEffects(effects: Partial<TEffects>) {
    Object.keys(effects).forEach((name) => {
      this.setEffect(name, effects[name]!);
    });
  }
  getEffect<Name extends keyof TEffects>(name: Name) {
    return (
      ...args: Parameters<TEffects[Name]>
    ): ReturnType<TEffects[Name]> => {
      return this._effects[name].apply(this, args);
    };
  }
  dispose() {
    this._effects = {} as TEffects;
    this.state = {} as TState;
  }
  useSelector = (equalityFn?: TEqualityFn<TState>) => {
    // eslint-disable-next-line
    const subscribe = useCallback(
      (listener: () => void) => {
        return this.subscribe((_, silent) => {
          if (!silent) {
            listener();
          }
        });
      },
      [this],
    );
    const selector = useMemoizedFn((state: TState) => state);
    const isEqual = useMemoizedFn((prevState: TState, nextState: TState) => {
      if (equalityFn) {
        return equalityFn(prevState, nextState);
      }
      return Object.is(prevState, nextState);
    });
    const state = useSyncExternalStoreWithSelector(
      subscribe,
      this.getState,
      this.getState,
      selector,
      isEqual,
    );
    return state;
  };
  useGetState = <Key extends keyof TState & string>(
    keys?: Key[],
    equalityFn?: TEqualityFn<TState>,
  ) => {
    return this.useSelector((prevState, nextState) => {
      if (equalityFn) {
        return equalityFn(prevState, nextState);
      }
      if (keys && shallowEqualKeys(prevState, nextState, keys)) {
        return true;
      }
      return false;
    });
  };
  subscribeWithKeys<Key extends keyof TState & string>(
    func: TSubscribeFunc<TState, TEffects>,
    options: { keys?: Key[]; equalityFn?: TEqualityFn<TState> },
  ) {
    const { keys, equalityFn } = options;
    return this.subscribe((_, silent) => {
      const nextState = this.getState();
      if (keys && shallowEqualKeys(this._preState, nextState, keys)) {
        return;
      }
      if (equalityFn && equalityFn(this._preState, nextState)) {
        return;
      }
      func(this, silent);
    });
  }
}

export function useModel<
  TState extends Record<string, any>,
  TEffects extends IEffects<Model<TState, TEffects>> = IEffects<Model<TState>>,
>(modelConfig: IModelConfig<TState, TEffects>) {
  const model = useMemo(() => {
    return new Model<TState, TEffects>(modelConfig);
  }, []);
  model.config = modelConfig;
  if (modelConfig.effects) {
    model.setEffects(modelConfig.effects);
  }
  useEffect(() => {
    model.isUnMount = false;
    return () => {
      model.isUnMount = true;
    };
  }, [model]);
  return model as Model<TState, TEffects>;
}
