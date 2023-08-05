import React, { useState } from 'react';
import { Form, InputGroup} from 'react-bootstrap';
import './Comment.css';
function CommentForm({onAddComment}){ //props 넘기는거랑 똑같음
    const [newComment,setNewComment] = useState('');
    const handleInputChange = (event) => {
      setNewComment(event.target.value);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        onAddComment(newComment);
        setNewComment('');
      }
    };
    return(
        <>
            <InputGroup className="mb-3" style={{ maxWidth: '100%' , marginTop : '20px'}}>
              <InputGroup.Text id="inputGroup-sizing-default">
                Comment
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={newComment}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </InputGroup>
        </>
    );
}

export default CommentForm;
