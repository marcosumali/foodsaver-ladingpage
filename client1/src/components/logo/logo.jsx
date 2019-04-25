import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class logo extends Component {
  render() {
    return (
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="Container-nowrap-center-cross">
          <div className="Logo-box">
            <img height="50vh" width="50vh" src={ process.env.PUBLIC_URL + '/assets/img/dishkon-logo-600px-white-transparent3.png' } alt="logo" />
          </div>
          <div className="Logo-text">
            Dishkon
          </div>
        </div>
      </Link>
    )
  }
}
