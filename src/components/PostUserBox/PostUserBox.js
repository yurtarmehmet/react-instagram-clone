import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './PostUserBox.module.scss';
import PropTypes from 'prop-types';

const PostUserBox = (props) => {
  const { name, avatarURL, ...domProps } = props;
  return (
    <div className={styles.postUserBox} {...domProps}>
      <div className={styles.avatarContainer}>
        <Avatar src={avatarURL} />
      </div>
      <div className={styles.nameContainer}>
        <span>{name}</span>
      </div>
    </div>
  );
};

PostUserBox.propTypes = {
  name: PropTypes.string,
  avatarURL: PropTypes.string,
};

export default PostUserBox;
