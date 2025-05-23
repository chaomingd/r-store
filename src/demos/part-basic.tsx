import { Model } from 'r-model-store';
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
