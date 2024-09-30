import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="#home">Choki Kobudo Ryu</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Domů</Nav.Link>
        <Nav.Link href="#about">O nás</Nav.Link>
        <Nav.Link href="#schedule">Tréninky</Nav.Link>
        <Nav.Link href="#gallery">Galerie</Nav.Link>
        <Nav.Link href="#testimonials">Recenze</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
