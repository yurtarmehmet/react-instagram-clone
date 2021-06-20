import React from 'react';
import styles from './Post.module.scss';

const Posts = ({ children }) => {
  return <div className={styles.postsGrid}>{children}</div>;
};

export default Posts;
