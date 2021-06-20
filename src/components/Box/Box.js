import React from 'react';
import styles from './Box.module.scss';

const Box = ({ children }) => {
  if (children) {
    return <div className={styles.box}>{children}</div>;
  } else {
    return <div className={`${styles.box} ${styles.empty}`}></div>;
  }
};

export default Box;
