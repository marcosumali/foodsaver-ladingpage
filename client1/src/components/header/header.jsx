import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';


import './header.css';

export default class header extends Component {
  render() {
    return (
      <div className="Header-box">
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
                        <img src={ process.env.PUBLIC_URL + '/assets/img/Download_on_AppStore.png' } alt="Download-app-black" />
                      </Col>
                      <Col sm={12} md={6} className="Container-wrap-center Header-download-box">
                        <img src={ process.env.PUBLIC_URL + '/assets/img/Download_on_GooglePlay.png' } alt="Download-app-black" />
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
