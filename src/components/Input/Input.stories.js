import React, { useState } from 'react';
import Input from './Input';

export const Value = (args) => {
  const [inputVal, setInputVal] = useState('example');
  return (
    <Input
      {...args}
      value={inputVal}
      onChange={(e) => setInputVal(e.target.value)}
    />
  );
};

export const Placeholder = (args) => {
  const [inputVal, setInputVal] = useState('example');
  return (
    <Input
      {...args}
      placeholder={'Write Something'}
      onChange={(e) => setInputVal(e.target.value)}
    />
  );
};

export default {
  title: 'components/Form/Input',
  component: Input,
};
