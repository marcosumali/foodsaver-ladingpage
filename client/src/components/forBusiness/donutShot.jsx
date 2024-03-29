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
              <div className="Container-box">
                <img className="Donut-img" src={ process.env.PUBLIC_URL + '/assets/img/donut-shot.png' } alt="Waste" />
                <div className="Centered-text">
                  <Row>
                    <Col md={12}>
                      <div className="Donut-header">Perhitungan supply dan demand pada industry makanan sulit dilakukan.</div>
                    </Col>
                    <Col md={12} className="No-padding Donut-box">
                      <div className="Donut-text">
                        Memperkirakan demand makanan setiap hari, mingguan atau tahunan tidaklah mudah.&nbsp;
                        <div className="Donut-text-inner">Faktanya, hal ini adalah salah satu penyebab utama sampah makanan di industri ini.</div>
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
