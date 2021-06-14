import React from 'react';
import styles from './PostDescription.module.scss';
import PropTypes from 'prop-types';

const PostDescription = (props) => {
  const { name, description, ...domProps } = props;
  return (
    <div {...domProps}>
      <span className={styles.postAuthorName}>{name}</span>
      <span className={styles.postDescription}>{description}</span>
    </div>
  );
};

PostDescription.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default PostDescription;
