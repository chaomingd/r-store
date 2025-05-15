# API Document

## Model

创建 Model 实例即可管理 react 状态

```tsx | pure
interface State {
  ....
}
const store = new Model<State>(modelConfig);

// 或者使用继承
class Store extends Model<state> {
  constructor() {
    super(modelConfig)
  }
  somFunc() {
    this.setState({...})
  }
}
const store = new Store();
```

### ModelConfig

属性

- `state` 默认状态值，类型必须和传入的 State 类型一致
- `computed` 计算值声明。参考[Computed](#computed)
- `watch` 字段变化监听声明。参考[Watch](#watch)
- `effects` 函数声明。参考[Effects](#effects)

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

- `keys: string[]` 需要监听的 keys，当 keys 所对应的值变化时重新执行 handler
- `handler: (newState: State, prevState: State, diff: Record<string, boolean>) => Partial<State>`
  处理函数，当 keys 所对应的值变化时重新执行，可以返回新的状态。

##### 参数

- `newState` 最新的状态值
- `prevState` 上一次的状态值
- `diff` 更新的状态值，如传入`keys: ['age', 'gender']` 当只有`age`变化时 `diff: {age: true, gender: false}`

#### 使用

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
        // 或者
        // 传入函数时，只要有状态发生变化都会重新执行，一般不会使用这种方式，除非你需要定制computed
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
    // 或者
    this.setState(this.getState().count + 1);
  }
}
```

### Watch

Watch 的用法和 Computed 一致，只不过 handler 中无需返回值即可

### Effects

仅仅作为函数使用，跟普通函数没有区别，只是将函数和 model 放在一起方便使用

```tsx | pure
interface Effects {
  [key: string]: () => any;
}
```

## Prototype Function

Model 的原型方法

### getState

获取最新的状态值

### setState

更新状态值

```tsx | pure
setState(
  state: Partial<TState> | ((state: TState) => Partial<TState>),
  options?: IDispatchOptions,
): void;

interface IDispatchOptions {
  silient?: boolean; // silient 为true值，仅更新状态值，但不会引起组件重新渲染
}

// 用法
this.setState({...})
this.setState((state) => ({...}))
this.setState({...}, {silent: true})
```

### useGetState

在组件中使用状态值并和组件关联，必须调用该函数，这样当状态更新时组件才会重新渲染
该函数基于 useSelector 实现

```tsx | pure
useGetState<Key extends keyof TState & string>(
  keys?: Key[],
  equalityFn?: TEqualityFn<TState>,
)
```

- `keys` 使用 `keys` 进行优化，只有当`keys`对应的值变化时组件才会更新，当不传入 keys 时状态任意值变化都会引起组件更新。建议都应该传入`keys`
- `equalityFn` 自定义比较函数，返回布尔值。`true`不更新组件。

### useSelector

使用该函数订阅状态字段的更新，需要自定义比较函数。

```tsx | pure
useSelector(
  equalityFn?: (prev: State, next: State) => boolean,
): State;
```

#### 参数

- `equalityFn` _(可选)_  
  自定义比较函数，用于比较前后两次提取的值是否相等。如果返回 `true`，组件不会重新渲染。默认使用浅比较。

#### 返回值

- 返回整个状态值。之所以返回整个状态值，是为了避免复制部分状态的开销。

#### 实例

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
  // 只有当age变化时才会更新组件
  const { age } = store.useSelector((prevState, nextState) =>
    Object.is(prevState.age, nextState.age),
  );

  return <div>{age}</div>;
};
```

### subscribe

订阅状态值的变化

```tsx | pure
// type define
subscribe(func): Unsubcribe;

const unsubscribe = store.subscribe((store, isSilent) => {
  console.log(store.getState())
})

// remove subscribe
unsubscribe();
```

### subscribeWithKeys

订阅状态值的变化， 当传入的 keys 所对应的状态值变化时触发函数

```tsx | pure
// type define
subscribeWithKeys(
  func: TSubscribeFunc<TState, TEffects>,
  options: { keys?: Key[]; equalityFn?: TEqualityFn<TState> },
)

// usage
store.subscribeWithKeys((store, isSilent) => {
  console.log(store.getState().age)
}, {keys: ['age']})
```

### asyncManager

使用 asyncManger 处理异步任务，支持处理竞态问题，失败重试等

```tsx | pure
// type define
asyncManager(
  name: string,
  options?: {
    loadingKey?: string;
    errorKey?: string;
    config?: AsyncManagerOptions;
    showLoading?: boolean;
  },
): AsyncManager

// AsyncManager define
class AsyncManager {
  ...
  exec(func: () => Promise<any>): Promise<any>
}
```

- `name` 在当前 store 中不重复即可
- `options`
  - `loadingKey` loading 状态值的 key `default: 'loading'`。 `this.setState({[loadingKey]: true})`
  - `errorKey` error 状态值的 key `default: 'error'`。`this.setState({[errorKey]: err})`
  - `config`
    - `retryCount` 重试的次数
    - `retryInterval` 重试的时间间隔，单位 ms
  - `showLoading` 是否更新 loading 状态值

#### 用法

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
    // 自动更新loading,error状态值，无需手动调用`this.setState({loading: true})`
    return this.asyncManager('fetchData', {
      loadingKey: 'loading',
      errorKey: 'error',
      config: {
        retryCount: 3,
        retryInterval: 300,
      }
    }).exec(() => {
      return Promise.resolve({
        userInfo: { // userInfo 会自动更新到状态中，无需手动调用`this.setState({userInfo: {....}})`
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

执行所有订阅函数

```tsx | pure
// type define
interface IDispatchOptions {
  silent: boolean;
}
dispatch(options?: IDispatchOptions)


// usage
store.dispatch();
```

## useModel

以工厂的设计模式创建 Model，只能用于函数式组件

```tsx | pure
const store = useModel(modelConfig);
```

modelConfig 参考 [ModelConfig](#modelconfig)
