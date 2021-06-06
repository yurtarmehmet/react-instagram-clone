import React from 'react';

import Button from './Button';

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  variation: 'primary',
  label: 'Button',
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
  variation: 'secondary',
  label: 'Secondary',
};

export const Small = (args) => <Button {...args} />;
Small.args = {
  variation: 'primary',
  size: 'sm',
  label: 'Small',
};

export const Medium = (args) => <Button {...args} />;
Medium.args = {
  variation: 'primary',
  size: 'md',
  label: 'Medium',
};

export const Block = (args) => <Button {...args} />;
Block.args = {
  variation: 'primary',
  size: 'block',
  label: 'Medium',
};

export const Loading = (args) => <Button {...args} />;
Loading.args = {
  variation: 'secondary',
  size: 'md',
  label: 'Loading',
  loading: true,
};
export default {
  title: 'components/Button',
  component: Button,
};
