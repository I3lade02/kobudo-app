import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar className='navbar-custom' sticky='top' expand='lg'>
      <Navbar.Brand className='navbar-brand-custom' href='#home'>Choki Kobudo Ryu</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Domů</Nav.Link>
          <Nav.Link href='#about'>O nás</Nav.Link>
          <Nav.Link href='#gallery'>Galerie</Nav.Link>
          <Nav.Link href='#coaches'>Trenéři</Nav.Link>
          <NavDropdown title='Více...' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#schedule'>Tréninky</NavDropdown.Item>
            <NavDropdown.Item href='#testimonials'>Recenze</NavDropdown.Item>
            <NavDropdown.Item href='#downloads'>Soubory ke stažení</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
