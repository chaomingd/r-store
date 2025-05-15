# Store

## Installation

```bash | pure
npm install r-model-store
```

## Introduction

`r-model-store` is a lightweight and powerful React state management library designed to simplify state management through object-oriented and publish-subscribe design patterns. It provides an intuitive API and flexible extensibility, suitable for global, page-level, and component-level state management scenarios.

### Core Features

- **Object-Oriented Design**\
  Developers can easily define states and logic by creating Model instances or extending the Model class, resulting in clear and maintainable code structures.
- **Precise Component Updates**\
  The `useGetState` method supports selective state field subscriptions, avoiding unnecessary component re-renders.
- **Built-in `computed` and `watch` Features**\
  `computed` enables derived state calculations, generating new state values based on existing ones, avoiding repetitive logic.\
  `watch` allows monitoring state changes and executing specific callback logic when changes occur, making it easier to handle side effects.
- **Asynchronous Handling**\
  Supports handling asynchronous race conditions and retrying failed operations through `asyncManager`.
- **Flexible Extensibility**\
  Enables flexible code writing by extending the Model class in an object-oriented manner.
- **Seamless Integration with React**\
  Provides an intuitive API, reducing the learning curve and enabling quick adoption.

## As Global State

### Basic Usage

<code src="./demos/overall-basic.tsx"></code>
:::info
`modelInstance.setState`: Updates state values by passing partial state values, automatically merging them, similar to the `setState` method in class components.\
`modelInstance.getState`: Retrieves the latest state values, independent of React's rendering timing, always returning the most up-to-date values.
:::

### Combining Multiple States

<code src="./demos/overall-multi-state.tsx"></code>

### Extracting Multiple Values

<code src="./demos/overall-multi-value.tsx"></code>

### Computed Values

<code src="./demos/overall-computed-value.tsx"></code>

## As Local State

### Basic Usage

#### Using a Custom Hook with `useCreation`

:::info
The core principle of the `useCreation` custom hook (initialized once):

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

For convenience, you can directly use the `useCreation` hook from `ahooks`, which has a similar internal implementation.
:::

<code src="./demos/part-basic.tsx"></code>

#### Using a Custom Utility Hook, `useModel`

<code src="./demos/part-custom-hook.tsx"></code>
:::info
`useModel` is essentially a wrapper around the `useCreation` and Model instantiation process from the previous example.
:::

### Controlled and Uncontrolled Modes in Components

Controlled mode refers to components whose state is managed externally, typically via props, while uncontrolled mode refers to components managing their own state internally. For example, an Input component can support both modes:
<code src="./demos/part-mode.tsx"></code>

### Using with Context

<code src="./demos/part-context.tsx"></code>

## Advanced Usage

### Handling Request Race Conditions

Race conditions occur when multiple requests to the same endpoint are sent in a short period, and the response order does not match the request order, leading to unexpected data rendering. A typical scenario is a search input field:
<code src="./demos/part-question.tsx"></code>

#### Using `AsyncManager` to Handle Request Race Conditions

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
name: A unique identifier.
options:
- loadingKey: Key for the loading state -> `this.setState()`.
- errorKey: Key for the error state when an error occurs -> `this.setState({error: error})`.
- showLoading: Whether to enable loading; set to `false` to avoid changing the loading state.
- config:
  - retryCount: Number of retries for the `fn` method in case of errors.
  - retryInterval: Time interval (ms) between retries, default is 300ms.
```

:::

### Handling Request Retries

<code src="./demos/up-request-retry.tsx"></code>

### Updating State with `immer`

Use `immer.js` for state updates:
<code src="./demos/up-immer.tsx"></code>

## Best Practices

The current state management library is based on the `Model` class, which is highly flexible. Below are some best practices for its usage.

### Global State Management

Global states can be divided into multiple stores based on functionality. These stores can be combined into a container class for usage:

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
    console.log(this.store.store1) // Access other stores via `this.store`.
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
    console.log(this.store.store1) // Access other stores via `this.store`.
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

export const store = new Store(); // Initialize outside components and import for usage.


// In a component
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

### Page-Level State Management

Page-level states can also be divided into multiple stores based on components or functionality. Use a container class to combine all stores and integrate with Context:

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
    console.log(this.store.store1) // Access other stores via `this.store`.
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
    console.log(this.store.store1) // Access other stores via `this.store`.
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
  const routeParams = useRouteParams().id // Dynamic route (/path/:id) id.
  const store = useMemo(() => {
    return new Store(id); // Create once at runtime based on id.
  }, [id]) // Create different store instances based on id to reset all state values.
 
  // const store = useMemo(() => {
  //   return new Store(id);
  // }, []) // Or initialize once and reset certain states or reload data via useEffect when id changes.
  // store.id = id;
  // useEffect(() => {
  //   store.someResetStateFunc(); // Reset certain states or reload data based on id.
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

### Component-Level State Management

#### Simple Components

For simple components (with simple states), you can use `useModel` or the native `useState`.

#### Complex Components

For complex components, such as a CheckBoxGroup that spans multiple levels, you can use Context. Refer to the [Using with Context](#using-with-context) section for details.
