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
          <NavDropdown title='Menu' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#home'>Domů</NavDropdown.Item>
            <NavDropdown.Item href='#home'>O nás</NavDropdown.Item>
            
            <NavDropdown.Item href='#home'>Tréninky</NavDropdown.Item>
            <NavDropdown.Item href='#home'>Galerie</NavDropdown.Item>
            <NavDropdown.Item href='#home'>Recenze</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
