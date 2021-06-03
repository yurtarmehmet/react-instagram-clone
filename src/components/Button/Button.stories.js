import React from 'react';

import Button from './Button';

export const Primary = (args) => <Button variation="primary" {...args} />;

export const Secondary = (args) => <Button variation="secondary" {...args} />;

export default {
  title: 'components/Button',
  component: Button,
};
