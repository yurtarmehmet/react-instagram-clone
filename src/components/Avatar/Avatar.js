import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';
import cn from 'classnames';

const Avatar = (props) => {
  const { src, size, alt, ...args } = props;
  return (
    <div
      className={cn(styles.avatarContainer, {
        [styles.smAvatar]: size === 'sm',
        [styles.mdAvatar]: size === 'md',
      })}
      {...args}
    >
      <img className={styles.avatarImage} src={src} alt={alt} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md']),
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  size: 'md',
  alt: 'Avatar Image',
};

export default Avatar;
