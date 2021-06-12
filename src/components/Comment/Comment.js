import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comment.module.scss';

const Comment = (props) => {
  const { name, comment, ...args } = props;
  return (
    <div className={styles.commentContainer} {...args}>
      <span className={styles.name}>{name}</span>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string,
};

Comment.defaultProps = {
  name: 'valou_c',
  comment: 'example comment',
};

export default Comment;
