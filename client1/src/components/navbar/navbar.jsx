import React, { Component } from 'react'
import {
  Nav,
  Navbar
} from 'react-bootstrap';

import '../../assets/css/react-strap.css';
import './navbar.css';
import Logo from '../logo/logo';

export default class navbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#Kenapa-dishkon">Kenapa Dishkon</Nav.Link>
            <Nav.Link href="#Pengelola-bisnis">Daftarkan Bisnis Anda</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
