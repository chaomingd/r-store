# Store

## 作为全局状态

### 基本使用

<code src="./demos/overall-basic.tsx"></code>
:::info
modelInstance.setState： 用来更新状态值，只需传入部分状态值，自动合并，功能类似 class 组件的 setState
</br>
modelInstance.getState： 用来获取最新的状态值，与 react 渲染时机无关，任何时候获取的都是最新的值
:::

### 多个状态组合

<code src="./demos/overall-multi-state.tsx"></code>

### 取出多个值

<code src="./demos/overall-multi-value.tsx"></code>

### Computed 计算值

<code src="./demos/overall-computed-value.tsx"></code>

## 作为局部状态

### 基本使用

#### 配合 useCreation 的自定义 hook 使用，

:::info
useCreation 自定义 hook 的核心原理 (初始化一次)

```tsx | pure
import { useRef } from 'react';
function useCreation<Fn extends (...args: any[]) => any>(fn: Fn) {
  const resRef = useRef<ReturnType<Fn>>();
  if (!resRef.current) {
    resRef.current = fn();
  }

  return resRef.current;
}
```

这里为例方便直接使用 ahooks 中的 useCreation，内部原理基本和上面的一致
:::

<code src="./demos/part-basic.tsx"></code>

#### 使用自定义工具 hook，useModel

<code src="./demos/part-custom-hook.tsx"></code>
:::info
useModel 实际上就是对上述例子中 useCreation 和 实例化 Model 过程的封装
:::

### 组件的受控于非受控模式

受控模式是指组件的状态由用户控制，一般通过 props 传入值控制 UI 的显示，非受控模式是指，组件的状态由组件内部管理，外部无法更改。
一般来说对于基础组件，既要支持受控模式，也要支持非受控模式。下面以 Input 组件为例
<code src="./demos/part-mode.tsx"></code>

### 配合 Context 使用

<code src="./demos/part-context.tsx"></code>

## 进阶用法

### 处理请求竞态问题

竞态问题指的是，当我们在交互过程中，由于各种原因导致同一个接口短时间之内连续发送请求，后发送的请求有可能先得到请求结果，从而导致数据渲染出现预期之外的错误。
最典型的场景是输入框搜索功能，容易引发竞态问题，如下面的例子
<code src="./demos/part-question.tsx"></code>

#### 使用 AsyncManger 处理请求竞态问题

<code src="./demos/part-resolve-question.tsx"></code>
:::info

```bash | pure
asyncManager(name: string, options: {
  loadingKey?: string;
  errorKey?: string;
  showLoading?: boolean;
  config?: {
    retryCount?: number;
    retryInterval?: number;
  }
}).exec(fn)
name: 唯一标识，不重复即可
options:
- loadingKey: loading状态的key值 -> this.setState()
- errorKey: 当发生错误时设置的error的key值 -> this.setState({error: error})
- showLoading?: 是否启用loading, 设置为false则不会更改loading值;
- config:
  - retryCount: fn 方法出错是重试的次数
  - retryInterval 重试的时间间隔(ms)，默认 300ms
```

:::

### 处理请求重试

<code src="./demos/up-request-retry.tsx"></code>

### immer 状态更新

配合 immer.js 更新状态
<code src="./demos/up-immer.tsx"></code>

