import React from 'react';

import Avatar from './Avatar';

export const Small = (args) => <Avatar {...args} />;
Small.args = {
  size: 'sm',
};

export const Medium = (args) => <Avatar {...args} />;
Medium.args = {
  size: 'md',
};

export const Large = (args) => <Avatar {...args} />;
Large.args = {
  size: 'lg',
};

export default {
  title: 'components/Avatar',
  component: Avatar,
};
