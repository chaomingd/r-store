---
hero:
  title: React Model Store
  description: 一个轻量级、功能强大的 React 状态管理库，旨在通过面向对象和发布订阅的设计模式简化状态管理。它提供了直观的 API 和灵活的扩展能力，适合全局、页面级和组件级的状态管理场景。
  actions:
    - text: 指南
      link: /guides
    - text: API 文档
      link: /api
---

## quickStart
```tsx | pure
import { Model } from 'r-model-store';
import React from 'react';

type State = {
  firstName: string;
  lastName: string;
};



// 1. 实例化Model
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

// 2. 继承Model
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

// In consuming app
export default function App() {
  const { firstName } = personStore.useGetState();
  // 有多个状态值的情况下，如果只想在firstName值变更的时候才会更新当前组件（其他值变更不造成当前组件更新）可以
  // 向useGetState 方法传入keys: ['firstName'] 如 personStore.useGetState(['firstName'])
  // 内部会根据传入的keys进行浅比较，只有对应到值变更时组件才会重新渲染
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
进入[指南](/guides)快速开始吧
