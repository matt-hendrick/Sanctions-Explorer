import React from 'react';
import Logo from '../../images/logo.png';

import './Navbar.scss';

//Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function MyNavbar() {
  return (
    <Navbar
      collapseOnSelect
      className="header-desktop rd-shadow"
      light
      expand="md"
      position="fixed"
    >
      <Container className="pt-2 pb-2">
        <Navbar.Brand href="/">
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
              }}
              href="./search"
            >
              Search
            </Nav.Link>
            <Nav.Link
              style={{
                padding: '12px 20px 10px',
              }}
              href="./analytics"
            >
              Analytics
            </Nav.Link>
            <Nav.Link
              style={{
                padding: '12px 20px 10px',
              }}
              href="./feedback"
            >
              Feedback
            </Nav.Link>
            <Nav.Link
              style={{
                padding: '12px 20px 10px',
              }}
              href="./about"
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
