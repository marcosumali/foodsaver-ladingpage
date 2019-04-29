import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import './footer.css';
import Logo from '../logo/logo';
import FacebookSvg from '../svg/facebook';
import TwitterSvg from '../svg/twitter';
import InstagramSvg from '../svg/instagram';
import ContactModal from '../modal/contact/contact';

export default class footer extends Component {
  constructor(...args) {
    super(...args)

    this.state = { modalShow: false }
  }

  setEventAndroidDownload = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Download Android - Footer',
      label: 'White',
      nonInteraction: true
    })
  }

  setEventAppleDownload = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Download IOS - Footer',
      label: 'White',
      nonInteraction: true
    })
  }

  setEventFacebook = () => {
    ReactGA.event({
      category: 'Social Media',
      action: 'Click Link Facebook',
      label: 'User open our facebook website',
      nonInteraction: true
    })
  }

  setEventInstagram = () => {
    ReactGA.event({
      category: 'Social Media',
      action: 'Click Link Instagram',
      label: 'User open our instagram website',
      nonInteraction: true
    })
  }

  setEventTwitter = () => {
    ReactGA.event({
      category: 'Social Media',
      action: 'Click Link Twitter',
      label: 'User open our twitter website',
      nonInteraction: true
    })
  }

  setEventLinkWhyDishkon = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Link Kenapa Dishkon - Footer',
      label: 'User click link on footer',
      nonInteraction: true
    })
  }

  setEventLinkForBusiness = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Link Untuk Pengelola Bisnis - Footer',
      label: 'User click link on footer',
      nonInteraction: true
    })
  }

  setEventLinkAboutUs = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Link About Us - Footer',
      label: 'User click link on footer',
      nonInteraction: true
    })
  }

  setEventLinkContact = () => {
    ReactGA.event({
      category: 'User',
      action: 'Click Link Contact - Footer',
      label: 'User click link on footer',
      nonInteraction: true
    })
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false })
    
    return (
      <div className="Footer-box">
        <Container>
          <Row className="Footer-header-box">
            <Col xs={12} md={6}>
              <Logo /> 
            </Col>
            <Col xs={12} md={6}>
              <div className="Container-nowrap-end">
                <div className="Socmed-box">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/dishkon" onClick={ () => this.setEventFacebook() }>
                    <FacebookSvg width="2em" height="2em" color="#ffffff"/>
                  </a>
                </div>
                <div className="Socmed-box">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dishkon" onClick={ () => this.setEventInstagram() }>
                    <InstagramSvg width="2em" height="2em" color="#ffffff"/>
                  </a>
                </div>
                <div className="Socmed-box">
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/dishkon" onClick={ () => this.setEventTwitter() }>
                    <TwitterSvg width="2em" height="2em" color="#ffffff"/>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={12} md={6}>
                  <div className="Download-store-box Container-nowrap-center">
                    <Link to="/register-user" onClick={ () => this.setEventAppleDownload() }>
                      <img className="Download-store-img" src={ process.env.PUBLIC_URL + '/assets/img/Get_on_Appstore_icon.png' } alt="Download-app-black" />
                    </Link>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="Download-store-box Container-nowrap-center">
                    <Link to="/register-user" onClick={ () => this.setEventAndroidDownload() }>
                      <img className="Download-store-img" src={ process.env.PUBLIC_URL + '/assets/img/Get_on_Google_icon.png' } alt="Download-app-black" />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={12} md={6}>
                  <Row className="Link-box">
                    <Col md={12}>
                      <div className="Link-header">Quick Links</div>
                    </Col>
                    <Col md={12}>
                      <a href="#Kenapa-dishkon" onClick={ () => this.setEventLinkWhyDishkon() }>
                        <div className="Link-text">Kenapa Dishkon ?</div>
                      </a>
                    </Col>
                    <Col md={12}>
                      <a href="#Pengelola-bisnis" onClick={ () => this.setEventLinkForBusiness() }>
                        <div className="Link-text">Untuk Pengelola Bisnis</div>
                      </a>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  <Row className="Link-box">
                    <Col md={12}>
                      <div className="Link-header">Dishkon</div>
                    </Col>
                    <Col md={12}>
                      <a href="#Header" onClick={ () => this.setEventLinkAboutUs() }>
                        <div className="Link-text">Tentang Kami</div>
                      </a>
                    </Col>
                    <Col md={12}>
                      <div className="Link-text" onClick={() => { this.setState({ modalShow: true }); this.setEventLinkContact() }}>Hubungi Kami</div>

                      <ContactModal
                        show={this.state.modalShow}
                        onHide={modalClose}
                      />
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
