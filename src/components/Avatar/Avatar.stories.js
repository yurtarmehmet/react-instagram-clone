import React from 'react';

import Avatar from './Avatar';
import Button from '../Button/Button';

export const Small = (args) => <Avatar {...args} />;
Small.args = {
  size: 'sm',
};

export const Medium = (args) => <Avatar {...args} />;
Medium.args = {
  size: 'md',
};

export default {
  title: 'components/Avatar',
  component: Avatar,
};
