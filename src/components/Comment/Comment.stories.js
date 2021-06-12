import React from 'react';

import { default as CommentComponent } from './Comment';

export const Comment = (args) => <CommentComponent {...args} />;
CommentComponent.args = {
  name: 'valou_c',
  comment: 'example comment',
};

export default {
  title: 'components/Comment',
  component: CommentComponent,
};
