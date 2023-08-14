import React from 'react';
import Moment from 'moment';
import './Comment.css';
function Comment({ text }) {
  const nowTime= Moment().format('YYYY-MM-DD HH:mm:ss');
  return (
    <div className="comment-container">
      <img src = {process.env.PUBLIC_URL + '/img/profile_2_95k.jpg'} className='comment-profile comment-item' ></img>
      <div className='comment-nickname comment-item'>2_95k</div>
      <img 
        src={process.env.PUBLIC_URL + '/img/heart_button.png'} 
        className='heart-button comment-item'
      />
      <div className='comment-item'>{text}</div>
      <div className='comment-item' style={{color:'grey', fontSize:'12px'}}>{nowTime} 좋아요 {}개</div>
    </div>
  );
}

export default Comment;
