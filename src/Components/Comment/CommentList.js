import React from 'react';
import Comment from './Comment';
import './Comment.css';
function CommentList({ comments }) {
  return (
    <div className="comment-list">
      <p style={{fontWeight : 'bold'}}>댓글 {comments.length}개</p>
      {comments.map((comment, index) => (
        <>
            <Comment key={index} text={comment}/>
            <hr></hr>
            {/* 구분선넣을지 말지 */}
        </>
      ))}
    </div>
  );
}

export default CommentList;