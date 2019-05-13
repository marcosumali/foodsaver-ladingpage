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
    ReactGA.pageview('/register-success');
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
                  <div className="Registration-header-success">Aplikasi kami akan segera hadir !</div>
                </Col>
                <Col md={12}>
                  <div className="Success-text">
                    <div className="Success-header">Dear User,</div>

                    <div className="Success-paragraphs">
                      Terima kasih sudah mendaftarkan email kamu untuk men-download Dishkon, aplikasi penyelamat makanan pertama di Indonesia. 
                      Maaf, tapi produk ini belum tersedia saat ini dan sedang dalam tahap penelitian dan pengembangan.
                      Sebagai tanda terima kasih kami, terimalah <span style={{ color: '#F45087', fontWeight: 'bold' }}>diskon 10%</span> untuk pembelian pertama kamu. Tim kami akan menghubungi kamu melalui email dan membantu kamu melakukan pemesanan baru setelah produk kami siap. Diskon akan diterapkan secara otomatis pada transaksi pertama kamu.
                    </div>

                    <div className="Success-paragraphs">
                      Misi kami adalah untuk mengurangi jumlah sampah makanan di Indonesia dengan cara mendistribusikan makanan yang tidak terjual dan layak makan langsung ke konsumen dengan harga diskon sebelum kadaluwarsa.
                      Jika kamu ingin terlibat dalam perkembangan atau jika kamu memiliki pertanyaan, silakan hubungi kami di <a style={{ color: '#F45087', textDecoration: 'underline' }} href="mailto:support@dishkon.co">support@dishkon.co</a>.
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