import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
import { MasonryGrid } from "@egjs/react-grid";
import Pictures from './Components/Pictures.js'
import NavbarCustom from './Components/NavbarCustom.js';
import data from './Components/data.js'; //나중엔 database에서 가져오기
function App() {
  let navigate = useNavigate();
  let [pics, setPics] = useState(data);
  
  return (
    <>
      <NavbarCustom navigate = {navigate}></NavbarCustom>
      <Routes>
        <Route path="/" element={
          <>
            <div className = "main-bg"></div>
            <MasonryGrid className="container" gap={5} defaultDirection={"end"} align={"justify"}>
                {
                  pics.map(function(a,i){
                    return(
                      <>
                      <Pictures pics = {pics} num={i} navigate = {navigate}/>
                      </>
                    )
                  })
                }
            </MasonryGrid>
          </>
        }/>
        <Route path="/detail/:id" element={<div></div>}/>
        <Route path="/myPlay" element={<div></div>}/>
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
