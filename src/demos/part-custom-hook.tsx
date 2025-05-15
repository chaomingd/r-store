import { useModel } from 'r-model-store';
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
