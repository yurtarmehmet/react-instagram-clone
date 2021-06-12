import React from 'react';
import styles from './Link.module.scss';

const Link = (props) => {
  const { children, ...domProps } = props;
  return (
    <a className={styles.link} {...domProps}>
      {children}
    </a>
  );
};

export default Link;
