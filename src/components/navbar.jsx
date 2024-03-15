import React from 'react';
import logo from '../assets/netflix_logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
    return (
        <div>
        <Navbar expand="lg" className="bggg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} style={{ width: "100px", height: "55px" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#" className="fw-bold">TV Shows</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Movies</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Recently Added</Nav.Link>
            <Nav.Link href="#" className="fw-bold">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
          <i class="bi bi-search icons" id="ml"></i>
              <div id="kids" className="fw-bold">KIDS</div>
              <i class="bi bi-bell icons" id="ml"></i>
              <i class="bi bi-person-circle icons" id="ml"></i>
            </div>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
    );
  }
  
  export default Navigation;
