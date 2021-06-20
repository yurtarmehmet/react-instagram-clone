import React from 'react';
import { default as PostsComponent } from './Posts';
import Post from '../Post/Post';

export const Posts = (args) => (
  <div style={{ width: '1200px' }}>
    <PostsComponent>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </PostsComponent>
  </div>
);

export default {
  title: 'components',
  component: PostsComponent,
};
