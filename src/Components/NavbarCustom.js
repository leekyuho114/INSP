import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
function NavbarCustom(props){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [themeColor, setThemeColor] = useState('grey');
    const [navbarStyle, setNavbarStyle] = useState({ // navbar 밑줄 색
        borderBottom : '2px solid ' + themeColor, // 여기서 color state를 사용하여 동적으로 색상을 변경
    });
    const [logoStyle, setLogoStyle] = useState({ //logo css
        color: themeColor,
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '5px',
    });
    const handleMouseOver = () => {// hover 역할 할거임
        setLogoStyle({
          ...logoStyle,
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Change to the desired dark color
        });
      };
    
      const handleMouseLeave = () => {
        setLogoStyle({
          ...logoStyle,
          backgroundColor: 'transparent',
        });
      };
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

  useEffect(() => {// themeColor 바뀔때마다 style 저장한 state 변경 해줌
    setNavbarStyle((prevStyle) => ({
      ...prevStyle,
      borderBottom : '1.5px solid ' + themeColor,
    }));
    setLogoStyle((prevStyle) => ({
      ...prevStyle,
      color: themeColor,
    }));
  }, [themeColor]);
    return(
        <>
        {[false].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3" style={navbarStyle}>
              <Container fluid>
                <Navbar.Brand className ="title-font" style={logoStyle} onClick={()=>{props.navigate('/')}} onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}>InSP</Navbar.Brand>
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
                      Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link onClick={()=>{
                        props.navigate('/');
                        toggleSidebar();
                      }}>Home</Nav.Link>
                      <Nav.Link onClick={()=>{
                        props.navigate('/myPlay');
                        toggleSidebar();
                      }}>myPlay</Nav.Link>
                      <Nav.Link onClick={()=>{
                        props.navigate('/Best');
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
        </>
    );
  }
  
  export default NavbarCustom;