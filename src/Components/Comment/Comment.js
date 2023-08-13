import React from 'react';
import './Comment.css';
function Comment({ text }) {
  return (
    <div className="comment">
      <img src = {process.env.PUBLIC_URL + '/img/profile_2_95k.jpg'} className='comment-profile' ></img>
      <span className='comment-nickname'>2_95k</span>
      <span>{text}</span>
    </div>
  );
}

export default Comment;
