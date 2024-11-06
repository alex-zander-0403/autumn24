import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar(): JSX.Element {
  return (
    <Navbar className="mb-3" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            Posts
          </NavLink>
          <NavLink className="nav-link" to="/stat">
            Statistics
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
