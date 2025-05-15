# API Document

## Model

Create a Model instance to manage React state.

```tsx | pure
interface State {
  ....
}
const store = new Model<State>(modelConfig);

// Or use inheritance
class Store extends Model<state> {
  constructor() {
    super(modelConfig)
  }
  someFunc() {
    this.setState({...})
  }
}
const store = new Store();
```

### ModelConfig

Properties:

- `state`: Default state value, the type must match the State type.
- `computed`: Declaration of computed values. See [Computed](#computed).
- `watch`: Declaration of field change listeners. See [Watch](#watch).
- `effects`: Declaration of functions. See [Effects](#effects).

### Computed

```tsx | pure
type Computed = ComputedConfig[];
```

#### ComputedConfig

```tsx | pure
type ComputedConfig = {
  keys: string[];
  handler: (
    newState: State,
    prevState: State,
    diff: Record<string, boolean>,
  ) => Partial<State>;
} | (handler: (
    newState: State,
    prevState: State
  ) => Partial<State>)
```

- `keys: string[]`: Keys to watch. When the values corresponding to the keys change, the handler is re-executed.
- `handler: (newState: State, prevState: State, diff: Record<string, boolean>) => Partial<State>`: The handler function, re-executed when the values corresponding to the keys change, can return a new state.

##### Parameters

- `newState`: The latest state value.
- `prevState`: The previous state value.
- `diff`: The updated state values. For example, if `keys: ['age', 'gender']` is passed and only `age` changes, `diff: {age: true, gender: false}`.

#### Usage

```tsx | pure
interface CounterState {
  count: number;
  doubleCount: number;
}
class Counter extends Model<CounterState> {
  constructor() {
    super({
      state: {
        count: 0,
        doubleCount: 0,
      },
      computed: [
        {
          keys: ['count'],
          handler: ({ count }) => {
            return {
              doubleCount: count * 2,
            };
          },
        },
        // Or
        // When passing a function, it will re-execute whenever any state changes. This is generally not used unless you need custom computed behavior.
        (state) => {
          return {
            doubleCount: count * 2,
          };
        },
      ],
    });
  }

  add() {
    this.setState(({ count }) => {
      return {
        count: count + 1,
      };
    });
    // Or
    this.setState(this.getState().count + 1);
  }
}
```

### Watch

The usage of Watch is the same as Computed, except that the handler does not need to return a value.

### Effects

Used as functions, no different from regular functions, but grouped with the model for convenience.

```tsx | pure
interface Effects {
  [key: string]: () => any;
}
```

## Prototype Function

Prototype methods of the Model.

### getState

Get the latest state value.

### setState

Update the state value.

```tsx | pure
setState(
  state: Partial<TState> | ((state: TState) => Partial<TState>),
  options?: IDispatchOptions,
): void;

interface IDispatchOptions {
  silient?: boolean; // If silient is true, only the state value is updated without causing the component to re-render.
}

// Usage
this.setState({...})
this.setState((state) => ({...}))
this.setState({...}, {silent: true})
```

### useGetState

Use state values in a component and associate them with the component. This function must be called so that the component re-renders when the state updates. It is implemented based on `useSelector`.

```tsx | pure
useGetState<Key extends keyof TState & string>(
  keys?: Key[],
  equalityFn?: TEqualityFn<TState>,
)
```

- `keys`: Use `keys` for optimization. The component updates only when the values corresponding to the `keys` change. If no keys are passed, any state change will trigger a component update. It is recommended to always pass `keys`.
- `equalityFn`: Custom comparison function that returns a boolean. `true` means the component will not update.

### useSelector

Use this function to subscribe to updates of state fields, with a custom comparison function.

```tsx | pure
useSelector(
  equalityFn?: (prev: State, next: State) => boolean,
): State;
```

#### Parameters

- `equalityFn` _(optional)_: Custom comparison function to compare the extracted values before and after. If it returns `true`, the component will not re-render. Defaults to shallow comparison.

#### Return Value

- Returns the entire state value. This avoids the overhead of copying partial state.

#### Example

```tsx
import React from 'react';
import { Model } from 'r-model-store';

const store = new Model({
  state: {
    age: 18,
    gender: 0,
  },
});
const MyComponent = () => {
  // The component updates only when age changes.
  const { age } = store.useSelector((prevState, nextState) =>
    Object.is(prevState.age, nextState.age),
  );

  return <div>{age}</div>;
};
```

### subscribe

Subscribe to state value changes.

```tsx | pure
// Type definition
subscribe(func): Unsubcribe;

const unsubscribe = store.subscribe((store, isSilent) => {
  console.log(store.getState())
})

// Remove subscription
unsubscribe();
```

### subscribeWithKeys

Subscribe to state value changes. The function is triggered when the state values corresponding to the passed keys change.

```tsx | pure
// Type definition
subscribeWithKeys(
  func: TSubscribeFunc<TState, TEffects>,
  options: { keys?: Key[]; equalityFn?: TEqualityFn<TState> },
)

// Usage
store.subscribeWithKeys((store, isSilent) => {
  console.log(store.getState().age)
}, {keys: ['age']})
```

### asyncManager

Use `asyncManager` to handle asynchronous tasks, supporting race condition handling, retry on failure, etc.

```tsx | pure
// Type definition
asyncManager(
  name: string,
  options?: {
    loadingKey?: string;
    errorKey?: string;
    config?: AsyncManagerOptions;
    showLoading?: boolean;
  },
): AsyncManager

// AsyncManager definition
class AsyncManager {
  ...
  exec(func: () => Promise<any>): Promise<any>
}
```

- `name`: Must be unique within the current store.
- `options`:
  - `loadingKey`: Key for the loading state. Default: `'loading'`. `this.setState({[loadingKey]: true})`.
  - `errorKey`: Key for the error state. Default: `'error'`. `this.setState({[errorKey]: err})`.
  - `config`:
    - `retryCount`: Number of retries.
    - `retryInterval`: Retry interval in milliseconds.
  - `showLoading`: Whether to update the loading state.

#### Usage

```tsx | pure
interface StoreState {
  userInfo: {
    name: string;
    id: string;
    nickName: string;
  } | null;
  error: Error | null;
}
class Store extends Model<StoreState> {
  constructor() {
    super({
      userInfo: null
    })
  }

  fetchData() {
    // Automatically updates loading and error state values. No need to manually call `this.setState({loading: true})`.
    return this.asyncManager('fetchData', {
      loadingKey: 'loading',
      errorKey: 'error',
      config: {
        retryCount: 3,
        retryInterval: 300,
      }
    }).exec(() => {
      return Promise.resolve({
        userInfo: { // userInfo will automatically update in the state. No need to manually call `this.setState({userInfo: {....}})`.
          name: 'jack';
          id: 'jack';
          nickName: 'jack_nickName';
        }
      })
    })
  }
}
```

### dispatch

Execute all subscription functions.

```tsx | pure
// Type definition
interface IDispatchOptions {
  silent: boolean;
}
dispatch(options?: IDispatchOptions)


// Usage
store.dispatch();
```

## useModel

Create a Model using the factory design pattern. Can only be used in functional components.

```tsx | pure
const store = useModel(modelConfig);
```

`modelConfig` reference: [ModelConfig](#modelconfig)
