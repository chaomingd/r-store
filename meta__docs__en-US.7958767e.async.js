"use strict";(self.webpackChunkr_model_store=self.webpackChunkr_model_store||[]).push([[430],{52745:function(a,t,e){e.r(t),e.d(t,{demos:function(){return r}});var o=e(75271),n=e(25019),r={}},30030:function(a,t,e){e.r(t),e.d(t,{demos:function(){return r}});var o=e(75271),n=e(57678),r={}},95414:function(a,t,e){e.r(t),e.d(t,{texts:function(){return n}});var o=e(25019);const n=[{value:"Create a Model instance to manage React state.",paraId:0,tocIndex:1},{value:`interface State {
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
`,paraId:1,tocIndex:1},{value:"Properties:",paraId:2,tocIndex:2},{value:"state",paraId:3,tocIndex:2},{value:": Default state value, the type must match the State type.",paraId:3,tocIndex:2},{value:"computed",paraId:3,tocIndex:2},{value:": Declaration of computed values. See ",paraId:3,tocIndex:2},{value:"Computed",paraId:4,tocIndex:2},{value:".",paraId:3,tocIndex:2},{value:"watch",paraId:3,tocIndex:2},{value:": Declaration of field change listeners. See ",paraId:3,tocIndex:2},{value:"Watch",paraId:5,tocIndex:2},{value:".",paraId:3,tocIndex:2},{value:"effects",paraId:3,tocIndex:2},{value:": Declaration of functions. See ",paraId:3,tocIndex:2},{value:"Effects",paraId:6,tocIndex:2},{value:".",paraId:3,tocIndex:2},{value:`type Computed = ComputedConfig[];
`,paraId:7,tocIndex:3},{value:`type ComputedConfig = {
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
`,paraId:8,tocIndex:4},{value:"keys: string[]",paraId:9,tocIndex:4},{value:": Keys to watch. When the values corresponding to the keys change, the handler is re-executed.",paraId:9,tocIndex:4},{value:"handler: (newState: State, prevState: State, diff: Record<string, boolean>) => Partial<State>",paraId:9,tocIndex:4},{value:": The handler function, re-executed when the values corresponding to the keys change, can return a new state.",paraId:9,tocIndex:4},{value:"newState",paraId:10,tocIndex:5},{value:": The latest state value.",paraId:10,tocIndex:5},{value:"prevState",paraId:10,tocIndex:5},{value:": The previous state value.",paraId:10,tocIndex:5},{value:"diff",paraId:10,tocIndex:5},{value:": The updated state values. For example, if ",paraId:10,tocIndex:5},{value:"keys: ['age', 'gender']",paraId:10,tocIndex:5},{value:" is passed and only ",paraId:10,tocIndex:5},{value:"age",paraId:10,tocIndex:5},{value:" changes, ",paraId:10,tocIndex:5},{value:"diff: {age: true, gender: false}",paraId:10,tocIndex:5},{value:".",paraId:10,tocIndex:5},{value:`interface CounterState {
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
`,paraId:11,tocIndex:6},{value:"The usage of Watch is the same as Computed, except that the handler does not need to return a value.",paraId:12,tocIndex:7},{value:"Used as functions, no different from regular functions, but grouped with the model for convenience.",paraId:13,tocIndex:8},{value:`interface Effects {
  [key: string]: () => any;
}
`,paraId:14,tocIndex:8},{value:"Prototype methods of the Model.",paraId:15,tocIndex:9},{value:"Get the latest state value.",paraId:16,tocIndex:10},{value:"Update the state value.",paraId:17,tocIndex:11},{value:`setState(
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
`,paraId:18,tocIndex:11},{value:"Use state values in a component and associate them with the component. This function must be called so that the component re-renders when the state updates. It is implemented based on ",paraId:19,tocIndex:12},{value:"useSelector",paraId:19,tocIndex:12},{value:".",paraId:19,tocIndex:12},{value:`useGetState<Key extends keyof TState & string>(
  keys?: Key[],
  equalityFn?: TEqualityFn<TState>,
)
`,paraId:20,tocIndex:12},{value:"keys",paraId:21,tocIndex:12},{value:": Use ",paraId:21,tocIndex:12},{value:"keys",paraId:21,tocIndex:12},{value:" for optimization. The component updates only when the values corresponding to the ",paraId:21,tocIndex:12},{value:"keys",paraId:21,tocIndex:12},{value:" change. If no keys are passed, any state change will trigger a component update. It is recommended to always pass ",paraId:21,tocIndex:12},{value:"keys",paraId:21,tocIndex:12},{value:".",paraId:21,tocIndex:12},{value:"equalityFn",paraId:21,tocIndex:12},{value:": Custom comparison function that returns a boolean. ",paraId:21,tocIndex:12},{value:"true",paraId:21,tocIndex:12},{value:" means the component will not update.",paraId:21,tocIndex:12},{value:"Use this function to subscribe to updates of state fields, with a custom comparison function.",paraId:22,tocIndex:13},{value:`useSelector(
  equalityFn?: (prev: State, next: State) => boolean,
): State;
`,paraId:23,tocIndex:13},{value:"equalityFn",paraId:24,tocIndex:14},{value:" ",paraId:24,tocIndex:14},{value:"(optional)",paraId:24,tocIndex:14},{value:": Custom comparison function to compare the extracted values before and after. If it returns ",paraId:24,tocIndex:14},{value:"true",paraId:24,tocIndex:14},{value:", the component will not re-render. Defaults to shallow comparison.",paraId:24,tocIndex:14},{value:"Returns the entire state value. This avoids the overhead of copying partial state.",paraId:25,tocIndex:15},{value:`import React from 'react';
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
`,paraId:26,tocIndex:16},{value:"Subscribe to state value changes.",paraId:27,tocIndex:17},{value:`// Type definition
subscribe(func): Unsubcribe;

const unsubscribe = store.subscribe((store, isSilent) => {
  console.log(store.getState())
})

// Remove subscription
unsubscribe();
`,paraId:28,tocIndex:17},{value:"Subscribe to state value changes. The function is triggered when the state values corresponding to the passed keys change.",paraId:29,tocIndex:18},{value:`// Type definition
subscribeWithKeys(
  func: TSubscribeFunc<TState, TEffects>,
  options: { keys?: Key[]; equalityFn?: TEqualityFn<TState> },
)

// Usage
store.subscribeWithKeys((store, isSilent) => {
  console.log(store.getState().age)
}, {keys: ['age']})
`,paraId:30,tocIndex:18},{value:"Use ",paraId:31,tocIndex:19},{value:"asyncManager",paraId:31,tocIndex:19},{value:" to handle asynchronous tasks, supporting race condition handling, retry on failure, etc.",paraId:31,tocIndex:19},{value:`// Type definition
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
`,paraId:32,tocIndex:19},{value:"name",paraId:33,tocIndex:19},{value:": Must be unique within the current store.",paraId:33,tocIndex:19},{value:"options",paraId:33,tocIndex:19},{value:`:
`,paraId:33,tocIndex:19},{value:"loadingKey",paraId:34,tocIndex:19},{value:": Key for the loading state. Default: ",paraId:34,tocIndex:19},{value:"'loading'",paraId:34,tocIndex:19},{value:". ",paraId:34,tocIndex:19},{value:"this.setState({[loadingKey]: true})",paraId:34,tocIndex:19},{value:".",paraId:34,tocIndex:19},{value:"errorKey",paraId:34,tocIndex:19},{value:": Key for the error state. Default: ",paraId:34,tocIndex:19},{value:"'error'",paraId:34,tocIndex:19},{value:". ",paraId:34,tocIndex:19},{value:"this.setState({[errorKey]: err})",paraId:34,tocIndex:19},{value:".",paraId:34,tocIndex:19},{value:"config",paraId:34,tocIndex:19},{value:`:
`,paraId:34,tocIndex:19},{value:"retryCount",paraId:35,tocIndex:19},{value:": Number of retries.",paraId:35,tocIndex:19},{value:"retryInterval",paraId:35,tocIndex:19},{value:": Retry interval in milliseconds.",paraId:35,tocIndex:19},{value:"showLoading",paraId:34,tocIndex:19},{value:": Whether to update the loading state.",paraId:34,tocIndex:19},{value:`interface StoreState {
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
    // Automatically updates loading and error state values. No need to manually call \`this.setState({loading: true})\`.
    return this.asyncManager('fetchData', {
      loadingKey: 'loading',
      errorKey: 'error',
      config: {
        retryCount: 3,
        retryInterval: 300,
      }
    }).exec(() => {
      return Promise.resolve({
        userInfo: { // userInfo will automatically update in the state. No need to manually call \`this.setState({userInfo: {....}})\`.
          name: 'jack';
          id: 'jack';
          nickName: 'jack_nickName';
        }
      })
    })
  }
}
`,paraId:36,tocIndex:20},{value:"Execute all subscription functions.",paraId:37,tocIndex:21},{value:`// Type definition
interface IDispatchOptions {
  silent: boolean;
}
dispatch(options?: IDispatchOptions)


// Usage
store.dispatch();
`,paraId:38,tocIndex:21},{value:"Create a Model using the factory design pattern. Can only be used in functional components.",paraId:39,tocIndex:22},{value:`const store = useModel(modelConfig);
`,paraId:40,tocIndex:22},{value:"modelConfig",paraId:41,tocIndex:22},{value:" reference: ",paraId:41,tocIndex:22},{value:"ModelConfig",paraId:42,tocIndex:22}]},9503:function(a,t,e){e.r(t),e.d(t,{texts:function(){return n}});var o=e(57678);const n=[{value:`import { Model } from 'r-model-store';
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
`,paraId:0,tocIndex:0},{value:"Head over to the ",paraId:1,tocIndex:0},{value:"Guide",paraId:2,tocIndex:0},{value:" to get started quickly!",paraId:1,tocIndex:0}]}}]);
