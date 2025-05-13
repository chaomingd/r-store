(self.webpackChunkr_model_store=self.webpackChunkr_model_store||[]).push([[60],{66042:function(S,c,a){"use strict";a.d(c,{H:function(){return D},t:function(){return F}});var M=a(31759),E=a.n(M),N=a(26068),C=a.n(N),k=a(25298),b=a.n(k),w=a(17069),O=a.n(w),L=a(82092),p=a.n(L),P=a(75271),j=a(54484),Z=a(62657),I=a.n(Z),H=a(21742),W=a.n(H),z=a(83136),$=a.n(z),T=a(80189),J=300,X=function(x){W()(s,x);var h=$()(s);function s(i){var u;return b()(this,s),u=h.call(this),p()(I()(u),"execId",0),p()(I()(u),"options",{}),p()(I()(u),"abortSignalMap",{}),i&&(u.options=i),u}return O()(s,[{key:"getCurrentExecId",value:function(){return this.execId}},{key:"getAbortController",value:function(u){return this.abortSignalMap[u]}},{key:"exec",value:function(u){var l=this,v=0,m=++this.execId;return this.emit("loading"),new Promise(function(g,y){var G=function V(){var R=l.abortSignalMap[m-1]||null,B=l.abortSignalMap[m]=new AbortController;u({lastAbortController:R,abortController:B},v).then(function(n){return m===l.execId&&l.emit("success",n),g(n),delete l.abortSignalMap[m],l.emit("finish",null,n),n}).catch(function(n){m===l.execId?v<(l.options.retryCount||0)?setTimeout(function(){V()},l.options.retryInterval||J):(l.emit("error",n),y(n),delete l.abortSignalMap[m],l.emit("finish",n,null)):(delete l.abortSignalMap[m],l.emit("finish",n,null),y(n)),v++})};G()})}}]),s}(T.EventEmitter2),K=a(15361),Q=j.useSyncExternalStoreWithSelector,D=function(){function x(h){var s=this;b()(this,x),p()(this,"isUnMount",!1),p()(this,"name",void 0),p()(this,"state",{}),p()(this,"_userData",{}),p()(this,"_effects",{}),p()(this,"_preState",{}),p()(this,"_dispatchSignal",""),p()(this,"_subscribes",[]),p()(this,"asyncManagerMap",{}),p()(this,"_isInited",!1),p()(this,"getState",function(){return s.state}),p()(this,"useSelector",function(i){var u=(0,P.useCallback)(function(g){return s.subscribe(function(y,G){G||g()})},[s]),l=(0,K.useMemoizedFn)(function(g){return g}),v=(0,K.useMemoizedFn)(function(g,y){return i?i(g,y):Object.is(g,y)}),m=Q(u,s.getState,s.getState,l,v);return m}),p()(this,"useGetState",function(i,u){return s.useSelector(function(l,v){return!!(i&&(0,T.shallowEqualKeys)(l,v,i)||u&&u(l,v))})}),this.config=h,h.autoInit!==!1&&this.init()}return O()(x,[{key:"init",value:function(){if(!this._isInited){this._isInited=!0;var s=this.config;this.state=this.getActualState({},s.state||{}),this._preState=C()({},this.state),this._userData=(s==null?void 0:s.userData)||{},s.effects&&this.setEffects(s.effects),s.name&&(this.name=s.name)}}},{key:"asyncManager",value:function(s,i){var u=this,l=i||{},v=l.loadingKey,m=v===void 0?"loading":v,g=l.errorKey,y=g===void 0?"error":g,G=l.showLoading,V=G===void 0?!0:G,R=l.config;this.asyncManagerMap[s]||(this.asyncManagerMap[s]=new X(R));var B=this.asyncManagerMap[s];return B.offAllListeners(),B.on("loading",function(){V&&u.setState(p()({},m,!0))}),B.on("success",function(n){E()(n)==="object"&&n!==null&&u.setState(C()(p()({},m,!1),n))}),B.on("error",function(n){u.setState(p()(p()({},m,!1),y,n))}),this.asyncManagerMap[s]}},{key:"subscribe",value:function(s){var i=this;return this._subscribes.push(s),function(){i.unsubscribe(s)}}},{key:"unsubscribe",value:function(s){this._subscribes.length&&(this._subscribes=this._subscribes.filter(function(i){return i!==s}))}},{key:"getUserData",value:function(){return C()({},this._userData)}},{key:"setUserData",value:function(s){Object.assign(this._userData,s)}},{key:"setState",value:function(s,i){s&&(typeof s=="function"?this.state=this.getActualState(this._preState,s(this.state)):this.state=this.getActualState(this._preState,s),this.config.onStateChange&&this.config.onStateChange(this._preState,this.getState()),this.dispatch(i),this._preState=C()({},this.state))}},{key:"getActualState",value:function(s,i){var u=C()(C()({},s),i),l=this.config||{},v=l.modifyState,m=l.watch,g=l.computed,y;return v&&(y=v(s,u),y&&E()(y)==="object"&&Object.assign(u,y)),u=(0,T.calcComputedState)({prevState:s,nextState:u,computed:g}),(0,T.execWatchHandler)({prevState:s,nextState:u,watch:m}),u}},{key:"dispatch",value:function(s){var i=this;this.isUnMount||this._subscribes.forEach(function(u){return u(i,(s==null?void 0:s.silent)||!1)})}},{key:"setEffect",value:function(s,i){this._effects[s]!==i&&(this._effects[s]=typeof i=="function"?i.bind(this):i)}},{key:"setEffects",value:function(s){var i=this;Object.keys(s).forEach(function(u){i.setEffect(u,s[u])})}},{key:"getEffect",value:function(s){var i=this;return function(){for(var u=arguments.length,l=new Array(u),v=0;v<u;v++)l[v]=arguments[v];return i._effects[s].apply(i,l)}}},{key:"dispose",value:function(){this._effects={},this.state={}}},{key:"subscribeWithKeys",value:function(s,i){var u=this,l=i.keys,v=i.equalityFn;return this.subscribe(function(m,g){var y=u.getState();l&&(0,T.shallowEqualKeys)(u._preState,y,l)||v&&v(u._preState,y)||s(u,g)})}}]),x}();function F(x){var h=(0,P.useMemo)(function(){return new D(x)},[]);return h.config=x,x.effects&&h.setEffects(x.effects),(0,P.useEffect)(function(){return h.isUnMount=!1,function(){h.isUnMount=!0}},[h]),h}},15361:function(S,c,a){"use strict";a.r(c),a.d(c,{useCreation:function(){return C},useLatest:function(){return E},useMemoizedFn:function(){return N}});var M=a(75271);function E(k){var b=(0,M.useRef)(k);return b.current=k,b}function N(k){var b=(0,M.useRef)(k);return b.current=k,(0,M.useCallback)(function(){return b.current.apply(b,arguments)},[])}function C(k,b){var w=E(k);return(0,M.useMemo)(function(){return w.current()},b)}},49900:function(S,c,a){"use strict";a.r(c),a.d(c,{Model:function(){return M.H},useModel:function(){return M.t}});var M=a(66042),E=a(66454),N=a.n(E),C={};for(var k in E)["default","Model","useModel"].indexOf(k)<0&&(C[k]=function(b){return E[b]}.bind(0,k));a.d(c,C)},66454:function(){},80189:function(S,c,a){"use strict";a.r(c),a.d(c,{EventEmitter:function(){return R},EventEmitter2:function(){return B},arrayToMap:function(){return E},arrayToObj:function(){return M},calcComputedState:function(){return x},calcDiffKeys:function(){return F},diffObjectUpdate:function(){return Z},execWatchHandler:function(){return h},filterObject:function(){return j},getFieldsValue:function(){return I},getObjValues:function(){return T},hasProps:function(){return z},isDefined:function(){return O},isObject:function(){return X},isSameObject:function(){return P},isUndefined:function(){return w},makeObject:function(){return J},objectToArray:function(){return W},omit:function(){return p},pick:function(){return L},setFiledsValue:function(){return H},shallowEqualKeys:function(){return $},shortUUID:function(){return D},uuid:function(){return Q}});function M(n,r,e){var o={},t=e||function(d){return d},f=r||function(d){return d};return n&&n.forEach(function(d){o[f(d)]=t(d)}),o}function E(n,r,e){var o=new Map,t=e||function(d){return d},f=r||function(d){return d};return n&&n.forEach(function(d){o.set(f(d),t(d))}),o}var N=a(31759),C=a.n(N),k=a(26068),b=a.n(k);function w(n){return n==null}function O(n){return!w(n)}function L(n,r){var e={};return n&&r.forEach(function(o){e[o]=n[o]}),e}function p(n,r){var e=b()({},n);return n&&(typeof r=="string"?delete e[r]:r.forEach(function(o){delete e[o]})),e}function P(n,r,e){if(!n||!r)return!1;var o=Object.keys(n),t=Object.keys(r);if(o.length!==t.length)return!1;for(var f=e||o,d=0;d<f.length;d++){var A=f[d],U=f[d];if(A!==U||n[A]!==r[U])return!1}return!0}function j(n,r){var e={},o=(r==null?void 0:r.filter)||[];return Object.keys(n).forEach(function(t){w(n[t])||o.includes(n[t])||(e[t]=n[t])}),e}function Z(n,r,e,o){o?Object.keys(r).forEach(function(t){e(t,r[t],n[t])}):Object.keys(r).forEach(function(t){n[t]!==r[t]&&e(t,r[t],n[t])})}function I(n,r){var e=n;if(!e||!r)return e;if(typeof r=="string")return e[r];for(var o=0;o<r.length;o++){var t=r[o];if(e=e[t],!e)return e}return e}function H(n,r,e){if(n&&r){typeof r=="string"&&(n[r]=e);for(var o=n,t=0;t<r.length-1;t++)if(o=o[r[t]],!o)return;o[r[r.length-1]]=e}}function W(n,r){if(!n)return[];var e=r||function(t,f,d){return d},o=[];return Object.keys(n).forEach(function(t){o.push(e(n[t],t,n[t]))}),o}function z(n,r){if(!n||!r||!r.length)return!1;for(var e=0,o=r.length;e<o;e++){var t=r[e];if(typeof t=="string"){if(Object.prototype.hasOwnProperty.call(n,t))return!0}else{if(t.length===1&&Object.prototype.hasOwnProperty.call(n,t[0]))return!0;if(t.length>1){var f=I(n,t.slice(-1));if(O(f)&&Object.prototype.hasOwnProperty.call(n,t[t.length-1]))return!0}}}return!1}function $(n,r,e){return!n||!r?!1:C()(n)==="object"&&C()(r)==="object"?P(n,r,e):!1}function T(n,r){var e={};return r.forEach(function(o){var t=n[o];O(t)&&(e[o]=t)}),e}function J(n,r){var e=n;if(n||(e={}),Array.isArray(r))for(var o=e,t=0;t<r.length-1;t++){var f=r[t];(!o[f]||C()(o[f])!=="object"&&!Array.isArray(o[f]))&&(o[f]={},o=o[f])}return e}function X(n){return n?Object.prototype.toString.call(n)==="[object Object]":!1}function K(){return((1+Math.random())*65536|0).toString(16).substring(1)}function Q(){return K()+"-"+K()+"-"+K()+"-"+K()+"-"+K()}function D(){return K()+K()}function F(n,r,e){var o={},t=!1;return e.forEach(function(f){Object.is(n[f],r[f])||(o[f]=!0,t=!0)}),{diffKeysMap:o,diff:t}}function x(n){var r=n.prevState,e=n.nextState,o=n.computed;return o&&o.reduce(function(t,f){var d;if(typeof f=="function")d=f(t,r);else{var A=F(r,t,f.keys),U=A.diffKeysMap,Y=A.diff;Y&&(d=f.handler(t,U,r))}return d&&Object.assign(t,d),t},e),e}function h(n){var r=n.prevState,e=n.nextState,o=n.watch;o&&o.forEach(function(t){if(t.keys){var f=F(r,e,t.keys),d=f.diffKeysMap,A=f.diff;A&&t.handler&&t.handler(e,d,r)}})}var s=a(21742),i=a.n(s),u=a(83136),l=a.n(u),v=a(25298),m=a.n(v),g=a(17069),y=a.n(g),G=a(82092),V=a.n(G),R=function(){function n(){m()(this,n),V()(this,"_listeners",{})}return y()(n,[{key:"on",value:function(e,o){var t=this;return this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(o),function(){t.off(e,o)}}},{key:"once",value:function(e,o){var t=this.on(e,function(){o.apply(void 0,arguments),t()})}},{key:"emit",value:function(e){for(var o=arguments.length,t=new Array(o>1?o-1:0),f=1;f<o;f++)t[f-1]=arguments[f];var d=this._listeners[e];return!d||!d.length?!1:(d.forEach(function(A){A.apply(void 0,t)}),!0)}},{key:"off",value:function(e,o){var t=this._listeners[e];if(!(!t||!t.length)){if(!o){this._listeners[e]=void 0;return}this._listeners[e]=t.filter(function(f){return f!==o})}}},{key:"offAllListeners",value:function(){this._listeners={}}}]),n}(),B=function(n){i()(e,n);var r=l()(e);function e(){return m()(this,e),r.apply(this,arguments)}return y()(e)}(R)},83933:function(S,c){"use strict";c.Z=`import { Model } from 'r-model-store';
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
`},64664:function(S,c){"use strict";c.Z=`import { Model } from 'r-model-store';
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
      style={{
        color: '#000',
      }}
    >
      <button type="button" onClick={() => store.setState({ count: count + 1 })}>+</button>
      <button type="button" onClick={() => store.setState({ count: count - 1 })}>-</button>
      <div>count: {count}</div>
      <div>countSq: {countSq}</div>
    </div>
  );
}
`},71238:function(S,c){"use strict";c.Z=`import { Model } from 'r-model-store';
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
      style={{
        color: '#000',
      }}
    >
      <Bear />
      <Fishi />
    </div>
  );
}

export default App;
`},24472:function(S,c){"use strict";c.Z=`import { Model } from 'r-model-store';
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

// In consuming app
export default function App() {
  // useGetState \u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u5143\u7D20\u662F\u9700\u8981\u76D1\u542C\u7684 state \u7684 key
  // \u53EA\u6709\u5F53\u76D1\u542C\u7684 key\u7684\u503C \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u7EC4\u4EF6\u624D\u4F1A\u91CD\u65B0\u6E32\u67D3
  const { firstName } = personStore.useGetState([
    'firstName',
    'lastName',
  ]);
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
`},18247:function(S,c){"use strict";c.Z=`import { Model } from 'r-model-store';
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
      style={{
        color: '#000',
      }}
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
`},11336:function(S,c){"use strict";c.Z=`import type { CheckboxProps } from 'antd';
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
      autoInit: false,
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
    this.init();
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
      style={{
        color: '#000',
      }}
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
`},28250:function(S,c){"use strict";c.Z=`import { useModel } from 'r-model-store';
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
      style={{
        color: '#000',
      }}
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
`},12597:function(S,c){"use strict";c.Z=`import { useModel } from 'r-model-store';
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
      style={{
        color: '#000',
      }}
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
`},83225:function(S,c){"use strict";c.Z=`import { useDebounceFn } from 'ahooks';
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
    <div style={{
      color: '#000'
    }}>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <div>
        {loading ? 'loading...' : result}
      </div>
    </div>
  )
}
`},63142:function(S,c){"use strict";c.Z=`import { useModel } from 'r-model-store';
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
    <div
      style={{
        color: '#000',
      }}
    >
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
`},3807:function(S,c){"use strict";c.Z=`import { Model } from 'r-model-store';
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
    <div
      style={{
        color: '#000',
      }}
    >
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
`},55770:function(S,c){"use strict";c.Z=`import { useModel } from 'r-model-store';
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
    <div
      style={{
        color: '#000',
      }}
    >
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
