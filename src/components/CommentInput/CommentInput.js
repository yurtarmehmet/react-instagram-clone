import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import styles from './CommentInput.module.scss';

const CommentInput = (props) => {
  const {
    avatarURL,
    inputValue,
    inputPlaceholder,
    onInputValueChange,
    onPost,
    ...domProps
  } = props;
  return (
    <div {...domProps} className={styles.commentInputContainer}>
      <div>
        <Avatar src={avatarURL} />
      </div>
      <div className={styles.commentInputField}>
        <input
          type="text"
          value={inputValue}
          placeholder="Write a comment"
          onChange={(e) => {
            onInputValueChange(e.target.value);
          }}
        />
        <span
          onClick={() => {
            onPost();
          }}
        >
          Post
        </span>
      </div>
    </div>
  );
};

CommentInput.propTypes = {
  avatarURL: PropTypes.string,
  inputValue: PropTypes.string,
  inputPlaceHolder: PropTypes.string,
  onPost: PropTypes.func,
  onInputValueChange: PropTypes.func,
};
export default CommentInput;
