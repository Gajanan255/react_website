import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {link,NavLink} from "react-router-dom";

function Topnavbarr() {

  return (
    <div>
    <Navbar bg="dark"  expand="lg" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand"><h1 style={{color:"#0ff",fontFamily:"serif"}} >Shop Now</h1></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
{/*       
             <NavDropdown title="Catogeries" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown>
*/}
            <NavLink to='/product' className="nav-link">Product</NavLink>
            <NavLink to='/about' className="nav-link">About</NavLink>
            <NavLink to='/contact' className="nav-link">Contact</NavLink>
            <NavLink to='/list' className="nav-link">List</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </div>
  )
}

export default Topnavbarr;