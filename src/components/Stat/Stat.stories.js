import React from 'react';

import { default as StatComponent } from './Stat';

export const Stat = (args) => <StatComponent {...args} />;
Stat.args = {
  count: 972,
  label: 'posts',
};

export default {
  title: 'components',
  component: StatComponent,
};
