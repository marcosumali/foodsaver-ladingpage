import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Media
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import './forBusiness.css';
import GroceriesSvg from '../svg/groceries';
import RestaurantSvg from '../svg/restaurant';
import CafeSvg from '../svg/cafes';
import BakeriesSvg from '../svg/bakeries';

export default class forBusiness extends Component {
  setEventRegisterGroceries = () => {
    ReactGA.event({
      category: 'Customer',
      action: 'Click Register - Groceries',
      label: 'Groceries',
      nonInteraction: true
    })
  }

  setEventRegisterRestaurant = () => {
    ReactGA.event({
      category: 'Customer',
      action: 'Click Register - Restaurant',
      label: 'Restaurant',
      nonInteraction: true
    })
  }

  setEventRegisterCafe = () => {
    ReactGA.event({
      category: 'Customer',
      action: 'Click Register - Cafe',
      label: 'Cafe',
      nonInteraction: true
    })
  }

  setEventRegisterBakeries = () => {
    ReactGA.event({
      category: 'Customer',
      action: 'Click Register - Bakeries',
      label: 'Bakeries',
      nonInteraction: true
    })
  }


  render() {
    return (
      <div id="Pengelola-bisnis">
        <Container>
          <Row>
            <Col md={12} className="Business-box">
              <Row>
                <Col md={12} className="Business-header-box">
                  <div className="Business-header-center">Untuk Pengelola Bisnis Makanan</div>
                </Col>
                <Col md={12} className="Business-header-box">
                  <div className="Business-header">Putarlah video 1 menit ini untuk tahu seberapa mudah cara upload makanan yang tidak terjual dalam hitungan detik.</div>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="Business-header1-box">
                  <div className="Business-header1">Ingin tahu seperti apa di dalam aplikasi Dishkon? Dalam panduan 1 menit ini, Anda akan belajar cara mengunggah kelebihan makanan Anda dan melihat semua fitur hebat yang dapat Anda akses.</div>
                </Col>
              </Row>
              <Row className="Video-box">
                <Col md={12}>
                  <Media>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe 
                        title="How to sell foods" 
                        className="embed-responsive-item" 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/gbiCn0T9hA8" 
                        frameBorder="0" 
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      />
                    </div>
                  </Media>
                </Col>
              </Row>
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
                          <Link to="/register-customer" style={{ textDecoration: 'none' }} onClick={ () => this.setEventRegisterGroceries() }>
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
                          <Link to="/register-customer" style={{ textDecoration: 'none' }} onClick={ () => this.setEventRegisterRestaurant() }>
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
                          <Link to="/register-customer" style={{ textDecoration: 'none' }} onClick={ () => this.setEventRegisterCafe() }>
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
                          <Link to="/register-customer" style={{ textDecoration: 'none' }} onClick={ () => this.setEventRegisterBakeries() }>
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