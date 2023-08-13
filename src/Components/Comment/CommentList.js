import React from 'react';
import Comment from './Comment';
import './Comment.css';
function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <>
            <Comment key={index} text={comment}/>
        </>
      ))}
    </div>
  );
}

export default CommentList;