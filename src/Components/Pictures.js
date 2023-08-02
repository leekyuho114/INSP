import React, { useState, useEffect } from 'react';
function Pictures(props){
  const [likes, setLikes] = useState(props.pics.map((pic) => pic.likes));
  const handleLikeClick = (index) => () => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };
  return(
    <>
      <div className = 'main-pics'>
        <img  onClick={()=>{props.navigate('/detail/'+(props.num))}} src={process.env.PUBLIC_URL + '/img/row'+ (props.num+1) +'.jpg'} className = 'main-pics'/>
        <img src={process.env.PUBLIC_URL + '/img/profile_'+ (props.pics[props.num].user) +'.jpg'} className = 'user-profile'/>
        <div className='pics-info'>@{props.pics[props.num].user}</div>
      </div>
      <h4>{props.pics[props.num].title}</h4>
      <span onClick={handleLikeClick(props.num)}>💖</span> 
      <span style={{ fontWeight: 'bold' }}>{likes[props.num]}</span>
    </>
  );
}

export default Pictures;

