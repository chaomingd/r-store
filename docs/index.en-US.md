---
hero:
  title: React Model Store
  description: a lightweight and powerful React state management library designed to simplify state management through object-oriented and publish-subscribe design patterns. It provides an intuitive API and flexible extensibility, suitable for global, page-level, and component-level state management scenarios
  actions:
    - text: Guide
      link: /guides
    - text: API Doc
      link: /api
---

## Quick Start

```tsx | pure
import { Model } from 'r-model-store';
import React from 'react';

type State = {
  firstName: string;
  lastName: string;
};

// 1. Instantiate Model
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

// 2. Extend Model
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
  // If there are multiple state values and you only want the current component to update when the "firstName" value changes (other value changes won't trigger updates),
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

Head over to the [Guide](/en-US/guides) to get started quickly!
