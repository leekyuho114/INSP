import React from 'react';
import './Comment.css';
function Comment({ text }) {
  return (
    <div className="comment">
      <p>{text}</p>
    </div>
  );
}

export default Comment;
