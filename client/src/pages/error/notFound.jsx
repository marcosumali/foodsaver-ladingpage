import React, { Component } from 'react';
import ReactGA from 'react-ga';

import './notFound.css';

export default class notFound extends Component {
  componentDidMount() {
    ReactGA.pageview('/not-found');
  }

  render() {
    return (
      <div id="message">
        <div className="Container-wrap-center animated bounceIn">
          <img src={ process.env.PUBLIC_URL + '/assets/img/customer_service_150-min2.png' } alt="customer_service" />
        </div>
        <h2>404</h2>
        <h1>Page Not Found</h1>
        <p style={{ textAlign: 'justify' }} >Ini bukanlah halaman web yang Anda cari. Silakan periksa kesalahan pada URL dan coba lagi.</p>
        <p style={{ textAlign: 'justify' }} >Untuk setiap pertanyaan, silakan hubungi <a style={{ color: '#F45087', textDecoration: 'underline' }} href="mailto:support@dishkon.co">tim support</a> kami.</p>
      </div>
    )
  }
}
