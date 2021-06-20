import React from 'react';
import { default as PostComponent } from './Post';

export const Post = (args) => (
  <div style={{ width: '300px' }}>
    <PostComponent {...args} />
  </div>
);
Post.args = {
  src: 'https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG',
  alt: 'My photo',
};

export default {
  title: 'components',
  component: PostComponent,
};
