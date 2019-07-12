import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import ReactGA from 'react-ga';

import './header.css';
import NavigationBar from '../../components/navbar/navbar';

export default class header extends Component {
  setEventOurMarketplace = () => {
    ReactGA.event({
      category: 'Marketplace',
      action: 'Click Marketplace',
      label: 'User click link to see our marketplace',
      nonInteraction: true
    })
  }

  render() {
    return (
      <div id="Header" className="Background-box">
        <NavigationBar />
        <Container>
          <Row>
            <Col sm={12} className="Background-header-box Container-wrap-center">
              <Row className="Bg-header-box Container-wrap-center-content">
                <Col sm={12} className="Bg-inside-box Container-nowrap-center">
                  <div className="Bg-header-text">Platform yang bantu kamu selamatkan makanan yang tidak terjual agar tidak menjadi sampah makanan.</div>
                </Col>
                <Col sm={12} className="Bg-second-box Container-nowrap-center">
                  <div className="Bg-text">13 juta ton makanan terbuang di Indonesia. Dengan Marketplace Dishkon, kamu dapat menemukan berbagai makanan lezat dari restoran, kafe, toko kue dan pasar swalayan untuk dinikmati dengan harga diskon.</div>
                </Col>
                <Col sm={12} className="Container-nowrap-start">
                  <a 
                    style={{ textDecoration: 'none' }}  
                    href="https://shopee.co.id/dishkon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={ () => this.setEventOurMarketplace() }
                  >
                    <div className="Marketplace-box Container-nowrap-center">
                      <div className="Marketplace-text">Marketplace Kami</div>
                    </div>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
