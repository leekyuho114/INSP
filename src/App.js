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
            <div className = "container">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid" // Masonry 그리드를 위한 클래스
                columnClassName="masonry-grid_column"// 개별 컬럼을 위한 클래스
              >
                {
                  pics.map(function(a,i){
                    return(
                      <>
                        <Pictures pics = {pics} num={i} navigate = {navigate}/>
                      </>
                    )
                  })
                }
                
              </Masonry>
            </div>
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
