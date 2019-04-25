import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './forBusiness.css';

export default class donutShot extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12}>
              <div class="Container-box">
                <img className="Donut-img" src={ process.env.PUBLIC_URL + '/assets/img/Web 1920 – 61.png' } alt="Waste" />
                <div class="Centered-text">
                  <Row>
                    <Col md={12}>
                      <div className="Donut-header">Perhitungan supply dan demand pada industry makanan sulit dilakukan.</div>
                    </Col>
                    <Col md={12}>
                      <div className="Donut-text">
                        Memperkirakan demand makanan setiap hari, mingguan atau tahunan tidaklah mudah. 
                        Faktanya, hal ini adalah salah satu penyebab utama sampah makanan di industri ini. 
                        Makanan yang tidak terjual inilah yang bisa Anda jual di Dishkon.
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
