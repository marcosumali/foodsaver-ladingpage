import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import './download.css';

export default class Register extends Component {
  setEventRangerRegister = () => {
    ReactGA.event({
      category: 'Avenger',
      action: 'Click Ranger Register',
      label: 'User click link to register as Ranger',
      nonInteraction: true
    })
  }

  render() {
    return (
      <div id="Header" className="Header-box">
        <Container className="Header-inner-box">
          <Row className="Header-inner-box">
            <Col md={12} lg={6} className="Container-nowrap-center">
              <img className="Header-image" src={ process.env.PUBLIC_URL + '/assets/img/MobileApps.png' } alt="Header" />
            </Col>
            <Col md={12} lg={6}  className="Container-nowrap-center-cross">
              <Row>
                <Col md={12} className="Header-text-box">
                  <div className="Header-text">
                    Hey, aplikasi kami masih dalam tahap pengembangan tetapi kami punya komunitas online.
                  </div>
                </Col>
                <Col md={12} className="Header-desc-text-box">
                  <div className="Header-desc-text">
                    Mari bergabung dalam komunitas online kami untuk selalu menjadi yang pertama tahu ketika ada makanan yang dapat kamu selamatkan dengan harga dishkon dari mitra kami.
                  </div>
                </Col>
                <Col md={12} className="Header-download-box">
                  <div className="Header-download">
                    <Row>
                      <Col sm={12} className="Container-nowrap-start">
                        <Link style={{ textDecoration: 'none' }} to="/rangers-assemble" onClick={ () => this.setEventRangerRegister() }>
                          <div className="Header-download-box Download-box">
                            <div className="Download-text">Register Now</div>
                          </div>
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
