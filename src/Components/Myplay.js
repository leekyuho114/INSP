import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import './Myplay.css';
import Pictures from './Pictures.js';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function Myplay(props){
    let navigate = useNavigate();
    let {usernick} = useParams();
    const uid = props.users.findIndex(users => users.nickname == usernick);
    let nextId = parseInt(uid,10) +1; // profile 사진을 위한 index
    let [pics, setPics] = useState(data);
    const breakpointColumnsObj = {
      default: 5,
      1600 : 4,
      1300 : 3,
      1000: 2,
      700: 1,
    };
    return(
        <Container fluid>
          <Row>
            <Col>
                <img src={process.env.PUBLIC_URL + '/img/profile_'+ (usernick)  +'.jpg'} className ='profile-picture'/>
            </Col>
            <Col className = 'title'>
            <h2>{usernick}</h2> 
            <p style={{color : "grey"}}>{props.users[uid].name}</p>
            <p>{props.users[uid].content}</p>
            </Col>
          </Row>
          <Row>
            <div className = "container-myplay">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid-myplay" // Masonry 그리드를 위한 클래스
                columnClassName="masonry-grid-column-myplay"// 개별 컬럼을 위한 클래스
              >
                {
                  pics.map(function(a,i){
                    if(a.user == usernick){
                      return(
                        <>
                          <Pictures pics = {pics} num={i} navigate = {navigate} option={"masonry"}/>
                        </>
                      )
                    }
                  })
                }
              </Masonry>
            </div>
          </Row>
        </Container>
    );
}

export default Myplay;
