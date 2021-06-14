import React from 'react';
import { default as StatsComponent } from './Stats';
import Stat from '../Stat/Stat';

export const Stats = (args) => (
  <StatsComponent {...args}>
    <Stat count={912} label={'followers'} />
    <Stat count={912} label={'followers'} />
    <Stat count={912} label={'followers'} />
  </StatsComponent>
);

export default {
  title: 'components',
  component: StatsComponent,
};
