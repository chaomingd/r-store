import { Model } from 'r-model-store';
import React from 'react';

type State = {
  firstName: string;
  lastName: string;
};

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

const FirstName = () => {
  // useGetState 传入一个数组，数组的元素是需要监听的 state 的 key
  // 只有当监听的 key的值 发生变化时，组件才会重新渲染
  const { firstName } = personStore.useGetState(['firstName']);
  console.log('render firstName', firstName);
  return (
    <div>
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
    </div>
  );
};

const LastName = () => {
  // useGetState 传入一个数组，数组的元素是需要监听的 state 的 key
  // 只有当监听的 key的值 发生变化时，组件才会重新渲染
  const { lastName } = personStore.useGetState(['lastName']);
  console.log('render lastName', lastName);
  return (
    <div>
      <label>
        Last name
        <input
          // Update the "lastName" state
          onChange={(e) => personStore.updateLastName(e.currentTarget.value)}
          value={lastName}
        />
      </label>

      <p>
        Hello, <strong>{lastName}!</strong>
      </p>
    </div>
  );
}

// In consuming app
export default function App() {
  return (
    <main
    >
      <FirstName />
      <LastName />
    </main>
  );
}