## 最佳实践
我们知道当前状态管理库是基础Model这个类实现的，类的用法很灵活，那么如何使用才是最佳实践呢，
这里给出一些参考。
### 全局状态管理
全局状态可根据功能拆分成多个Store，我们可以将多个Store通过一个类充当容器组合起来使用
```tsx | pure
// stores/store1.ts
import { Model } from 'r-model-store'

interface State1 {...}

class Store1 extends Model<State1> {
  constructor(public store: Store) {
    super({
      ... // defaultState
    })
  }
  someFunc() {
    this.setState({....})
    console.log(this.store.store1) // 可以使用this.store访问其他store
  }
}
// stores/store2.ts
interface State2 {...}
class Store2 extends Model<State2> {
  constructor(public store: Store) {
    super({
      ... // defaultState
    })
  }
  someFunc() {
    this.setState({....})
    console.log(this.store.store1) // 可以使用this.store访问其他store
  }
}

// stores/index.ts
import { Store1 } from '/path/stores/store1'
import { Store2 } from '/path/stores/store1'
class Store {
  store1: Store1;
  store2: Store2;
  constructor() {
    this.store1 = new Store1(this)
    this.store2 = new Store2(this)
  }
}

expot const store = new Store(); // 在组件外部初始化，组件使用时，直接导入使用


// 在组件中使用
import { store } from '/path/stores'
const Comp1 = () => {
  const { store1 } = store
  const {...} = store1.useGetState(['key1', /** key2, key3 */]);
  return (
    <div onClick={() => {
      store2.someFunc();
    }}>....</div>
  )
}
const Comp2 = () => {
  const { store2 } = store
  const {...} = store2.useGetState(['key1', /** key2, key3 */]);
  return (
    <div onClick={() => {
      store2.someFunc();
    }}>....</div>
  )
}
```

### 页面级状态管理
页面级的状态可根据组件或功能拆分成多个Store，同样也使用类作为容器组合所有Store，并配合Context 使用

```tsx | pure
// stores/store1.ts
import { Model } from 'r-model-store'

interface State1 {...}

class Store1 extends Model<State1> {
  constructor(public store: Store) {
    super({
      ... // defaultState
    })
  }
  someFunc() {
    this.setState({....})
    console.log(this.store.store1) // 可以使用this.store访问其他store
  }
}
// stores/store2.ts
interface State2 {...}
class Store2 extends Model<State2> {
  constructor(public store: Store) {
    super({
      ... // defaultState
    })
  }
  someFunc() {
    this.setState({....})
    console.log(this.store.store1) // 可以使用this.store访问其他store
  }
}

// stores/index.ts
import { createContext, useMemo, ReactNode, useContext } from 'react'
import { Store1 } from '/path/stores/store1'
import { Store2 } from '/path/stores/store1'
export class Store {
  store1: Store1;
  store2: Store2;
  constructor(public id: string) {
    this.store1 = new Store1(this)
    this.store2 = new Store2(this)
  }
}

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({children}: {children: ReactNode | ReactNode[]}) {
  const routeParams = useRouteParams().id // 动态路由(/path/:id)的id
  const store = useMemo(() => {
    return new Store(id); // 运行时根据id创建一次
  }, [id]) // 根据id不同创建不同的store实例，如此根据id不同就能重置所有状态值
 
  // const store = useMemo(() => {
  //   return new Store(id);
  // }, []) // 或者仅初始化一次 通过useEffect监听id的变化来重置某些状态，或重新加载数据
  // store.id = id;
  // useEffect(() => {
  //   store.someResetStateFunc(); // 根据id重置某些状态，或重新加载数据
  // }, [id])

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export function useStore() {
  return useContext(StoreContext)!;
}



// page.ts
import { Comp1 } from '/path/comp1.ts'
import { Comp2 } from '/path/comp2.ts'

const Page = () => {
  return (
    <StoreProvider>
      <Comp1 />
      <Comp2 />
    </StoreProvider>
  )
}

// /path/comp1.ts
import { useStore } from '/path/stores'
const Comp1 = () => {
  const store = useStore()
  const { store1 } = store;
  const { key1 } = store1.useGetState(['key1'])
  return (<div>...</div>);
}

export default Comp1;


// /path/comp2.ts
import { useStore } from '/path/stores'
const Comp2 = () => {
  const store = useStore()
  const { store2 } = store;
  const { key1 } = store2.useGetState(['key1'])
  return (<div>...</div>);
}

export default Comp2;
```

### 组件级状态管理
#### 简单组件
对于简单(状态简单)组件，可使用useModel或者直接使用原生useState即可


#### 复杂组件
对于状态复杂的组件，如CheckBoxGroup这类可以跨层级使用的组件，可以配合Context使用
参考[局部状态配合Context使用章节](/guides#配合-context-使用)