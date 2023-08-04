import React, { useState, useEffect } from 'react';
import './Pictures.css';
function Pictures(props){
  const [likes, setLikes] = useState(props.pics.map((pic) => pic.likes));
  const handleLikeClick = (index) => () => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };
  if(props.option == "masonry"){
    return(
      <>
        <div className = 'recommend-pics'>
          <img  onClick={()=>{props.navigate('/detail/'+(props.num))}} src={process.env.PUBLIC_URL + '/img/row'+ (props.num+1) +'.jpg'} className = 'recommend-cards'/>
          <div onClick={()=>{props.navigate('/myPlay/'+ (props.pics[props.num].user))}} className='profile-click'>
            <img src={process.env.PUBLIC_URL + '/img/profile_'+ (props.pics[props.num].user) +'.jpg'} className = 'user-profile-rcm'/>
            <div className='pics-info-rcm'>@{props.pics[props.num].user}</div>
          </div>
        </div>
        <h4>{props.pics[props.num].title}</h4>
        <span onClick={handleLikeClick(props.num)}>💖</span> 
        <span style={{ fontWeight: 'bold' }}>{likes[props.num]}</span>
      </>
    );
  }
  else if(props.option == "today"&& props.num+1 > 9){ //나중엔 예외처리가 아니라 실제로 좋아요수를 서버에서 가져오고 이를 통해 최대 좋아요 뽑게끔
    return(
      <div style={{position : 'relative'}}>
        
        <img  onClick={()=>{props.navigate('/detail/'+(props.num))}} src={process.env.PUBLIC_URL + '/img/row'+ (props.num+1) +'.jpg'} className = 'today-cards'/>

        <div onClick={()=>{props.navigate('/myPlay/'+ (props.pics[props.num].user))}} className='profile-click'>
          <img src={process.env.PUBLIC_URL + '/img/profile_'+ (props.pics[props.num].user) +'.jpg'} className = 'user-profile-tdy'/> {/*동그란프로필 사진*/}
          <div className='pics-info-tdy'>@{props.pics[props.num].user}</div> {/*옆에 골뱅이*/}
        </div>
        <h4 style={{marginLeft:"8px"}}>{props.pics[props.num].title}</h4>
        {/* <span onClick={handleLikeClick(props.num)}>💖</span>  */}
        {/* <span style={{ fontWeight: 'bold' }}>{likes[props.num]}</span> */}
      </div>
    );
  }
}

export default Pictures;

