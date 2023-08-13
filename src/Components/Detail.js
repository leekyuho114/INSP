import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { Form, InputGroup} from 'react-bootstrap';
import './Detail.css';
import CommentForm from "./Comment/CommentForm.js";
import CommentList from "./Comment/CommentList.js";
function Detail(props){
  let {id} = useParams();
  let nextId = parseInt(id,10) +1;
  const pid = props.pics.findIndex(pic=>pic.id==id);
  const [comments,setComments] = useState([]);
  
  const handleAddComment = (newComment)=>{
    setComments([...comments, newComment]);
  }
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'enter') {

      setInputValue('');
    }
  };
  if(id <= 13 && id>=0){
    return(
      <div className="container">
        
        <div className="row">

          <div className="col-12 col-md-6">
            <img src={process.env.PUBLIC_URL + '/img/row'+ nextId +'.jpg'} className="detail-pic"/>
            <h4 className="pt-5 pic-title">{props.pics[pid].title}</h4>
            <p>{props.pics[pid].content}</p>
          </div>

          <div className="col-12 col-md-6">
            <h5>댓글 3개</h5>
            <CommentForm onAddComment={handleAddComment} />
            <CommentList comments={comments} />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            {/* 원래 제목있었음 */}
          </div>
        </div>
      </div> 
    );
  }
  else{
    return <h1 style={{textAlign : "center"}}>404 Error: Page Not Found</h1>;
  }
}
export default Detail;