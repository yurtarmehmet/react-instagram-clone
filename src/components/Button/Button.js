import React from 'react';
import styles from './Button.module.scss';

const Button = ({ variation }) => {
  return (
    <button
      className={
        variation === 'primary'
          ? `${styles.primary} ${styles.button}`
          : `${styles.secondary} ${styles.button}`
      }
    >
      Example Button
    </button>
  );
};

export default Button;
