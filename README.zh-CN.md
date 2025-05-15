# r-store
`r-model-store` 是一个轻量级、功能强大的 React 状态管理库，旨在通过面向对象和发布订阅的设计模式简化状态管理。它提供了直观的 API 和灵活的扩展能力，适合全局、页面级和组件级的状态管理场景。

## 核心特性
- 面向对象的设计
通过创建Model实例或继承 Model 类，开发者可以轻松定义状态和操作逻辑，代码结构清晰，易于维护。

- 精准组件更新
提供 useGetState 等方法，支持按需订阅状态字段，避免不必要的组件重渲染。

- 内置`computed`、`watch`功能  
`computed` 提供了对状态的派生计算能力，支持基于现有状态生成新的状态值，避免重复逻辑。  
`watch` 提供了对状态变化的监听能力，支持在状态发生变化时执行特定的回调逻辑，便于处理副作用。

- 异步处理
通过asyncManager支持对异步竞态问题的处理，失败重试的功能.

- 灵活的扩展能力
通过继承Model类的面向对象的方式灵活编写代码

- 与 React 无缝集成
提供直观的 API，降低学习成本，快速上手。

## Quick Start
Define state and operational logic by creating a `Model` instance or extending the `Model` class:
```tsx | pure
import { Model } from 'r-model-store';
import React from 'react';

type State = {
  firstName: string;
  lastName: string;
};

// 1. create a model instance
// const personStore = new Model<State, Action>({
//   state: {
//       firstName: '',
//       lastName: '',
//   },
//   effects: {
//      updateFirstName(firstName) {
//        personStore.setState({
//          firstName,
//        })
//        return true;
//      },
//      updateLastName: (lastName) => {
//        personStore.setState({
//          lastName,
//        })
//      }
//   }
// })

// 2. extends Model
class PersonStore extends Model<State> {
  constructor() {
    super({
      state: {
        firstName: '',
        lastName: '',
      },
    });
  }

  updateFirstName(firstName: string) {
    this.setState({
      firstName,
    });
  }

  updateLastName(lastName: string) {
    this.setState({
      lastName,
    });
  }
}

const personStore = new PersonStore();

export default function App() {
  const { firstName } = personStore.useGetState();
  // If there are multiple state values and you only want the current component to update when the "firstName" value changes (without triggering updates for changes in other values),
  // you can pass keys: ['firstName'] to the useGetState method, like personStore.useGetState(['firstName']).
  // Internally, it performs a shallow comparison based on the provided keys, and the component will only re-render when the corresponding value changes.
  return (
    <main
      style={{
        color: '#000',
      }}
    >
      <label>
        First name
        <input
          // Update the "firstName" state
          onChange={(e) => personStore.updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>
    </main>
  );
}
```
Go to the [Guide](https://chaomingd.github.io/r-store/guides) to get started quickly.

## LICENSE

MIT
