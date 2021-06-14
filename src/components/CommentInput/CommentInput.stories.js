import React, { useState } from 'react';
import { default as CommentInputComponent } from './CommentInput';

export const CommentInput = (args) => {
  const [inputVal, setInputVal] = useState('');
  return (
    <CommentInputComponent
      inputValue={inputVal}
      onInputValueChange={(newValue) => setInputVal(newValue)}
      onPost={() => {
        alert('Posted');
      }}
      avatarURL="https://randomuser.me/api/portraits/women/44.jpg"
    />
  );
};

export default {
  title: 'components',
  component: CommentInputComponent,
};
