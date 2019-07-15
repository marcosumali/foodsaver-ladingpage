import React, { Component } from 'react'
import {
  Nav,
  Navbar
} from 'react-bootstrap';
import ReactGA from 'react-ga';

import '../../assets/css/react-strap.css';
import './navbar.css';
import LogoFB from '../logo/logoFB';

export default class navbar extends Component {
  constructor() {
    super()

    this.state = { 
      bg: 'transparent' 
    }
  }

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

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY >= 900) {
        this.setState({
          bg: "light"
        })
      } else {
        this.setState({
          bg: "transparent"
        })
      }
    })
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>
          <LogoFB />
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
