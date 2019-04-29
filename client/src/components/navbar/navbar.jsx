import React, { Component } from 'react'
import {
  Nav,
  Navbar
} from 'react-bootstrap';
import ReactGA from 'react-ga';

import '../../assets/css/react-strap.css';
import './navbar.css';
import Logo from '../logo/logo';

export default class navbar extends Component {
  setEventLinkWhyDishkon = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Link Kenapa Dishkon - Navbar',
      label: 'User click link on navigation bar',
      nonInteraction: true
    })
  }

  setEventLinkForBusiness = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Link Untuk Pengelola Bisnis - Navbar',
      label: 'User click link on navigation bar',
      nonInteraction: true
    })
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#Kenapa-dishkon" onClick={ () => this.setEventLinkWhyDishkon() }>Kenapa Dishkon</Nav.Link>
            <Nav.Link href="#Pengelola-bisnis" onClick={ () => this.setEventLinkForBusiness() }>Daftarkan Bisnis Anda</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
