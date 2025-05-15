(self.webpackChunkr_model_store=self.webpackChunkr_model_store||[]).push([[430],{52745:function(t,n,e){"use strict";var a;e.r(n),e.d(n,{demos:function(){return v}});var d=e(90228),u=e.n(d),c=e(87999),p=e.n(c),x=e(75271),M=e(25019),y=e(49900),v={"docs-api-demo-en-us-0":{component:x.memo(x.lazy(p()(u()().mark(function i(){var f,r,s,l,I,o;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return f=m.sent,r=f.default,m.next=6,Promise.resolve().then(e.bind(e,49900));case 6:s=m.sent,l=s.Model,I=new l({state:{age:18,gender:0}}),o=function(){var g=I.useSelector(function(E,h){return Object.is(E.age,h.age)}),S=g.age;return r.createElement("div",null,S)};case 10:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"docs-api-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},"r-model-store":{type:"NPM",value:"0.0.4"}},entry:"index.tsx"},context:{react:a||(a=e.t(x,2)),"r-model-store":y},renderOpts:{compile:function(){var i=p()(u()().mark(function r(){var s,l=arguments;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(978).then(e.bind(e,65978));case 2:return o.abrupt("return",(s=o.sent).default.apply(s,l));case 3:case"end":return o.stop()}},r)}));function f(){return i.apply(this,arguments)}return f}()}}}},30030:function(t,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return u}});var a=e(75271),d=e(57678),u={}},95414:function(t,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return d}});var a=e(25019);const d=[{value:"Create a Model instance to manage React state.",paraId:0,tocIndex:1},{value:`interface State {
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
`,paraId:23,tocIndex:13},{value:"equalityFn",paraId:24,tocIndex:14},{value:" ",paraId:24,tocIndex:14},{value:"(optional)",paraId:24,tocIndex:14},{value:": Custom comparison function to compare the extracted values before and after. If it returns ",paraId:24,tocIndex:14},{value:"true",paraId:24,tocIndex:14},{value:", the component will not re-render. Defaults to shallow comparison.",paraId:24,tocIndex:14},{value:"Returns the entire state value. This avoids the overhead of copying partial state.",paraId:25,tocIndex:15},{value:"Subscribe to state value changes.",paraId:26,tocIndex:17},{value:`// Type definition
subscribe(func): Unsubcribe;

const unsubscribe = store.subscribe((store, isSilent) => {
  console.log(store.getState())
})

// Remove subscription
unsubscribe();
`,paraId:27,tocIndex:17},{value:"Subscribe to state value changes. The function is triggered when the state values corresponding to the passed keys change.",paraId:28,tocIndex:18},{value:`// Type definition
subscribeWithKeys(
  func: TSubscribeFunc<TState, TEffects>,
  options: { keys?: Key[]; equalityFn?: TEqualityFn<TState> },
)

// Usage
store.subscribeWithKeys((store, isSilent) => {
  console.log(store.getState().age)
}, {keys: ['age']})
`,paraId:29,tocIndex:18},{value:"Use ",paraId:30,tocIndex:19},{value:"asyncManager",paraId:30,tocIndex:19},{value:" to handle asynchronous tasks, supporting race condition handling, retry on failure, etc.",paraId:30,tocIndex:19},{value:`// Type definition
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
`,paraId:31,tocIndex:19},{value:"name",paraId:32,tocIndex:19},{value:": Must be unique within the current store.",paraId:32,tocIndex:19},{value:"options",paraId:32,tocIndex:19},{value:`:
`,paraId:32,tocIndex:19},{value:"loadingKey",paraId:33,tocIndex:19},{value:": Key for the loading state. Default: ",paraId:33,tocIndex:19},{value:"'loading'",paraId:33,tocIndex:19},{value:". ",paraId:33,tocIndex:19},{value:"this.setState({[loadingKey]: true})",paraId:33,tocIndex:19},{value:".",paraId:33,tocIndex:19},{value:"errorKey",paraId:33,tocIndex:19},{value:": Key for the error state. Default: ",paraId:33,tocIndex:19},{value:"'error'",paraId:33,tocIndex:19},{value:". ",paraId:33,tocIndex:19},{value:"this.setState({[errorKey]: err})",paraId:33,tocIndex:19},{value:".",paraId:33,tocIndex:19},{value:"config",paraId:33,tocIndex:19},{value:`:
`,paraId:33,tocIndex:19},{value:"retryCount",paraId:34,tocIndex:19},{value:": Number of retries.",paraId:34,tocIndex:19},{value:"retryInterval",paraId:34,tocIndex:19},{value:": Retry interval in milliseconds.",paraId:34,tocIndex:19},{value:"showLoading",paraId:33,tocIndex:19},{value:": Whether to update the loading state.",paraId:33,tocIndex:19},{value:`interface StoreState {
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
`,paraId:35,tocIndex:20},{value:"Execute all subscription functions.",paraId:36,tocIndex:21},{value:`// Type definition
interface IDispatchOptions {
  silent: boolean;
}
dispatch(options?: IDispatchOptions)


// Usage
store.dispatch();
`,paraId:37,tocIndex:21},{value:"Create a Model using the factory design pattern. Can only be used in functional components.",paraId:38,tocIndex:22},{value:`const store = useModel(modelConfig);
`,paraId:39,tocIndex:22},{value:"modelConfig",paraId:40,tocIndex:22},{value:" reference: ",paraId:40,tocIndex:22},{value:"ModelConfig",paraId:41,tocIndex:22}]},9503:function(t,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return d}});var a=e(57678);const d=[{value:`import { Model } from 'r-model-store';
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
`,paraId:0,tocIndex:0},{value:"Head over to the ",paraId:1,tocIndex:0},{value:"Guide",paraId:2,tocIndex:0},{value:" to get started quickly!",paraId:1,tocIndex:0}]},16505:function(t,n,e){"use strict";var a=e(75271);function d(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var u=typeof Object.is=="function"?Object.is:d,c=a.useState,p=a.useEffect,x=a.useLayoutEffect,M=a.useDebugValue;function y(r,s){var l=s(),I=c({inst:{value:l,getSnapshot:s}}),o=I[0].inst,_=I[1];return x(function(){o.value=l,o.getSnapshot=s,v(o)&&_({inst:o})},[r,l,s]),p(function(){return v(o)&&_({inst:o}),r(function(){v(o)&&_({inst:o})})},[r]),M(l),l}function v(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!u(r,l)}catch(I){return!0}}function i(r,s){return s()}var f=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?i:y;n.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:f},18089:function(t,n,e){"use strict";var a=e(75271),d=e(38568);function u(i,f){return i===f&&(i!==0||1/i===1/f)||i!==i&&f!==f}var c=typeof Object.is=="function"?Object.is:u,p=d.useSyncExternalStore,x=a.useRef,M=a.useEffect,y=a.useMemo,v=a.useDebugValue;n.useSyncExternalStoreWithSelector=function(i,f,r,s,l){var I=x(null);if(I.current===null){var o={hasValue:!1,value:null};I.current=o}else o=I.current;I=y(function(){function m(h){if(!O){if(O=!0,g=h,h=s(h),l!==void 0&&o.hasValue){var b=o.value;if(l(b,h))return S=b}return S=h}if(b=S,c(g,h))return b;var w=s(h);return l!==void 0&&l(b,w)?(g=h,b):(g=h,S=w)}var O=!1,g,S,E=r===void 0?null:r;return[function(){return m(f())},E===null?void 0:function(){return m(E())}]},[f,r,s,l]);var _=p(i,I[0],I[1]);return M(function(){o.hasValue=!0,o.value=_},[_]),v(_),_}},38568:function(t,n,e){"use strict";t.exports=e(16505)},54484:function(t,n,e){"use strict";t.exports=e(18089)},62657:function(t){function n(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},83136:function(t,n,e){var a=e(38836),d=e(68919),u=e(75254);function c(p){var x=d();return function(){var y=a(p),v;if(x){var i=a(this).constructor;v=Reflect.construct(y,arguments,i)}else v=y.apply(this,arguments);return u(this,v)}}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},38836:function(t){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(d){return d.__proto__||Object.getPrototypeOf(d)},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},21742:function(t,n,e){var a=e(80038);function d(u,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(c&&c.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),Object.defineProperty(u,"prototype",{writable:!1}),c&&a(u,c)}t.exports=d,t.exports.__esModule=!0,t.exports.default=t.exports},68919:function(t){function n(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},75254:function(t,n,e){var a=e(31759).default,d=e(62657);function u(c,p){if(p&&(a(p)==="object"||typeof p=="function"))return p;if(p!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(c)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},80038:function(t){function n(e,a){return t.exports=n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,c){return u.__proto__=c,u},t.exports.__esModule=!0,t.exports.default=t.exports,n(e,a)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
