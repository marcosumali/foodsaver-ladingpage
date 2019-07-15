import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import NavigationBar from '../../components/navbar/navbar';

import './header.css';

export default class header extends Component {
  setEventAndroidDownload = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Download Android - Header',
      label: 'Black',
      nonInteraction: true
    })
  }

  setEventAppleDownload = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Download IOS - Header',
      label: 'Black',
      nonInteraction: true
    })
  }

  render() {
    return (
      <div id="Header" className="Header-box">
        <NavigationBar />
        <Container className="Header-inner-box">
          <Row className="Header-inner-box">
            <Col md={12} lg={6} className="Container-nowrap-center">
              <img className="Header-image" src={ process.env.PUBLIC_URL + '/assets/img/MobileApps.png' } alt="Header" />
            </Col>
            <Col md={12} lg={6}  className="Container-nowrap-center-cross">
              <Row>
                <Col md={12} className="Header-text-box">
                  <div className="Header-text">
                    Aplikasi yang bantu kamu selamatkan makanan yang tidak terjual agar tidak menjadi sampah makanan.
                  </div>
                </Col>
                <Col md={12} className="Header-desc-text-box">
                  <div className="Header-desc-text">
                    13 juta ton makanan terbuang di Indonesia. Dengan aplikasi Dishkon, kamu dapat menemukan berbagai makanan lezat dari restoran, kafe, toko kue dan pasar swalayan untuk dinikmati dengan harga diskon.
                  </div>
                </Col>
                <Col md={12} className="Header-download-box">
                  <div className="Header-download">
                    <Row>
                      <Col sm={12} md={6} className="Container-wrap-center Header-download-box">
                        <Link to="/register-user" onClick={ () => this.setEventAppleDownload() }>
                          <img src={ process.env.PUBLIC_URL + '/assets/img/Download_on_AppStore.png' } alt="Download-app-black" />
                        </Link>
                      </Col>
                      <Col sm={12} md={6} className="Container-wrap-center Header-download-box">
                        <Link to="/register-user" onClick={ () => this.setEventAndroidDownload() }>
                          <img src={ process.env.PUBLIC_URL + '/assets/img/Download_on_GooglePlay.png' } alt="Download-app-black" />
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}