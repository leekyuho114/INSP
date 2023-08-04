import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { Form, InputGroup} from 'react-bootstrap';
import './Detail.css';
function Detail(props){

  
  let {id} = useParams();
  let nextId = parseInt(id,10) +1;
  const pid = props.pics.findIndex(pic=>pic.id==id);
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {

      setInputValue('');
    }
  };
  if(id <= 13 && id>=0){
    return(
      <div className="container">
        
        <div className="row">

          <div className="col-md-6">
            <img src={process.env.PUBLIC_URL + '/img/row'+ nextId +'.jpg'} className="detail-pic"/>
          </div>

          <div className="col-md-6">
            <InputGroup className="mb-3" style={{ maxWidth: '100%' , marginTop : '20px'}}>
              <InputGroup.Text id="inputGroup-sizing-default">
                Comment
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </InputGroup>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h4 className="pt-5">{props.pics[pid].title}</h4>
            <p>{props.pics[pid].content}</p>
            <p>{props.pics[pid].content}</p>
            <div style={{ display: 'flex', justifyContent: 'left' }}></div>
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