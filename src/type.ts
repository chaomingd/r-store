export type TEqualityFn<TState extends Record<string, any>> = (
  prevState: TState,
  nextState: TState,
) => boolean;
export type TPromiseValue<T> = T | Promise<T>;
export type TComputedHandler<TState, R = any> = (
  state: TState,
  prevState: TState,
  diff: Record<keyof TState & string, boolean>,
) => R;
export type TWatch<TState extends Record<string, any>> = {
  keys: (keyof TState)[];
  handler: TComputedHandler<TState, any>;
}[];
export type TComputed<TState extends Record<string, any>> = (| {
      keys: (keyof TState)[];
      handler: TComputedHandler<TState, Partial<TState>>;
    }
  | ((state: TState, prevState: TState) => Partial<TState>))[];

export interface IDispatchOptions {
  silent?: boolean;
}

export type TSelectorFn<TState> = (state: TState) => Partial<TState>;
