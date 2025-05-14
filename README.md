# r-store
A simple and easy-to-use react state management library. see [doc](https://chaomingd.github.io/r-store/)

## quickStart
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
