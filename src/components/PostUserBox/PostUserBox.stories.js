import React from 'react';
import { default as PostUserBoxComponent } from './PostUserBox';

export const PostUserBox = (args) => <PostUserBoxComponent {...args} />;
PostUserBox.args = {
  avatarURL: 'https://randomuser.me/api/portraits/women/44.jpg',
  name: 'Vivianna Kiser',
};

export default {
  title: 'components',
  component: PostUserBoxComponent,
};
