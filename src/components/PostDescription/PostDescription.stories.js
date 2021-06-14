import React from 'react';
import { default as PostDescriptionComponent } from './PostDescription';

export const PostDescription = (args) => (
  <div style={{ width: '200px', background: '#ffffff', padding: '10px' }}>
    <PostDescriptionComponent {...args} />
  </div>
);
PostDescription.args = {
  name: 'Viviana',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi',
};

export default {
  title: 'components',
  component: PostDescriptionComponent,
};
