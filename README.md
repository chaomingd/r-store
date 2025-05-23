# r-store
`r-model-store` is a lightweight and powerful React state management library designed to simplify state management through object-oriented and publish-subscribe design patterns. It provides an intuitive API and flexible extensibility, suitable for global, page-level, and component-level state management scenarios. [doc](https://chaomingd.github.io/r-store/)

## Core Features
- **Object-Oriented Design**  
  By extending the `Model` class, developers can easily define state and operational logic, resulting in clear and maintainable code structures.

- **Precise Component Updates**  
  Provides methods like `useGetState` to enable selective subscription to specific state fields, ensuring that only the relevant components re-render when those fields change.  

- **Built-in `computed` and `watch` Features**  
  The `computed` feature enables derived state calculations, allowing you to generate new state values based on existing ones and avoid redundant logic.  
  The `watch` feature allows you to monitor state changes and execute specific callback logic when the state changes, making it easier to handle side effects.

- **Asynchronous Handling**  
  Supports handling asynchronous race conditions and retrying failed operations through the `asyncManager`.

- **Flexible Extensibility**  
  Enables flexible code writing by extending the `Model` class in an object-oriented manner.

- **Seamless Integration with React**  
  Offers an intuitive API, reducing the learning curve and enabling quick adoption.

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
