import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

export default class logo extends Component {
  setEventLogo = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Logo Dishkon',
      label: 'Home',
      nonInteraction: true
    })
  }

  render() {
    return (
      <div>
        <Link to="/" style={{ textDecoration: 'none' }} onClick={ () => this.setEventLogo() }>
          <div className="Container-nowrap-center-cross">
            <div className="Logo-box">
              <img height="50vh" width="50vh" src={ process.env.PUBLIC_URL + '/assets/img/dishkon-logo-600px-white-transparent3.png' } alt="logo" />
            </div>
            <div className="Logo-text">
              Dishkon
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
