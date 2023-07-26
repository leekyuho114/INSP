import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import './Myplay.css';
function Myplay(props){
    let {usernick} = useParams();
    const uid = props.users.findIndex(users => users.nickname == usernick);
    let nextId = parseInt(uid,10) +1; // profile 사진을 위한 index
    return(
        <Container fluid>
          <Row>
            <Col>
                <img src={process.env.PUBLIC_URL + '/img/profile'+ nextId +'.jpg'} className ='profile-picture'/>
            </Col>
            <Col className = 'title'>
            <h2>{usernick}</h2> 
            <p style={{color : "grey"}}>{props.users[uid].name}</p>
            <p>{props.users[uid].content}</p>
            </Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>{uid}</Col>
          </Row>
        </Container>
    );
}

export default Myplay;
