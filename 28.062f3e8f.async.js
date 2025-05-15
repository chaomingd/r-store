(self.webpackChunkr_model_store=self.webpackChunkr_model_store||[]).push([[28],{66042:function(y,l,a){"use strict";a.d(l,{H:function(){return L},t:function(){return F}});var M=a(31759),E=a.n(M),T=a(26068),k=a.n(T),g=a(25298),S=a.n(g),B=a(17069),O=a.n(B),D=a(82092),v=a.n(D),P=a(75271),H=a(54484),Z=a(62657),I=a.n(Z),j=a(21742),W=a.n(j),z=a(83136),$=a.n(z),w=a(80189),J=300,X=function(x){W()(s,x);var h=$()(s);function s(i){var u;return S()(this,s),u=h.call(this),v()(I()(u),"execId",0),v()(I()(u),"options",{}),v()(I()(u),"abortSignalMap",{}),i&&(u.options=i),u}return O()(s,[{key:"getCurrentExecId",value:function(){return this.execId}},{key:"getAbortController",value:function(u){return this.abortSignalMap[u]}},{key:"exec",value:function(u){var c=this,p=0,m=++this.execId;return this.emit("loading"),new Promise(function(C,b){var N=function V(){var R=c.abortSignalMap[m-1]||null,G=c.abortSignalMap[m]=new AbortController;u({lastAbortController:R,abortController:G},p).then(function(n){return m===c.execId&&c.emit("success",n),C(n),delete c.abortSignalMap[m],c.emit("finish",null,n),n}).catch(function(n){m===c.execId?p<(c.options.retryCount||0)?setTimeout(function(){V()},c.options.retryInterval||J):(c.emit("error",n),b(n),delete c.abortSignalMap[m],c.emit("finish",n,null)):(delete c.abortSignalMap[m],c.emit("finish",n,null),b(n)),p++})};N()})}}]),s}(w.EventEmitter2),K=a(15361),Q=H.useSyncExternalStoreWithSelector,L=function(){function x(h){var s=this;S()(this,x),v()(this,"isUnMount",!1),v()(this,"name",void 0),v()(this,"state",{}),v()(this,"_effects",{}),v()(this,"_preState",{}),v()(this,"_dispatchSignal",""),v()(this,"_subscribes",[]),v()(this,"asyncManagerMap",{}),v()(this,"_isInited",!1),v()(this,"getState",function(){return s._isInited||s.init(),s.state}),v()(this,"useSelector",function(i){var u=(0,P.useCallback)(function(C){return s.subscribe(function(b,N){N||C()})},[s]),c=(0,K.useMemoizedFn)(function(C){return C}),p=(0,K.useMemoizedFn)(function(C,b){return i?i(C,b):Object.is(C,b)}),m=Q(u,s.getState,s.getState,c,p);return m}),v()(this,"useGetState",function(i,u){return s.useSelector(function(c,p){return u?u(c,p):!!(i&&(0,w.shallowEqualKeys)(c,p,i))})}),this.config=h}return O()(x,[{key:"init",value:function(){if(!this._isInited){this._isInited=!0;var s=this.config;this.state=this.getActualState({},s.state||{}),this._preState=k()({},this.state),s.effects&&this.setEffects(s.effects)}}},{key:"asyncManager",value:function(s,i){var u=this,c=i||{},p=c.loadingKey,m=p===void 0?"loading":p,C=c.errorKey,b=C===void 0?"error":C,N=c.showLoading,V=N===void 0?!0:N,R=c.config;this.asyncManagerMap[s]||(this.asyncManagerMap[s]=new X(R));var G=this.asyncManagerMap[s];return G.offAllListeners(),G.on("loading",function(){V&&u.setState(v()({},m,!0))}),G.on("success",function(n){E()(n)==="object"&&n!==null&&u.setState(k()(v()({},m,!1),n))}),G.on("error",function(n){u.setState(v()(v()({},m,!1),b,n))}),this.asyncManagerMap[s]}},{key:"subscribe",value:function(s){var i=this;return this._subscribes.push(s),function(){i.unsubscribe(s)}}},{key:"unsubscribe",value:function(s){this._subscribes.length&&(this._subscribes=this._subscribes.filter(function(i){return i!==s}))}},{key:"setState",value:function(s,i){this._isInited||this.init(),s&&(typeof s=="function"?this.state=this.getActualState(this._preState,s(this.state)):this.state=this.getActualState(this._preState,s),this.dispatch(i),this._preState=k()({},this.state))}},{key:"getActualState",value:function(s,i){var u=k()(k()({},s),i),c=this.config||{},p=c.watch,m=c.computed;return u=(0,w.calcComputedState)({prevState:s,nextState:u,computed:m}),(0,w.execWatchHandler)({prevState:s,nextState:u,watch:p}),u}},{key:"dispatch",value:function(s){var i=this;this.isUnMount||this._subscribes.forEach(function(u){return u(i,(s==null?void 0:s.silent)||!1)})}},{key:"setEffect",value:function(s,i){this._effects[s]!==i&&(this._effects[s]=typeof i=="function"?i.bind(this):i)}},{key:"setEffects",value:function(s){var i=this;Object.keys(s).forEach(function(u){i.setEffect(u,s[u])})}},{key:"getEffect",value:function(s){var i=this;return function(){for(var u=arguments.length,c=new Array(u),p=0;p<u;p++)c[p]=arguments[p];return i._effects[s].apply(i,c)}}},{key:"dispose",value:function(){this._effects={},this.state={}}},{key:"subscribeWithKeys",value:function(s,i){var u=this,c=i.keys,p=i.equalityFn;return this.subscribe(function(m,C){var b=u.getState();c&&(0,w.shallowEqualKeys)(u._preState,b,c)||p&&p(u._preState,b)||s(u,C)})}}]),x}();function F(x){var h=(0,P.useMemo)(function(){return new L(x)},[]);return h.config=x,x.effects&&h.setEffects(x.effects),(0,P.useEffect)(function(){return h.isUnMount=!1,function(){h.isUnMount=!0}},[h]),h}},15361:function(y,l,a){"use strict";a.r(l),a.d(l,{useCreation:function(){return k},useLatest:function(){return E},useMemoizedFn:function(){return T}});var M=a(75271);function E(g){var S=(0,M.useRef)(g);return S.current=g,S}function T(g){var S=(0,M.useRef)(g);return S.current=g,(0,M.useCallback)(function(){return S.current.apply(S,arguments)},[])}function k(g,S){var B=E(g);return(0,M.useMemo)(function(){return B.current()},S)}},49900:function(y,l,a){"use strict";a.r(l),a.d(l,{Model:function(){return M.H},useModel:function(){return M.t}});var M=a(66042),E=a(66454),T=a.n(E),k={};for(var g in E)["default","Model","useModel"].indexOf(g)<0&&(k[g]=function(S){return E[S]}.bind(0,g));a.d(l,k)},66454:function(){},80189:function(y,l,a){"use strict";a.r(l),a.d(l,{EventEmitter:function(){return R},EventEmitter2:function(){return G},arrayToMap:function(){return E},arrayToObj:function(){return M},calcComputedState:function(){return x},calcDiffKeys:function(){return F},diffObjectUpdate:function(){return Z},execWatchHandler:function(){return h},filterObject:function(){return H},getFieldsValue:function(){return I},getObjValues:function(){return w},hasProps:function(){return z},isDefined:function(){return O},isObject:function(){return X},isSameObject:function(){return P},isUndefined:function(){return B},makeObject:function(){return J},objectToArray:function(){return W},omit:function(){return v},pick:function(){return D},setFiledsValue:function(){return j},shallowEqualKeys:function(){return $},shortUUID:function(){return L},uuid:function(){return Q}});function M(n,r,e){var o={},t=e||function(d){return d},f=r||function(d){return d};return n&&n.forEach(function(d){o[f(d)]=t(d)}),o}function E(n,r,e){var o=new Map,t=e||function(d){return d},f=r||function(d){return d};return n&&n.forEach(function(d){o.set(f(d),t(d))}),o}var T=a(31759),k=a.n(T),g=a(26068),S=a.n(g);function B(n){return n==null}function O(n){return!B(n)}function D(n,r){var e={};return n&&r.forEach(function(o){e[o]=n[o]}),e}function v(n,r){var e=S()({},n);return n&&(typeof r=="string"?delete e[r]:r.forEach(function(o){delete e[o]})),e}function P(n,r,e){if(!n||!r)return!1;var o=Object.keys(n),t=Object.keys(r);if(o.length!==t.length)return!1;for(var f=e||o,d=0;d<f.length;d++){var A=f[d],U=f[d];if(A!==U||n[A]!==r[U])return!1}return!0}function H(n,r){var e={},o=(r==null?void 0:r.filter)||[];return Object.keys(n).forEach(function(t){B(n[t])||o.includes(n[t])||(e[t]=n[t])}),e}function Z(n,r,e,o){o?Object.keys(r).forEach(function(t){e(t,r[t],n[t])}):Object.keys(r).forEach(function(t){n[t]!==r[t]&&e(t,r[t],n[t])})}function I(n,r){var e=n;if(!e||!r)return e;if(typeof r=="string")return e[r];for(var o=0;o<r.length;o++){var t=r[o];if(e=e[t],!e)return e}return e}function j(n,r,e){if(n&&r){typeof r=="string"&&(n[r]=e);for(var o=n,t=0;t<r.length-1;t++)if(o=o[r[t]],!o)return;o[r[r.length-1]]=e}}function W(n,r){if(!n)return[];var e=r||function(t,f,d){return d},o=[];return Object.keys(n).forEach(function(t){o.push(e(n[t],t,n[t]))}),o}function z(n,r){if(!n||!r||!r.length)return!1;for(var e=0,o=r.length;e<o;e++){var t=r[e];if(typeof t=="string"){if(Object.prototype.hasOwnProperty.call(n,t))return!0}else{if(t.length===1&&Object.prototype.hasOwnProperty.call(n,t[0]))return!0;if(t.length>1){var f=I(n,t.slice(-1));if(O(f)&&Object.prototype.hasOwnProperty.call(n,t[t.length-1]))return!0}}}return!1}function $(n,r,e){return!n||!r?!1:k()(n)==="object"&&k()(r)==="object"?P(n,r,e):!1}function w(n,r){var e={};return r.forEach(function(o){var t=n[o];O(t)&&(e[o]=t)}),e}function J(n,r){var e=n;if(n||(e={}),Array.isArray(r))for(var o=e,t=0;t<r.length-1;t++){var f=r[t];(!o[f]||k()(o[f])!=="object"&&!Array.isArray(o[f]))&&(o[f]={},o=o[f])}return e}function X(n){return n?Object.prototype.toString.call(n)==="[object Object]":!1}function K(){return((1+Math.random())*65536|0).toString(16).substring(1)}function Q(){return K()+"-"+K()+"-"+K()+"-"+K()+"-"+K()}function L(){return K()+K()}function F(n,r,e){var o={},t=!1;return e.forEach(function(f){Object.is(n[f],r[f])||(o[f]=!0,t=!0)}),{diffKeysMap:o,diff:t}}function x(n){var r=n.prevState,e=n.nextState,o=n.computed;return o&&o.reduce(function(t,f){var d;if(typeof f=="function")d=f(t,r);else{var A=F(r,t,f.keys),U=A.diffKeysMap,Y=A.diff;Y&&(d=f.handler(t,r,U))}return d&&Object.assign(t,d),t},e),e}function h(n){var r=n.prevState,e=n.nextState,o=n.watch;o&&o.forEach(function(t){if(t.keys){var f=F(r,e,t.keys),d=f.diffKeysMap,A=f.diff;A&&t.handler&&t.handler(e,r,d)}})}var s=a(21742),i=a.n(s),u=a(83136),c=a.n(u),p=a(25298),m=a.n(p),C=a(17069),b=a.n(C),N=a(82092),V=a.n(N),R=function(){function n(){m()(this,n),V()(this,"_listeners",{})}return b()(n,[{key:"on",value:function(e,o){var t=this;return this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(o),function(){t.off(e,o)}}},{key:"once",value:function(e,o){var t=this.on(e,function(){o.apply(void 0,arguments),t()})}},{key:"emit",value:function(e){for(var o=arguments.length,t=new Array(o>1?o-1:0),f=1;f<o;f++)t[f-1]=arguments[f];var d=this._listeners[e];return!d||!d.length?!1:(d.forEach(function(A){A.apply(void 0,t)}),!0)}},{key:"off",value:function(e,o){var t=this._listeners[e];if(!(!t||!t.length)){if(!o){this._listeners[e]=void 0;return}this._listeners[e]=t.filter(function(f){return f!==o})}}},{key:"offAllListeners",value:function(){this._listeners={}}}]),n}(),G=function(n){i()(e,n);var r=c()(e);function e(){return m()(this,e),r.apply(this,arguments)}return b()(e)}(R)},49846:function(y,l){"use strict";l.Z=`import { Model } from 'r-model-store';
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
`},6121:function(y,l){"use strict";l.Z=`import { Model } from 'r-model-store';
import React from 'react';

type StoreType = {
  count: number;
  countSq: number;
};

class Store extends Model<StoreType> {
  constructor() {
    super({
      state: {
        count: 0,
        countSq: 0,
      },
      computed: [
        {
          keys: ['count'],
          handler: ({ count }) => {
            return {
              countSq: count ** 2,
            };
          },
        },
      ],
    });
  }
}

const store = new Store();

export default function App() {
  const { count, countSq } = store.useGetState(['count', 'countSq']);
  return (
    <div
    >
      <button type="button" onClick={() => store.setState({ count: count + 1 })}>+</button>
      <button type="button" onClick={() => store.setState({ count: count - 1 })}>-</button>
      <div>count: {count}</div>
      <div>countSq: {countSq}</div>
    </div>
  );
}
`},22725:function(y,l){"use strict";l.Z=`import { Model } from 'r-model-store';
import React from 'react';

// \u72B6\u60011
interface FishState {
  fishes: number;
}
class FishStore extends Model<FishState> {
  constructor(public store: Store) {
    super({
      state: {
        fishes: 0,
      },
    });
  }

  addFish() {
    this.setState({
      fishes: this.getState().fishes + 1,
    });
  }

  eatFish() {
    this.setState({
      fishes: this.getState().fishes - 1,
    });
  }
}

// \u72B6\u60012
interface BearState {
  bears: number;
}
class BearStore extends Model<BearState> {
  constructor(public store: Store) {
    super({
      state: {
        bears: 0,
      },
    });
  }

  addBear() {
    this.setState({
      bears: this.getState().bears + 1,
    });
  }
}

// \u5408\u5E76store
class Store {
  fishStore: FishStore;
  bearStore: BearStore;
  constructor() {
    this.fishStore = new FishStore(this);
    this.bearStore = new BearStore(this);
  }
}

const store = new Store();

const Bear = () => {
  const { bears } = store.bearStore.useGetState();
  return (
    <div>
      <h2>Number of bears: {bears}</h2>
      <button type="button" onClick={() => store.bearStore.addBear()}>Add Bear</button>
    </div>
  );
};

const Fishi = () => {
  const { fishes } = store.fishStore.useGetState();
  return (
    <div>
      <h2>Number of fishes: {fishes}</h2>
      <button type="button" onClick={() => store.fishStore.addFish()}>Add Fish</button>
    </div>
  );
};
// \u7EC4\u4EF6\u4E2D\u4F7F\u7528
function App() {
  return (
    <div
    >
      <Bear />
      <Fishi />
    </div>
  );
}

export default App;
`},39825:function(y,l){"use strict";l.Z=`import { Model } from 'r-model-store';
import React from 'react';

type State = {
  firstName: string;
  lastName: string;
};

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

const FirstName = () => {
  // useGetState \u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u5143\u7D20\u662F\u9700\u8981\u76D1\u542C\u7684 state \u7684 key
  // \u53EA\u6709\u5F53\u76D1\u542C\u7684 key\u7684\u503C \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3
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
  // useGetState \u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u5143\u7D20\u662F\u9700\u8981\u76D1\u542C\u7684 state \u7684 key
  // \u53EA\u6709\u5F53\u76D1\u542C\u7684 key\u7684\u503C \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3
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
`},25540:function(y,l){"use strict";l.Z=`import { Model } from 'r-model-store';
import { useCreation } from 'r-model-store/hooks';
import React from 'react';


interface State {
  value: string;
}

class Store extends Model<State> {
  constructor() {
    super({
      state: {
        value: '',
      },
    });
  }
  changeValue(val: string) {
    this.setState({
      value: val,
    });
  }
}

const Input = () => {
  const model = useCreation(() => {
    return new Store();
  }, []);
  const { value } = model.useGetState();
  return (
    <div
    >
      userName:
      <input
        value={value}
        onInput={(e) => {
          model.changeValue((e.target as HTMLInputElement).value);
        }}
      />
      <div>userName: {value}</div>
    </div>
  );
};

export default Input;
`},23776:function(y,l){"use strict";l.Z=`import type { CheckboxProps } from 'antd';
import { Checkbox as BaseCheckbox } from 'antd';
import { Model } from 'r-model-store';
import { useCreation } from 'r-model-store/hooks';
import { arrayToObj } from 'r-model-store/utils';
import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useMemo } from 'react';

export type Key = string | number | symbol;

export interface CheckBoxGroupProps {
  value?: Key[];
  onChange?: (val: Key[]) => void;
  children?: ReactNode | ReactNode[];
  keys?: Key[];
}

export interface CheckBoxGroupState {
  value: Key[];
  valueMap: Record<Key, boolean>;
  keys: Key[];
  isCheckAll: boolean;
  indeterminate: boolean;
}
export class CheckBoxGroupModel extends Model<CheckBoxGroupState> {
  keys: Key[] = [];
  timer: any;
  props: CheckBoxGroupProps = {};
  constructor() {
    super({
      state: {
        value: [],
        valueMap: {},
        keys: [],
        isCheckAll: false,
        indeterminate: false,
      },
      computed: [
        {
          keys: ['value'],
          handler: ({ value }) => {
            return {
              valueMap: arrayToObj(value, undefined, () => true),
            };
          },
        },
        {
          keys: ['value', 'keys'],
          handler: ({ valueMap }) => {
            return this.getCheckAllInfo(valueMap);
          },
        },
      ],
    });
  }

  getCheckAllInfo(checkMap?: Record<Key, boolean>) {
    const { valueMap } = this.getState();
    const ckMap = checkMap || valueMap;
    const { keys } = this;
    let indeterminate = false;
    let isCheckAll = true;
    keys.forEach((k) => {
      const isCheck = ckMap[k];
      if (isCheck) {
        indeterminate = true;
      } else {
        isCheckAll = false;
      }
      return isCheck;
    });
    if (isCheckAll) {
      indeterminate = false;
    }
    return {
      isCheckAll,
      indeterminate,
    };
  }

  handleToggleCheckAll() {
    const { isCheckAll } = this.getState();
    let newKeys: Key[];
    if (isCheckAll) {
      newKeys = [];
    } else {
      newKeys = [...this.keys];
    }
    if (!('value' in this.props)) {
      this.setState({
        value: newKeys,
      });
    }
    this.props.onChange?.(newKeys);
  }

  handleToggleCheck(key: Key) {
    const { valueMap, value } = this.getState();
    const isCheck = valueMap[key];
    let newKeys = [...value];
    if (isCheck) {
      newKeys = newKeys.filter((k) => k !== key);
    } else {
      newKeys.push(key);
    }
    if (!('value' in this.props)) {
      this.setState({
        value: newKeys,
      });
    }
    this.props.onChange?.(newKeys);
  }

  registerKey(key: Key) {
    if (!this.keys.includes(key)) {
      this.keys.push(key);
    }
    this.__updateKeys();
  }
  setKeys(keys: Key[]) {
    this.keys = keys;
    this.__updateKeys();
  }
  unRegisterKey(key: Key) {
    this.keys = this.keys.filter((k) => k !== key);
    this.__updateKeys();
  }
  __updateKeys() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({
        keys: [...this.keys],
      });
    }, 10);
  }
}
export function useCheckBoxGroup(props: CheckBoxGroupProps) {
  const hasValue = 'value' in props;
  const model = useCreation(() => {
    return new CheckBoxGroupModel();
  }, []);
  model.props = props;

  useMemo(() => {
    if (hasValue) {
      // \u5904\u7406\u5916\u90E8\u4F20\u5165\u7684value \uFF08\u53D7\u63A7\u6A21\u5F0F\uFF09
      model.setState(
        {
          value: props.value || [],
        },
        {
          silent: true,
        },
      );
    }
  }, [props.value, model, hasValue]);

  return model;
}

type CheckBoxGroupContextValue = {
  model: CheckBoxGroupModel;
  useGroupKeys: boolean;
};

export const CheckBoxGroupContext = createContext<CheckBoxGroupContextValue>({
  model: new CheckBoxGroupModel(),
  useGroupKeys: false,
});

const CheckBoxGroup = (props: CheckBoxGroupProps) => {
  const model = useCheckBoxGroup(props);
  const hasKeys = 'keys' in props;
  useEffect(() => {
    if (hasKeys) {
      model.setKeys(props.keys || []);
    }
  }, [props.keys, model, hasKeys]);

  return (
    <CheckBoxGroupContext.Provider
      value={{
        model,
        useGroupKeys: hasKeys,
      }}
    >
      {props.children}
    </CheckBoxGroupContext.Provider>
  );
};

const Checkbox = (props: CheckboxProps & { value?: Key }) => {
  const { value, ...restProps } = props;
  const { model, useGroupKeys } = useContext(CheckBoxGroupContext);
  const { valueMap } = model.useGetState();
  const isCheck = valueMap[value];
  useMemo(() => {
    if (!useGroupKeys) {
      model.registerKey(value);
    }
    return () => {
      if (!useGroupKeys) {
        model.unRegisterKey(value);
      }
    };
  }, [model, value, useGroupKeys]);
  return (
    <BaseCheckbox
      {...restProps}
      checked={isCheck}
      onChange={() => {
        model.handleToggleCheck(value);
      }}
    />
  );
};

const CheckBoxAll = (props: CheckboxProps) => {
  const { model } = useContext(CheckBoxGroupContext);
  const { isCheckAll, indeterminate } = model.useGetState();
  return (
    <BaseCheckbox
      {...props}
      checked={isCheckAll}
      indeterminate={indeterminate}
      onChange={() => {
        model.handleToggleCheckAll();
      }}
    />
  );
};

CheckBoxGroup.Checkbox = Checkbox;
CheckBoxGroup.CheckboxAll = CheckBoxAll;

export default () => {
  const [value, setValue] = React.useState<Key[]>([]);
  return (
    <div
    >
      <div>
        \u9009\u4E2D\u7684\u503C\uFF1A
        {value.map((v) => (
          <span key={String(v)}>{String(v)},</span>
        ))}
      </div>
      <CheckBoxGroup
        onChange={(checkedKeys) => {
          setValue(checkedKeys);
          console.log(checkedKeys);
        }}
      >
        <ul>
          <li>
            <CheckBoxGroup.Checkbox
              style={{
                color: '#000',
              }}
              value="apple"
            >
              Apple
            </CheckBoxGroup.Checkbox>
          </li>
          <li>
            <CheckBoxGroup.Checkbox
              style={{
                color: '#000',
              }}
              value="banana"
            >
              Banana
            </CheckBoxGroup.Checkbox>
          </li>
          <li>
            <CheckBoxGroup.Checkbox
              style={{
                color: '#000',
              }}
              value="orange"
            >
              Orange
            </CheckBoxGroup.Checkbox>
          </li>
          <li>
            <CheckBoxGroup.Checkbox
              style={{
                color: '#000',
              }}
              value="pear"
            >
              Pear
            </CheckBoxGroup.Checkbox>
          </li>
        </ul>
      </CheckBoxGroup>
    </div>
  );
};
`},38492:function(y,l){"use strict";l.Z=`import { useModel } from 'r-model-store';
import React from 'react';

interface State {
  value: string;
}

interface Effects {
  changeValue: (val: string) => void;
}

const Input = () => {
  const model = useModel<State, Effects>({
    state: {
      value: '',
    },
    effects: {
      changeValue: (val) => {
        model.setState({
          value: val,
        });
      },
    }
  });
  const { value } = model.useGetState();
  return (
    <div
    >
      userName:
      <input
        value={value}
        onInput={(e) => {
          model.getEffect('changeValue')((e.target as HTMLInputElement).value);
        }}
      />
      <div>userName: {value}</div>
    </div>
  );
};

export default Input;
`},6106:function(y,l){"use strict";l.Z=`import { useModel } from 'r-model-store';
import React, { useMemo } from 'react';

interface State {
  value: string;
}

interface Effects {
  changeValue: (val: string) => void;
}

interface InputProps {
  value?: string;
  onChange?: (val: string) => void;
}
const Input = (props: InputProps) => {
  const hasValue = 'value' in props;

  const model = useModel<State, Effects>({
    state: {
      value: '',
    },
    effects: {
      changeValue: (val: string) => {
        if (!hasValue) {
          model.setState({
            value: val,
          });
        }

        props.onChange?.(val);
      },
    },
  });

  useMemo(() => {
    // \u52A0\u4E0Asilent: true, \u4ECE\u800C\u4EC5\u66F4\u65B0\u72B6\u6001\u800C\u4E0D\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6
    if (hasValue) {
      model.setState(
        {
          value: props.value,
        },
        {
          silent: true,
        },
      );
    }
  }, [props.value]);

  const { value } = model.useGetState();
  return (
    <input
      value={value}
      onInput={(e) => {
        model.getEffect('changeValue')((e.target as HTMLInputElement).value);
      }}
    />
  );
};

export default () => {
  const [value, setValue] = React.useState('');
  return (
    <div
    >
      <div>
        \u53D7\u63A7\u7EC4\u4EF6\uFF1A
        <Input value={value} onChange={(val) => setValue(val)} />
      </div>
      <div>
        \u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A
        <Input />
      </div>
    </div>
  );
};
`},94580:function(y,l){"use strict";l.Z=`import { useDebounceFn } from 'ahooks';
import React, { useEffect } from 'react'

function searchApi(keyword: string): Promise<string> {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(\`result for \${keyword}\`);
    }, Math.random() > 0.5 ? 1000 : 3000);
  })
}

export default function() {
  const [keyword, setKeyword] = React.useState('');
  const [result, setResult] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const {run: handleSearch} = useDebounceFn(async (kw: string) => {
    setLoading(true);
    const res = await searchApi(kw);
    setResult(res);
    setLoading(false);
  }, {
    wait: 300
  })

  useEffect(() => {
    if (keyword) {
      handleSearch(keyword)
    }
  }, [keyword])

  return (
    <div>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <div>
        {loading ? 'loading...' : result}
      </div>
    </div>
  )
}
`},39081:function(y,l){"use strict";l.Z=`import { useModel } from 'r-model-store';
import { useDebounceFn } from 'ahooks';
import React, { useEffect } from 'react';

function searchApi(keyword: string, abortController?: AbortController): Promise<string> {
  let timer: any = 0;
  if (abortController) {
    abortController.signal.onabort = () => {
      clearTimeout(timer);
    }
  }
  return new Promise((resolve) => {
    timer = setTimeout(() => {
      resolve(\`result for \${keyword}\`);
    }, Math.random() > 0.5 ? 1000 : 3000);
  })
}


interface SearchState {
  keyword: string;
  result: string;
  loading: boolean;
}

interface SearchEffects {
  handleSearch: (keyword: string) => void;
}
export default function () {
  const model = useModel<SearchState, SearchEffects>({
    state: {
      keyword: '',
      result: '',
      loading: false,
    },
    effects: {
      handleSearch: async (keyword: string) => {
        model
          .asyncManager('fetchSearch', {
            loadingKey: 'loading',
          })
          .exec(async ({ lastAbortController, abortController }) => {
            if (lastAbortController) {
              // \u53D6\u6D88\u4E0A\u4E00\u6B21\u8BF7\u6C42
              console.log('abort last request')
              lastAbortController.abort();
            }
            const res = await searchApi(keyword, abortController);
            return {
              result: res,
            };
          }).catch(() => {});
      },
    },
  });
  const { keyword, result, loading } = model.useGetState();

  const { run: handleSearch } = useDebounceFn(
    async (kw: string) => {
      return model.getEffect('handleSearch')(kw);
    },
    {
      wait: 300,
    },
  );

  useEffect(() => {
    if (keyword) {
      handleSearch(keyword);
    }
  }, [keyword]);

  return (
    <div >
      <input
        value={keyword}
        onChange={(e) =>
          model.setState({
            keyword: e.target.value,
          })
        }
      />
      <div>{loading ? 'loading...' : result}</div>
    </div>
  );
}
`},27041:function(y,l){"use strict";l.Z=`import { Model } from 'r-model-store';
import { useCreation } from 'ahooks';
import { produce } from 'immer';
import React from 'react';


interface TodoItem {
  id: string;
  text: string;
}
interface TodoState {
  todos: TodoItem[];
}

class TodoStore extends Model<TodoState> {
  constructor() {
    super({
      state: {
        todos: [],
      },
    });
  }

  addTodo() {
    this.setState(
      produce(this.getState(), (state) => {
        state.todos.push({
          id: Math.random().toString(36).slice(2),
          text: 'new todo',
        });
      }),
    );
  }
  removeTodo(id: string) {
    this.setState(
      produce(this.getState(), (state) => {
        state.todos = state.todos.filter((todo) => todo.id !== id);
      }),
    );
  }
  editTodo(id: string, text: string) {
    this.setState(
      produce(this.getState(), (state) => {
        const todo = state.todos.find((t) => t.id === id);
        if (todo) {
          todo.text = text;
        }
      }),
    );
  }
}
export default () => {
  const model = useCreation(() => {
    return new TodoStore();
  }, []);
  const { todos } = model.useGetState();
  return (
    <div>
      <button type="button" onClick={() => model.addTodo()}>add todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            value={todo.text}
            onInput={(e) => {
              model.editTodo(todo.id, (e.target as HTMLInputElement).value);
            }}
          />
          <button type="button" onClick={() => model.removeTodo(todo.id)}>remove</button>
        </div>
      ))}
    </div>
  );
};
`},11090:function(y,l){"use strict";l.Z=`import { useModel } from 'r-model-store';
import React from 'react';

function fetchApi(success: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve('success');
      } else {
        reject(new Error('fail'));
      }
    }, 1000);
  });
}

interface State {
  loading: boolean;
  result: string;
  error: Error | null;
}

interface Effects {
  fetch: () => void;
}
export default () => {
  const [tryCount, setTryCount] = React.useState(0);
  const model = useModel<State, Effects>({
    state: {
      loading: false,
      result: '',
      error: null,
    },
    effects: {
      fetch: async () => {
        model
          .asyncManager('fetch', {
            loadingKey: 'loading',
            errorKey: 'error',
            config: {
              retryCount: 3,
            },
          })
          .exec(async (abortController, tryCountData) => {
            setTryCount(tryCountData);
            const res = await fetchApi(tryCountData === 3);
            return {
              result: res,
            };
          });
      },
    },
  });
  const { loading, result } = model.useGetState();
  return (
    <div>
      <button type="button" onClick={() => model.getEffect('fetch')()}>
        fetch
      </button>
      <div>loading: {loading ? 'loading' : 'loaded'}</div>
      <div>result: {result}</div>
      <div>tryCount: {tryCount}</div>
    </div>
  );
};
`}}]);
