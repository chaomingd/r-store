"use strict";(self.webpackChunkr_model_store=self.webpackChunkr_model_store||[]).push([[904],{60568:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var r=e(75271),t=e(61203),o={}},53028:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var r=e(75271),t=e(79493),o={}},5051:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});var r=e(61203);const t=[{value:"\u521B\u5EFA Model \u5B9E\u4F8B\u5373\u53EF\u7BA1\u7406 react \u72B6\u6001",paraId:0,tocIndex:1},{value:`interface State {
  ....
}
const store = new Model<State>(modelConfig);

// \u6216\u8005\u4F7F\u7528\u7EE7\u627F
class Store extends Model<state> {
  constructor() {
    super(modelConfig)
  }
  somFunc() {
    this.setState({...})
  }
}
const store = new Store();
`,paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:2},{value:"state",paraId:3,tocIndex:2},{value:" \u9ED8\u8BA4\u72B6\u6001\u503C\uFF0C\u7C7B\u578B\u5FC5\u987B\u548C\u4F20\u5165\u7684 State \u7C7B\u578B\u4E00\u81F4",paraId:3,tocIndex:2},{value:"computed",paraId:3,tocIndex:2},{value:" \u8BA1\u7B97\u503C\u58F0\u660E\u3002\u53C2\u8003",paraId:3,tocIndex:2},{value:"Computed",paraId:4,tocIndex:2},{value:"watch",paraId:3,tocIndex:2},{value:" \u5B57\u6BB5\u53D8\u5316\u76D1\u542C\u58F0\u660E\u3002\u53C2\u8003",paraId:3,tocIndex:2},{value:"Watch",paraId:5,tocIndex:2},{value:"effects",paraId:3,tocIndex:2},{value:" \u51FD\u6570\u58F0\u660E\u3002\u53C2\u8003",paraId:3,tocIndex:2},{value:"Effects",paraId:6,tocIndex:2},{value:`type Computed = ComputedConfig[];
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
`,paraId:8,tocIndex:4},{value:"keys: string[]",paraId:9,tocIndex:4},{value:" \u9700\u8981\u76D1\u542C\u7684 keys\uFF0C\u5F53 keys \u6240\u5BF9\u5E94\u7684\u503C\u53D8\u5316\u65F6\u91CD\u65B0\u6267\u884C handler",paraId:9,tocIndex:4},{value:"handler: (newState: State, prevState: State, diff: Record<string, boolean>) => Partial<State>",paraId:9,tocIndex:4},{value:`
\u5904\u7406\u51FD\u6570\uFF0C\u5F53 keys \u6240\u5BF9\u5E94\u7684\u503C\u53D8\u5316\u65F6\u91CD\u65B0\u6267\u884C\uFF0C\u53EF\u4EE5\u8FD4\u56DE\u65B0\u7684\u72B6\u6001\u3002`,paraId:9,tocIndex:4},{value:"newState",paraId:10,tocIndex:5},{value:" \u6700\u65B0\u7684\u72B6\u6001\u503C",paraId:10,tocIndex:5},{value:"prevState",paraId:10,tocIndex:5},{value:" \u4E0A\u4E00\u6B21\u7684\u72B6\u6001\u503C",paraId:10,tocIndex:5},{value:"diff",paraId:10,tocIndex:5},{value:" \u66F4\u65B0\u7684\u72B6\u6001\u503C\uFF0C\u5982\u4F20\u5165",paraId:10,tocIndex:5},{value:"keys: ['age', 'gender']",paraId:10,tocIndex:5},{value:" \u5F53\u53EA\u6709",paraId:10,tocIndex:5},{value:"age",paraId:10,tocIndex:5},{value:"\u53D8\u5316\u65F6 ",paraId:10,tocIndex:5},{value:"diff: {age: true, gender: false}",paraId:10,tocIndex:5},{value:`interface CounterState {
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
        // \u6216\u8005
        // \u4F20\u5165\u51FD\u6570\u65F6\uFF0C\u53EA\u8981\u6709\u72B6\u6001\u53D1\u751F\u53D8\u5316\u90FD\u4F1A\u91CD\u65B0\u6267\u884C\uFF0C\u4E00\u822C\u4E0D\u4F1A\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u9664\u975E\u4F60\u9700\u8981\u5B9A\u5236computed
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
    // \u6216\u8005
    this.setState(this.getState().count + 1);
  }
}
`,paraId:11,tocIndex:6},{value:"Watch \u7684\u7528\u6CD5\u548C Computed \u4E00\u81F4\uFF0C\u53EA\u4E0D\u8FC7 handler \u4E2D\u65E0\u9700\u8FD4\u56DE\u503C\u5373\u53EF",paraId:12,tocIndex:7},{value:"\u4EC5\u4EC5\u4F5C\u4E3A\u51FD\u6570\u4F7F\u7528\uFF0C\u8DDF\u666E\u901A\u51FD\u6570\u6CA1\u6709\u533A\u522B\uFF0C\u53EA\u662F\u5C06\u51FD\u6570\u548C model \u653E\u5728\u4E00\u8D77\u65B9\u4FBF\u4F7F\u7528",paraId:13,tocIndex:8},{value:`interface Effects {
  [key: string]: () => any;
}
`,paraId:14,tocIndex:8},{value:"Model \u7684\u539F\u578B\u65B9\u6CD5",paraId:15,tocIndex:9},{value:"\u83B7\u53D6\u6700\u65B0\u7684\u72B6\u6001\u503C",paraId:16,tocIndex:10},{value:"\u66F4\u65B0\u72B6\u6001\u503C",paraId:17,tocIndex:11},{value:`setState(
  state: Partial<TState> | ((state: TState) => Partial<TState>),
  options?: IDispatchOptions,
): void;

interface IDispatchOptions {
  silient?: boolean; // silient \u4E3Atrue\u503C\uFF0C\u4EC5\u66F4\u65B0\u72B6\u6001\u503C\uFF0C\u4F46\u4E0D\u4F1A\u5F15\u8D77\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3
}

// \u7528\u6CD5
this.setState({...})
this.setState((state) => ({...}))
this.setState({...}, {silent: true})
`,paraId:18,tocIndex:11},{value:`\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u72B6\u6001\u503C\u5E76\u548C\u7EC4\u4EF6\u5173\u8054\uFF0C\u5FC5\u987B\u8C03\u7528\u8BE5\u51FD\u6570\uFF0C\u8FD9\u6837\u5F53\u72B6\u6001\u66F4\u65B0\u65F6\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3
\u8BE5\u51FD\u6570\u57FA\u4E8E useSelector \u5B9E\u73B0`,paraId:19,tocIndex:12},{value:`useGetState<Key extends keyof TState & string>(
  keys?: Key[],
  equalityFn?: TEqualityFn<TState>,
)
`,paraId:20,tocIndex:12},{value:"keys",paraId:21,tocIndex:12},{value:" \u4F7F\u7528 ",paraId:21,tocIndex:12},{value:"keys",paraId:21,tocIndex:12},{value:" \u8FDB\u884C\u4F18\u5316\uFF0C\u53EA\u6709\u5F53",paraId:21,tocIndex:12},{value:"keys",paraId:21,tocIndex:12},{value:"\u5BF9\u5E94\u7684\u503C\u53D8\u5316\u65F6\u7EC4\u4EF6\u624D\u4F1A\u66F4\u65B0\uFF0C\u5F53\u4E0D\u4F20\u5165 keys \u65F6\u72B6\u6001\u4EFB\u610F\u503C\u53D8\u5316\u90FD\u4F1A\u5F15\u8D77\u7EC4\u4EF6\u66F4\u65B0\u3002\u5EFA\u8BAE\u90FD\u5E94\u8BE5\u4F20\u5165",paraId:21,tocIndex:12},{value:"keys",paraId:21,tocIndex:12},{value:"equalityFn",paraId:21,tocIndex:12},{value:" \u81EA\u5B9A\u4E49\u6BD4\u8F83\u51FD\u6570\uFF0C\u8FD4\u56DE\u5E03\u5C14\u503C\u3002",paraId:21,tocIndex:12},{value:"true",paraId:21,tocIndex:12},{value:"\u4E0D\u66F4\u65B0\u7EC4\u4EF6\u3002",paraId:21,tocIndex:12},{value:"\u4F7F\u7528\u8BE5\u51FD\u6570\u8BA2\u9605\u72B6\u6001\u5B57\u6BB5\u7684\u66F4\u65B0\uFF0C\u9700\u8981\u81EA\u5B9A\u4E49\u6BD4\u8F83\u51FD\u6570\u3002",paraId:22,tocIndex:13},{value:`useSelector(
  equalityFn?: (prev: State, next: State) => boolean,
): State;
`,paraId:23,tocIndex:13},{value:"equalityFn",paraId:24,tocIndex:14},{value:" ",paraId:24,tocIndex:14},{value:"(\u53EF\u9009)",paraId:24,tocIndex:14},{value:`
\u81EA\u5B9A\u4E49\u6BD4\u8F83\u51FD\u6570\uFF0C\u7528\u4E8E\u6BD4\u8F83\u524D\u540E\u4E24\u6B21\u63D0\u53D6\u7684\u503C\u662F\u5426\u76F8\u7B49\u3002\u5982\u679C\u8FD4\u56DE `,paraId:24,tocIndex:14},{value:"true",paraId:24,tocIndex:14},{value:"\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u9ED8\u8BA4\u4F7F\u7528\u6D45\u6BD4\u8F83\u3002",paraId:24,tocIndex:14},{value:"\u8FD4\u56DE\u6574\u4E2A\u72B6\u6001\u503C\u3002\u4E4B\u6240\u4EE5\u8FD4\u56DE\u6574\u4E2A\u72B6\u6001\u503C\uFF0C\u662F\u4E3A\u4E86\u907F\u514D\u590D\u5236\u90E8\u5206\u72B6\u6001\u7684\u5F00\u9500\u3002",paraId:25,tocIndex:15},{value:`import React from 'react';
import { Model } from 'r-model-store';

const store = new Model({
  state: {
    age: 18,
    gender: 0,
  },
});
const MyComponent = () => {
  // \u53EA\u6709\u5F53age\u53D8\u5316\u65F6\u624D\u4F1A\u66F4\u65B0\u7EC4\u4EF6
  const { age } = store.useSelector((prevState, nextState) =>
    Object.is(prevState.age, nextState.age),
  );

  return <div>{age}</div>;
};
`,paraId:26,tocIndex:16},{value:"\u8BA2\u9605\u72B6\u6001\u503C\u7684\u53D8\u5316",paraId:27,tocIndex:17},{value:`// type define
subscribe(func): Unsubcribe;

const unsubscribe = store.subscribe((store, isSilent) => {
  console.log(store.getState())
})

// remove subscribe
unsubscribe();
`,paraId:28,tocIndex:17},{value:"\u8BA2\u9605\u72B6\u6001\u503C\u7684\u53D8\u5316\uFF0C \u5F53\u4F20\u5165\u7684 keys \u6240\u5BF9\u5E94\u7684\u72B6\u6001\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u51FD\u6570",paraId:29,tocIndex:18},{value:`// type define
subscribeWithKeys(
  func: TSubscribeFunc<TState, TEffects>,
  options: { keys?: Key[]; equalityFn?: TEqualityFn<TState> },
)

// usage
store.subscribeWithKeys((store, isSilent) => {
  console.log(store.getState().age)
}, {keys: ['age']})
`,paraId:30,tocIndex:18},{value:"\u4F7F\u7528 asyncManger \u5904\u7406\u5F02\u6B65\u4EFB\u52A1\uFF0C\u652F\u6301\u5904\u7406\u7ADE\u6001\u95EE\u9898\uFF0C\u5931\u8D25\u91CD\u8BD5\u7B49",paraId:31,tocIndex:19},{value:`// type define
asyncManager(
  name: string,
  options?: {
    loadingKey?: string;
    errorKey?: string;
    config?: AsyncManagerOptions;
    showLoading?: boolean;
  },
): AsyncManager

// AsyncManager define
class AsyncManager {
  ...
  exec(func: () => Promise<any>): Promise<any>
}
`,paraId:32,tocIndex:19},{value:"name",paraId:33,tocIndex:19},{value:" \u5728\u5F53\u524D store \u4E2D\u4E0D\u91CD\u590D\u5373\u53EF",paraId:33,tocIndex:19},{value:"options",paraId:33,tocIndex:19},{value:"loadingKey",paraId:34,tocIndex:19},{value:" loading \u72B6\u6001\u503C\u7684 key ",paraId:34,tocIndex:19},{value:"default: 'loading'",paraId:34,tocIndex:19},{value:"\u3002 ",paraId:34,tocIndex:19},{value:"this.setState({[loadingKey]: true})",paraId:34,tocIndex:19},{value:"errorKey",paraId:34,tocIndex:19},{value:" error \u72B6\u6001\u503C\u7684 key ",paraId:34,tocIndex:19},{value:"default: 'error'",paraId:34,tocIndex:19},{value:"\u3002",paraId:34,tocIndex:19},{value:"this.setState({[errorKey]: err})",paraId:34,tocIndex:19},{value:"config",paraId:34,tocIndex:19},{value:"retryCount",paraId:35,tocIndex:19},{value:" \u91CD\u8BD5\u7684\u6B21\u6570",paraId:35,tocIndex:19},{value:"retryInterval",paraId:35,tocIndex:19},{value:" \u91CD\u8BD5\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D ms",paraId:35,tocIndex:19},{value:"showLoading",paraId:34,tocIndex:19},{value:" \u662F\u5426\u66F4\u65B0 loading \u72B6\u6001\u503C",paraId:34,tocIndex:19},{value:`interface StoreState {
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
    // \u81EA\u52A8\u66F4\u65B0loading,error\u72B6\u6001\u503C\uFF0C\u65E0\u9700\u624B\u52A8\u8C03\u7528\`this.setState({loading: true})\`
    return this.asyncManager('fetchData', {
      loadingKey: 'loading',
      errorKey: 'error',
      config: {
        retryCount: 3,
        retryInterval: 300,
      }
    }).exec(() => {
      return Promise.resolve({
        userInfo: { // userInfo \u4F1A\u81EA\u52A8\u66F4\u65B0\u5230\u72B6\u6001\u4E2D\uFF0C\u65E0\u9700\u624B\u52A8\u8C03\u7528\`this.setState({userInfo: {....}})\`
          name: 'jack';
          id: 'jack';
          nickName: 'jack_nickName';
        }
      })
    })
  }
}
`,paraId:36,tocIndex:20},{value:"\u6267\u884C\u6240\u6709\u8BA2\u9605\u51FD\u6570",paraId:37,tocIndex:21},{value:`// type define
interface IDispatchOptions {
  silent: boolean;
}
dispatch(options?: IDispatchOptions)


// usage
store.dispatch();
`,paraId:38,tocIndex:21},{value:"\u4EE5\u5DE5\u5382\u7684\u8BBE\u8BA1\u6A21\u5F0F\u521B\u5EFA Model\uFF0C\u53EA\u80FD\u7528\u4E8E\u51FD\u6570\u5F0F\u7EC4\u4EF6",paraId:39,tocIndex:22},{value:`const store = useModel(modelConfig);
`,paraId:40,tocIndex:22},{value:"modelConfig \u53C2\u8003 ",paraId:41,tocIndex:22},{value:"ModelConfig",paraId:42,tocIndex:22}]},94810:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});var r=e(79493);const t=[{value:`import { Model } from 'r-model-store';
import React from 'react';

type State = {
  firstName: string;
  lastName: string;
};



// 1. \u5B9E\u4F8B\u5316Model
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

// 2. \u7EE7\u627FModel
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
  // \u6709\u591A\u4E2A\u72B6\u6001\u503C\u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u53EA\u60F3\u5728firstName\u503C\u53D8\u66F4\u7684\u65F6\u5019\u624D\u4F1A\u66F4\u65B0\u5F53\u524D\u7EC4\u4EF6\uFF08\u5176\u4ED6\u503C\u53D8\u66F4\u4E0D\u9020\u6210\u5F53\u524D\u7EC4\u4EF6\u66F4\u65B0\uFF09\u53EF\u4EE5
  // \u5411useGetState \u65B9\u6CD5\u4F20\u5165keys: ['firstName'] \u5982 personStore.useGetState(['firstName'])
  // \u5185\u90E8\u4F1A\u6839\u636E\u4F20\u5165\u7684keys\u8FDB\u884C\u6D45\u6BD4\u8F83\uFF0C\u53EA\u6709\u5BF9\u5E94\u5230\u503C\u53D8\u66F4\u65F6\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3
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
`,paraId:0,tocIndex:0},{value:"\u8FDB\u5165",paraId:1,tocIndex:0},{value:"\u6307\u5357",paraId:2,tocIndex:0},{value:"\u5FEB\u901F\u5F00\u59CB\u5427",paraId:1,tocIndex:0}]}}]);
