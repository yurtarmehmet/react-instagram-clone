import React from 'react';
import Box from './Box';

export const Empty = (args) => <Box {...args} />;

export const Paragraph = (args) => (
  <Box>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
      dignissimos, eveniet iusto nihil nobis officia placeat sunt. Ab debitis
      deleniti dignissimos, ducimus iure nam natus odio omnis recusandae
      repellat, voluptatibus.
    </p>
  </Box>
);
export default {
  title: 'components/Box',
  component: Box,
};
