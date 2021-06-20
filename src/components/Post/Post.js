import React from 'react';
import styles from './Post.module.scss';

const Post = ({ src, description }) => {
  console.log(styles);
  return (
    <div className={styles.post}>
      <img src={src} alt={description} />
    </div>
  );
};

Post.defaultProps = {
  src: 'https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG',
  description: 'alt text',
};

export default Post;
