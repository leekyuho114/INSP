import React from 'react';
import Comment from './Comment';
import './Comment.css';
function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <>
          <img src = {process.env.PUBLIC_URL + '/img/profile_2_95k.jpg'} className='comment-profile'></img>
          <Comment key={index} text={comment} />
        </>
      ))}
    </div>
  );
}

export default CommentList;