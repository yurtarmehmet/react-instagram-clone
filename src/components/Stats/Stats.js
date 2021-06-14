import React from 'react';
import styles from './Stats.module.scss';

const Stats = ({ children }) => {
  return <div className={styles.statContainer}>{children}</div>;
};

export default Stats;
