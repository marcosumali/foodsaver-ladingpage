import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import './problem.css';

export default class problem extends Component {
  render() {
    return (
      <div id="Kenapa-dishkon">
        <Container>
          <Row>
            <Col md={12}>
              <div className="Problem-header-box">
                <div className="Problem-header-text">Kenapa Dishkon?</div>
              </div>
            </Col>
          </Row>
          <Row className="Problem-detail-box">
            <Col md={12}>
              <Row>
                <Col md={12} lg={4} className="Problem-box">
                  <Row>
                    <Col md={12} className="Problem-img-box1">
                      <div className="Container-nowrap-center">
                        <img className="Problem-img" src={ process.env.PUBLIC_URL + '/assets/img/round-fastfood.png' } alt="fastfood" />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="Container-nowrap-center">
                        <div className="Problem-text">Setiap orang di Indonesia diestimasi membuang makanan sebanyak 300 kg per tahun.</div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={12} lg={4} className="Problem-box">
                  <Row>
                    <Col md={12} className="Problem-img-box2">
                      <div className="Container-nowrap-center">
                        <img className="Problem-img" src={ process.env.PUBLIC_URL + '/assets/img/round-money.png' } alt="money" />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="Container-nowrap-center">
                        <div className="Problem-text">Total sampah makanan selama setahun di Indonesia setara dengan Rp 50 triliun.</div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={12} lg={4} className="Problem-box">
                  <Row>
                    <Col md={12} className="Problem-img-box3">
                      <div className="Container-nowrap-center">
                        <img className="Problem-img" src={ process.env.PUBLIC_URL + '/assets/img/round-co2.png' } alt="co2" />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="Container-nowrap-center">
                        <div className="Problem-text">Gas metana dari tumpukan sampah makanan dinilai 21x lebih berbahaya daripada CO2.</div>
                      </div>
                    </Col>
                  </Row>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
