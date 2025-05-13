import { arrayToObj, shallowEqualKeys, uuid } from './utils';
import { useMemoizedFn } from './hooks';
import { useCallback, useEffect, useMemo} from 'react';
import useSyncExternalStoreExports from 'use-sync-external-store/shim/with-selector';
import type { AsyncManagerOptions } from './Manager/AsyncManager';
import { AsyncManager } from './Manager/AsyncManager';
import type { IDispatchOptions, TComputed, TEqualityFn, TWatch } from './type';
import { calcComputedState, execWatchHandler } from './utils';

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;

type TSubscribeFunc<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends Record<string, any> = Record<string, any>,
  UserData extends Record<string, any> = Record<string, any>,
> = (state: Model<TState, TEffects, UserData>, silent: boolean) => any;

type IEffects<M extends Model<any, any>> = Record<string, ((this: M, ...args: any[]) => any) | any>;

const DEFAULT_SUBSCRIBE_NAME = 'reactStoreSubscribe';

export interface IModelConfig<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends IEffects<Model<TState, TEffects>> = IEffects<Model>,
  UserData extends Record<string, any> = Record<string, any>,
> {
  autoInit?: boolean;
  state: TState;
  effects?: Partial<TEffects>;
  onStateChange?: (prevState: TState, currentState: TState) => any;
  modifyState?: (prevState: TState, nextState: TState) => Partial<TState> | null;
  watch?: TWatch<TState>;
  computed?: TComputed<TState>;
  userData?: UserData;
  name?: string;
}
export class Model<
  TState extends Record<string, any> = Record<string, any>,
  TEffects extends IEffects<Model<TState, TEffects>> = IEffects<Model<TState, any, any>>,
  UserData extends Record<string, any> = Record<string, any>,
> {
  isUnMount = false;
  name?: string;
  state: TState = {} as TState;
  _userData: UserData = {} as UserData;
  _effects = {} as TEffects;
  _preState: TState = {} as TState;
  _dispatchSignal: string = '';
  _subscribes: Record<string, TSubscribeFunc<TState, TEffects, UserData>[]> = {};
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
  constructor(public config: IModelConfig<TState, TEffects, UserData>) {
    if (config.autoInit !== false) {
      this.init();
    }
  }
  init() {
    if (!this._isInited) {
      this._isInited = true;
      const config = this.config;
      this.state = this.getActualState({} as TState, config.state || {});
      this._preState = { ...this.state };
      this._userData = config?.userData || ({} as UserData);
      if (config.effects) {
        this.setEffects(config.effects);
      }
      if (config.name) {
        this.name = config.name;
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
    const { loadingKey = 'loading', errorKey = 'error', showLoading = true, config } = (options || {});
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
  subscribe(func: TSubscribeFunc<TState, TEffects, UserData>, name?: string) {
    const subscribeName = this.getSubscribeName(name);
    if (!this._subscribes[subscribeName]) {
      this._subscribes[subscribeName] = [];
    }
    this._subscribes[subscribeName].push(func);
    return () => {
      this.unsubscribe(func, name);
    };
  }
  getSubscribeName(name?: string) {
    return name || DEFAULT_SUBSCRIBE_NAME;
  }
  unsubscribe(func: TSubscribeFunc<TState, TEffects, UserData>, name?: string) {
    const subscribeName = this.getSubscribeName(name);
    if (this._subscribes[subscribeName] && this._subscribes[subscribeName].length) {
      this._subscribes[subscribeName] = this._subscribes[subscribeName].filter((fn) => fn !== func);
    }
  }
  getUserData() {
    return { ...this._userData };
  }
  setUserData(userData: Partial<UserData>) {
    Object.assign(this._userData, userData);
  }
  setState(
    state: Partial<TState> | ((state: TState) => Partial<TState>),
    options?: IDispatchOptions,
  ) {
    if (state) {
      if (typeof state === 'function') {
        this.state = this.getActualState(this._preState, state(this.state));
      } else {
        this.state = this.getActualState(this._preState, state);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.config.onStateChange && this.config.onStateChange(this._preState, this.getState());
      this.dispatch(options);
      this._preState = { ...this.state };
    }
  }
  getActualState(prevState: TState, payload: Partial<TState>) {
    let nextState = { ...prevState, ...payload };
    const { modifyState, watch, computed } = this.config || {};
    let partialState;
    if (modifyState) {
      partialState = modifyState(prevState, nextState);
      if (partialState && typeof partialState === 'object') {
        Object.assign(nextState, partialState);
      }
    }
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
    return this.state;
  };
  dispatch(options?: IDispatchOptions) {
    if (this.isUnMount) return;
    let subscribeNames = Object.keys(this._subscribes);
    if (options) {
      if (options.include) {
        const includeNameMap = arrayToObj(options.include);
        subscribeNames = subscribeNames.filter((name) => includeNameMap[name]);
      }
      if (options.exclude) {
        const excludeNameMap = arrayToObj(options.exclude);
        subscribeNames = subscribeNames.filter((name) => !excludeNameMap[name]);
      }
    }
    this._dispatchSignal = uuid();
    subscribeNames.forEach((subscribeName) => {
      if (this._subscribes[subscribeName]) {
        this._subscribes[subscribeName].forEach((func) => func(this, options?.silent || false));
      }
    });
  }
  setEffect<M extends TEffects[keyof TEffects]>(name: keyof TEffects, effect: M) {
    if (this._effects[name] !== effect) {
      this._effects[name] = typeof effect === 'function' ? effect.bind(this) : effect;
    }
  }
  setEffects(effects: Partial<TEffects>) {
    Object.keys(effects).forEach((name) => {
      this.setEffect(name, effects[name]!);
    });
  }
  getEffect<Name extends keyof TEffects>(name: Name) {
    return (...args: Parameters<TEffects[Name]>): ReturnType<TEffects[Name]> => {
      return this._effects[name].apply(this, args);
    };
  }
  dispose() {
    this._effects = {} as TEffects;
    this.state = {} as TState;
  }
  useSelector = (equalityFn?: TEqualityFn<TState>, name?: string) => {
    // eslint-disable-next-line
    const subscribe = useCallback((listener: () => void) => {
      return this.subscribe((_, silent) => {
        if (!silent) {
          listener();
        }
      }, name);
    }, [this]);
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
    name?: string,
  ) => {
    return this.useSelector((prevState, nextState) => {
      if (keys && shallowEqualKeys(prevState, nextState, keys)) {
        return true;
      }
      if (equalityFn && equalityFn(prevState, nextState)) {
        return true;
      }
      return false;
    }, name);
  };
  subscribeWithKeys<Key extends keyof TState & string>(
    func: TSubscribeFunc<TState, TEffects>,
    options: { keys?: Key[]; equalityFn?: TEqualityFn<TState>; name?: string },
  ) {
    const { keys, equalityFn, name } = options;
    return this.subscribe((_, silent) => {
      const nextState = this.getState();
      if (keys && shallowEqualKeys(this._preState, nextState, keys)) {
        return;
      }
      if (equalityFn && equalityFn(this._preState, nextState)) {
        return;
      }
      func(this, silent);
    }, name);
  }
}

export function useModel<
  TState extends Record<string, any>,
  TEffects extends IEffects<Model<TState, TEffects>> = IEffects<Model<TState>>,
  UserData extends Record<string, any> = Record<string, any>,
>(modelConfig: IModelConfig<TState, TEffects, UserData>) {
  const model = useMemo(() => {
    return new Model<TState, TEffects, UserData>(modelConfig);
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
  return model as Model<TState, TEffects, UserData>;
}
