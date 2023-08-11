import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

import Masonry from 'react-masonry-css';
import Pictures from './Components/Pictures.js'
import NavbarCustom from './Components/NavbarCustom.js';
//나중엔 database에서 가져오기
import data from './Components/data.js';
import User from './Components/User.js';
import Detail from './Components/Detail.js';
import Showcase from './Components/Showcase.js';
import Myplay from './Components/Myplay.js';
//picture를 today로넘기면 오늘 최고 좋아요 사진 4개, marsonry로 넘기면 추천사진 marsonry
function App() {
  let navigate = useNavigate();
  let [pics, setPics] = useState(data);
  let [users, setUsers] = useState(User);
  const breakpointColumnsObj = {
    default: 5,
    1600 : 4,
    1300 : 3,
    1000: 2,
    700: 1,
  };
  return (
    <>
      <NavbarCustom navigate = {navigate}></NavbarCustom>
      <Routes>
        <Route path="/" element={
          <>
            <Showcase/>
            <h4 className='main-title'>오늘 INSP</h4>
            <div className='today-pics'>
            {
                  pics.map(function(a,i){
                    return(
                      <>
                        <Pictures pics = {pics} num={i} navigate = {navigate} option ={"today"}/>
                      </>
                    )
                  })
            }
            </div>
            <hr className="horizontal-line" />
            <h4 className='main-title'>@2_95k 추천 INSP</h4>
            <div className = "container-masonry">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid-app" // Masonry 그리드를 위한 클래스
                columnClassName="masonry-grid-column-app"// 개별 컬럼을 위한 클래스
              >
                {
                  pics.map(function(a,i){
                    return(
                      <>
                        <Pictures pics = {pics} num={i} navigate = {navigate} option ={"masonry"}/>
                      </>
                    )
                  })
                }
                
              </Masonry>
            </div>
            <hr className="horizontal-line" />
          </>
        }/>
        <Route path="/detail/:id" element={<div><Detail pics = {pics} num={1}/></div>}/>
        <Route path="/myPlay/:usernick" element={<div><Myplay users = {users}></Myplay></div>}/>
        <Route path="/Best" element={<div></div>}>
          <Route path="one" element={<div></div>}/>
          <Route path="two" element={<div></div>}/>
        </Route>
        <Route path="*" element={<div>404 ERROR</div>}/>
      </Routes>
    </>
  );
}

export default App;
