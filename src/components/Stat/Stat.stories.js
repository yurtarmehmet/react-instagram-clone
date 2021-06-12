import React from 'react';

import Stat from './Stat';

export const StatExample = (args) => <Stat {...args} />;
StatExample.args = {
  count: 972,
  label: 'posts',
};

export default {
  title: 'components/Stat',
  component: Stat,
};
