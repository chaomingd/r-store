"use strict";(self.webpackChunkr_model_store=self.webpackChunkr_model_store||[]).push([[868],{83933:function(e,n){n.Z=`import { Model } from 'r-model-store';
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
`},64664:function(e,n){n.Z=`import { Model } from 'r-model-store';
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
`},71238:function(e,n){n.Z=`import { Model } from 'r-model-store';
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
`},24472:function(e,n){n.Z=`import { Model } from 'r-model-store';
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
      style={{
        color: '#000',
      }}
    >
      <FirstName />
      <LastName />
    </main>
  );
}
`},18247:function(e,n){n.Z=`import { Model } from 'r-model-store';
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
`},11336:function(e,n){n.Z=`import type { CheckboxProps } from 'antd';
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
`},28250:function(e,n){n.Z=`import { useModel } from 'r-model-store';
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
`},12597:function(e,n){n.Z=`import { useModel } from 'r-model-store';
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
`},83225:function(e,n){n.Z=`import { useDebounceFn } from 'ahooks';
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
`},63142:function(e,n){n.Z=`import { useModel } from 'r-model-store';
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
`},3807:function(e,n){n.Z=`import { Model } from 'r-model-store';
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
`},55770:function(e,n){n.Z=`import { useModel } from 'r-model-store';
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
