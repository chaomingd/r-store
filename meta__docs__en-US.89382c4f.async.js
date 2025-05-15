(self.webpackChunkr_model_store=self.webpackChunkr_model_store||[]).push([[430],{52745:function(t,n,e){"use strict";var r;e.r(n),e.d(n,{demos:function(){return v}});var d=e(90228),s=e.n(d),c=e(87999),p=e.n(c),y=e(75271),b=e(25019),S=e(49900),v={"docs-api-demo-en-us-0":{component:y.memo(y.lazy(p()(s()().mark(function i(){var I,a,u,l,f,o;return s()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=x.sent,a=I.default,x.next=6,Promise.resolve().then(e.bind(e,49900));case 6:u=x.sent,l=u.Model,f=new l({state:{age:18,gender:0}}),o=function(){var g=f.useSelector(function(E,_){return Object.is(E.age,_.age)}),h=g.age;return a.createElement("div",null,h)};case 10:case"end":return x.stop()}},i)})))),asset:{type:"BLOCK",id:"docs-api-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
};`},react:{type:"NPM",value:"18.3.1"},"r-model-store":{type:"NPM",value:"0.0.4"}},entry:"index.tsx"},context:{react:r||(r=e.t(y,2)),"r-model-store":S},renderOpts:{compile:function(){var i=p()(s()().mark(function a(){var u,l=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(978).then(e.bind(e,65978));case 2:return o.abrupt("return",(u=o.sent).default.apply(u,l));case 3:case"end":return o.stop()}},a)}));function I(){return i.apply(this,arguments)}return I}()}}}},30030:function(t,n,e){"use strict";e.r(n),e.d(n,{demos:function(){return s}});var r=e(75271),d=e(57678),s={}},95414:function(t,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return d}});var r=e(25019);const d=[{value:"\u521B\u5EFA Model \u5B9E\u4F8B\u5373\u53EF\u7BA1\u7406 react \u72B6\u6001",paraId:0,tocIndex:1},{value:`interface State {
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
\u81EA\u5B9A\u4E49\u6BD4\u8F83\u51FD\u6570\uFF0C\u7528\u4E8E\u6BD4\u8F83\u524D\u540E\u4E24\u6B21\u63D0\u53D6\u7684\u503C\u662F\u5426\u76F8\u7B49\u3002\u5982\u679C\u8FD4\u56DE `,paraId:24,tocIndex:14},{value:"true",paraId:24,tocIndex:14},{value:"\uFF0C\u7EC4\u4EF6\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002\u9ED8\u8BA4\u4F7F\u7528\u6D45\u6BD4\u8F83\u3002",paraId:24,tocIndex:14},{value:"\u8FD4\u56DE\u6574\u4E2A\u72B6\u6001\u503C\u3002\u4E4B\u6240\u4EE5\u8FD4\u56DE\u6574\u4E2A\u72B6\u6001\u503C\uFF0C\u662F\u4E3A\u4E86\u907F\u514D\u590D\u5236\u90E8\u5206\u72B6\u6001\u7684\u5F00\u9500\u3002",paraId:25,tocIndex:15},{value:"\u8BA2\u9605\u72B6\u6001\u503C\u7684\u53D8\u5316",paraId:26,tocIndex:17},{value:`// type define
subscribe(func): Unsubcribe;

const unsubscribe = store.subscribe((store, isSilent) => {
  console.log(store.getState())
})

// remove subscribe
unsubscribe();
`,paraId:27,tocIndex:17},{value:"\u8BA2\u9605\u72B6\u6001\u503C\u7684\u53D8\u5316\uFF0C \u5F53\u4F20\u5165\u7684 keys \u6240\u5BF9\u5E94\u7684\u72B6\u6001\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u51FD\u6570",paraId:28,tocIndex:18},{value:`// type define
subscribeWithKeys(
  func: TSubscribeFunc<TState, TEffects>,
  options: { keys?: Key[]; equalityFn?: TEqualityFn<TState> },
)

// usage
store.subscribeWithKeys((store, isSilent) => {
  console.log(store.getState().age)
}, {keys: ['age']})
`,paraId:29,tocIndex:18},{value:"\u4F7F\u7528 asyncManger \u5904\u7406\u5F02\u6B65\u4EFB\u52A1\uFF0C\u652F\u6301\u5904\u7406\u7ADE\u6001\u95EE\u9898\uFF0C\u5931\u8D25\u91CD\u8BD5\u7B49",paraId:30,tocIndex:19},{value:`// type define
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
`,paraId:31,tocIndex:19},{value:"name",paraId:32,tocIndex:19},{value:" \u5728\u5F53\u524D store \u4E2D\u4E0D\u91CD\u590D\u5373\u53EF",paraId:32,tocIndex:19},{value:"options",paraId:32,tocIndex:19},{value:"loadingKey",paraId:33,tocIndex:19},{value:" loading \u72B6\u6001\u503C\u7684 key ",paraId:33,tocIndex:19},{value:"default: 'loading'",paraId:33,tocIndex:19},{value:"\u3002 ",paraId:33,tocIndex:19},{value:"this.setState({[loadingKey]: true})",paraId:33,tocIndex:19},{value:"errorKey",paraId:33,tocIndex:19},{value:" error \u72B6\u6001\u503C\u7684 key ",paraId:33,tocIndex:19},{value:"default: 'error'",paraId:33,tocIndex:19},{value:"\u3002",paraId:33,tocIndex:19},{value:"this.setState({[errorKey]: err})",paraId:33,tocIndex:19},{value:"config",paraId:33,tocIndex:19},{value:"retryCount",paraId:34,tocIndex:19},{value:" \u91CD\u8BD5\u7684\u6B21\u6570",paraId:34,tocIndex:19},{value:"retryInterval",paraId:34,tocIndex:19},{value:" \u91CD\u8BD5\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D ms",paraId:34,tocIndex:19},{value:"showLoading",paraId:33,tocIndex:19},{value:" \u662F\u5426\u66F4\u65B0 loading \u72B6\u6001\u503C",paraId:33,tocIndex:19},{value:`interface StoreState {
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
`,paraId:35,tocIndex:20},{value:"\u6267\u884C\u6240\u6709\u8BA2\u9605\u51FD\u6570",paraId:36,tocIndex:21},{value:`// type define
interface IDispatchOptions {
  silent: boolean;
}
dispatch(options?: IDispatchOptions)


// usage
store.dispatch();
`,paraId:37,tocIndex:21},{value:"\u4EE5\u5DE5\u5382\u7684\u8BBE\u8BA1\u6A21\u5F0F\u521B\u5EFA Model\uFF0C\u53EA\u80FD\u7528\u4E8E\u51FD\u6570\u5F0F\u7EC4\u4EF6",paraId:38,tocIndex:22},{value:`const store = useModel(modelConfig);
`,paraId:39,tocIndex:22},{value:"modelConfig \u53C2\u8003 ",paraId:40,tocIndex:22},{value:"ModelConfig",paraId:41,tocIndex:22}]},9503:function(t,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return d}});var r=e(57678);const d=[{value:"r-store",paraId:0}]},16505:function(t,n,e){"use strict";var r=e(75271);function d(a,u){return a===u&&(a!==0||1/a===1/u)||a!==a&&u!==u}var s=typeof Object.is=="function"?Object.is:d,c=r.useState,p=r.useEffect,y=r.useLayoutEffect,b=r.useDebugValue;function S(a,u){var l=u(),f=c({inst:{value:l,getSnapshot:u}}),o=f[0].inst,m=f[1];return y(function(){o.value=l,o.getSnapshot=u,v(o)&&m({inst:o})},[a,l,u]),p(function(){return v(o)&&m({inst:o}),a(function(){v(o)&&m({inst:o})})},[a]),b(l),l}function v(a){var u=a.getSnapshot;a=a.value;try{var l=u();return!s(a,l)}catch(f){return!0}}function i(a,u){return u()}var I=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?i:S;n.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:I},18089:function(t,n,e){"use strict";var r=e(75271),d=e(38568);function s(i,I){return i===I&&(i!==0||1/i===1/I)||i!==i&&I!==I}var c=typeof Object.is=="function"?Object.is:s,p=d.useSyncExternalStore,y=r.useRef,b=r.useEffect,S=r.useMemo,v=r.useDebugValue;n.useSyncExternalStoreWithSelector=function(i,I,a,u,l){var f=y(null);if(f.current===null){var o={hasValue:!1,value:null};f.current=o}else o=f.current;f=S(function(){function x(_){if(!O){if(O=!0,g=_,_=u(_),l!==void 0&&o.hasValue){var M=o.value;if(l(M,_))return h=M}return h=_}if(M=h,c(g,_))return M;var P=u(_);return l!==void 0&&l(M,P)?(g=_,M):(g=_,h=P)}var O=!1,g,h,E=a===void 0?null:a;return[function(){return x(I())},E===null?void 0:function(){return x(E())}]},[I,a,u,l]);var m=p(i,f[0],f[1]);return b(function(){o.hasValue=!0,o.value=m},[m]),v(m),m}},38568:function(t,n,e){"use strict";t.exports=e(16505)},54484:function(t,n,e){"use strict";t.exports=e(18089)},62657:function(t){function n(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},83136:function(t,n,e){var r=e(38836),d=e(68919),s=e(75254);function c(p){var y=d();return function(){var S=r(p),v;if(y){var i=r(this).constructor;v=Reflect.construct(S,arguments,i)}else v=S.apply(this,arguments);return s(this,v)}}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},38836:function(t){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(d){return d.__proto__||Object.getPrototypeOf(d)},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},21742:function(t,n,e){var r=e(80038);function d(s,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(c&&c.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),c&&r(s,c)}t.exports=d,t.exports.__esModule=!0,t.exports.default=t.exports},68919:function(t){function n(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},75254:function(t,n,e){var r=e(31759).default,d=e(62657);function s(c,p){if(p&&(r(p)==="object"||typeof p=="function"))return p;if(p!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(c)}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports},80038:function(t){function n(e,r){return t.exports=n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,c){return s.__proto__=c,s},t.exports.__esModule=!0,t.exports.default=t.exports,n(e,r)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
