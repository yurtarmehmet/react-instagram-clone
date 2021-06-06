import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = (props) => {
  const { label, variation, size, loading, ...args } = props;
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: variation === 'primary',
        [styles.secondary]: variation === 'secondary',
        [styles.smButton]: size === 'sm',
        [styles.mdButton]: size === 'md',
        [styles.blockButton]: size === 'block',
        [styles.loadingButton]: loading,
      })}
      {...args}
    >
      {loading ? <span>...</span> : label}
    </button>
  );
};

Button.propTypes = {
  variation: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'block']),
  label: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  variation: 'primary',
  size: 'md',
  label: 'Default',
  loading: false,
};

export default Button;
