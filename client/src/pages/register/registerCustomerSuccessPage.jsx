import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";

import './register.css';
import '../../assets/css/swal.css';
import Logo from '../../components/logo/logo';

class registerSuccessPage extends Component {
  componentDidMount() {
    ReactGA.pageview('/register-customer-success');
  }

  render() {
    return (
      <div className="Register-page">
        <Helmet
          title="Kurangi Sampah Makanan Dengan Dishkon"
        />
        <Container className="Height-100cent">
          <Row>
            <Col md={12} className="Regisration-logo-box Container-nowrap-center">
              <Logo />
            </Col>
          </Row>
          <Row className="Container-nowrap-center">
            <Col md={12} className="Registration-box">
              <Row className="Registration-inner-box">
                <Col md={12}>
                  <div className="Registration-header-success">Terima kasih !</div>
                </Col>
                <Col md={12}>
                  <div className="Success-text">
                    <div className="Success-header">Dear Customer,</div>

                    <div className="Success-paragraphs">
                      Terima kasih sudah mendaftarkan bisnis Anda pada kami, aplikasi penyelamat makanan pertama di Indonesia. 
                      Tim kami akan segera menghubungi Anda untuk informasi kerja sama lebih lanjut.
                    </div>

                    <div className="Success-paragraphs">
                      Misi sederhana kami adalah untuk mengurangi jumlah sampah makanan di Indonesia dengan cara mendistribusikan makanan yang tidak terjual dan layak makan langsung ke konsumen dengan harga diskon sebelum kadaluwarsa sehingga Anda akan mendapatkan manfaat maksimal dari setiap makanan yang sudah Anda masak.
                      Jika Anda ingin terlibat dalam perkembangan atau jika Anda memiliki pertanyaan, silakan hubungi kami di <a style={{ color: '#F45087', textDecoration: 'underline' }} href="mailto:support@dishkon.co">support@dishkon.co</a>.
                    </div>

                    <div className="Success-paragraphs">
                      Sekali lagi, kami ucapkan terima kasih.
                    </div>

                    <div className="Success-paragraphs Sincere-margin">
                      Sincerely,
                    </div>
                    <div className="Success-paragraphs">
                      Dishkon Team
                    </div>
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

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (registerSuccessPage);