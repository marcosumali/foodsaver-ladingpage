import React, { Component } from 'react'
import {
  Nav,
  Navbar
} from 'react-bootstrap';

import '../../assets/css/react-strap.css';
import './navbar.css';

export default class navbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <div className="Container-nowrap-center-cross">
            <div className="Logo-box">
              <img height="50vh" width="50vh" src={ process.env.PUBLIC_URL + '/assets/img/dishkon-logo-600px-white-transparent3.png' } alt="logo" />
            </div>
            <div className="Logo-text">
              Dishkon
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
