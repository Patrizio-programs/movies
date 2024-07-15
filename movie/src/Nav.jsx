import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Movie App</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#series">Series</Nav.Link>
        <Nav.Link href="#movies">Movies</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavComponent;