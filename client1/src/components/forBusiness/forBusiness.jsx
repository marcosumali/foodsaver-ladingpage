import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './forBusiness.css';
import GroceriesSvg from '../svg/groceries';
import RestaurantSvg from '../svg/restaurant';
import CafeSvg from '../svg/cafes';
import BakeriesSvg from '../svg/bakeries';

export default class forBusiness extends Component {
  render() {
    return (
      <div id="Pengelola-bisnis">
        <Container>
          <Row>
            <Col md={12} className="Business-box">
              <Row>
                <Col md={12} className="Business-header-box">
                  <div className="Business-header">Untuk Pengelola Bisnis Makanan</div>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="Business-header1-box">
                  <div className="Business-header1">Jadilah pemimpin dalam bisnis makanan tanpa sisa makanan sekaligus menghasilkan keuntungan dengan tiga cara mudah.</div>
                </Col>
              </Row>
              <div className="Business-detail-box">
                <Row>
                  <Col md={12} className="Business-desc-box">
                    <div className="Business-desc">1. Upload makanan surplus yang mau Anda jual dengan harga diskon.</div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="Business-desc-box">
                    <div className="Business-desc">2. Customer bisa pick up ke tempat Anda atau delivery oleh partner kami setelah melakukan pembayaran melalui aplikasi.</div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="Business-desc-box">
                    <div className="Business-desc">3. Terima pembayaran dan laporan bulanan atas makanan surplus yang berhasil Anda jual.</div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col md={12}>
                  <Row>
                    <Col xs={6} md={6} lg={3}>
                      <Row>
                        <Col md={12} className="Container-nowrap-center">
                          <GroceriesSvg width="20vw" height="12.5vw" color="#F45087"/>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <div className="Business-title">Pasar Swalayan</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="Container-nowrap-center">
                          <Link to="/register-customer" style={{ textDecoration: 'none' }}>
                            <div className="Register-box">
                              <div className="Register-text">Daftar Gratis</div>
                            </div>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                      <Row>
                        <Col md={12} className="Container-nowrap-center">
                          <RestaurantSvg width="20vw" height="12.5vw" color="#F45087"/>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <div className="Business-title">Restoran</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="Container-nowrap-center">
                          <Link to="/register-customer" style={{ textDecoration: 'none' }}>
                            <div className="Register-box">
                              <div className="Register-text">Daftar Gratis</div>
                            </div>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                      <Row>
                        <Col md={12} className="Container-nowrap-center">
                          <CafeSvg width="20vw" height="12.5vw" color="#F45087"/>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <div className="Business-title">Kafe</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="Container-nowrap-center">
                          <Link to="/register-customer" style={{ textDecoration: 'none' }}>
                            <div className="Register-box">
                              <div className="Register-text">Daftar Gratis</div>
                            </div>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                      <Row>
                        <Col md={12} className="Container-nowrap-center">
                          <BakeriesSvg width="20vw" height="12.5vw" color="#F45087"/>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <div className="Business-title">Toko Roti</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} className="Container-nowrap-center">
                          <Link to="/register-customer" style={{ textDecoration: 'none' }}>
                            <div className="Register-box">
                              <div className="Register-text">Daftar Gratis</div>
                            </div>
                          </Link>
                        </Col>
                      </Row>
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