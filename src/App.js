import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
import Pictures from './Components/Pictures.js'
function App() {
  let navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [themeColor, setThemeColor] = useState('grey');
  const [navbarStyle, setNavbarStyle] = useState({
    borderBottom : '2px solid ' + themeColor, // 여기서 color state를 사용하여 동적으로 색상을 변경
  });
  const [logoStyle, setLogoStyle] = useState({
    color: themeColor,
    fontWeight: 'bold',
  });
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {// 여기서 navbarstyle 변경해줌
    setNavbarStyle((prevStyle) => ({
      ...prevStyle,
      borderBottom : '2px solid ' + themeColor,
    }));
    setLogoStyle((prevStyle) => ({
      ...prevStyle,
      color: themeColor,
    }));
  }, [themeColor]);

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3" style={navbarStyle}>
          <Container fluid>
            {/* <Navbar.Brand className ="title-font"onClick={()=>{navigate('/')}}>InSP</Navbar.Brand> */}
            <Navbar.Brand style={logoStyle} onClick={()=>{navigate('/')}}>InSP</Navbar.Brand>
            <div className ="color-buttons">
              <Button className ="color-button1" onClick={()=>{setThemeColor('rgb(13, 246, 246)')}}></Button>
              <Button className ="color-button2" onClick={()=>{setThemeColor('rgb(235, 231, 17)')}}></Button>
              <Button className ="color-button3" onClick={()=>{setThemeColor('rgb(15, 245, 15)')}}></Button>
            </div>
            
            <Navbar.Toggle 
              aria-controls={`offcanvasNavbar-expand-${expand}`} 
              onClick={toggleSidebar}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={sidebarOpen}
            >
              <Offcanvas.Header closeButton onClick={()=>{toggleSidebar()}}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={()=>{
                    navigate('/');
                    toggleSidebar();
                  }}>Home</Nav.Link>
                  <Nav.Link onClick={()=>{
                    navigate('/myPlay');
                    toggleSidebar();
                  }}>myPlay</Nav.Link>
                  <Nav.Link onClick={()=>{
                    navigate('/Best');
                    toggleSidebar();
                  }}>Best</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Routes>
        <Route path="/" element={
        <>
          <div className = "main-bg"></div>
          <Pictures/>
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
