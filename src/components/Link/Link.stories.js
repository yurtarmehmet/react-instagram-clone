import React from 'react';
import { default as LinkComponent } from './Link';

export const Link = (args) => (
  <LinkComponent {...args} href="#">
    Example Link
  </LinkComponent>
);

export default {
  title: 'components',
  component: LinkComponent,
};
