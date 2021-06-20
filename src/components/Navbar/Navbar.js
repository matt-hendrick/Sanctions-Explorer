import React from 'react';
import Logo from '../../images/logo.png';

//Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" style={{ backgroundColor: '#ffffff' }}>
      <Navbar.Brand href="#home" style={{ paddingLeft: '10px' }}>
        <img alt="Sanctions Explorer Logo" src={Logo} width="250px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link
            style={{
              padding: '12px 20px 10px',
              color: 'rgba(0,0,0,.7)',
            }}
            href="./search"
          >
            Search
          </Nav.Link>
          <Nav.Link
            style={{
              padding: '12px 20px 10px',
              color: 'rgba(0,0,0,.7)',
            }}
            href="./analytics"
          >
            Analytics
          </Nav.Link>
          <Nav.Link
            style={{
              padding: '12px 20px 10px',
              color: 'rgba(0,0,0,.7)',
            }}
            href="./feedback"
          >
            Feedback
          </Nav.Link>
          <Nav.Link
            style={{
              padding: '12px 20px 10px',
              color: 'rgba(0,0,0,.7)',
            }}
            href="./about"
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
