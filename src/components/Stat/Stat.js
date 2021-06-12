import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stat.module.scss';

const Stat = (props) => {
  const { count, label, ...args } = props;
  return (
    <div className={styles.statContainer} {...args}>
      <span className={styles.count}>{count}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

Stat.propTypes = {
  count: PropTypes.number,
  label: PropTypes.string,
};

Stat.defaultProps = {
  count: null,
  label: '',
};

export default Stat;
