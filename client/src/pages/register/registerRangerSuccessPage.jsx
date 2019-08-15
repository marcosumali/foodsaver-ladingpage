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
import { getAvenger } from '../../store/firestore/avenger/avenger.actions';

class registerAvengerSuccessPage extends Component {
  componentDidMount() {
    ReactGA.pageview('/rangers-assemble-success');
  }

  render() {
    // console.log('registerRangerSuccess', this.props)
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
                <Col md={12} className="animated fadeIn">
                  <div className="Success-text">
                    {/* {
                      dataLoadingStatus ?
                      <div className="Container-nowrap-center-cross">
                        <div className="Success-header">Dear <LoadingSvg height="3em" width="3em"/>,</div>
                      </div>
                      : */}
                      <div className="Success-header">Dear Rangers,</div>
                    {/* } */}

                    <div className="Success-paragraphs">
                      Terima kasih sudah mendaftarkan data diri kamu untuk bergabung dengan Komunitas Online kami.
                    </div>

                    <div className="Success-paragraphs">
                      Komunitas ini akan berfungsi sebagai media komunikasi untuk mempromosikan makanan-makanan tidak terjual yang sudah berhasil kami kumpulkan dari mitra kami yang bisa kamu beli dengan harga dishkon. 
                    </div>

                    <div className="Success-paragraphs">
                      Admin kami akan segera mendaftarkan nomor Whatsapp kamu ke dalam Komunitas Online kami.
                    </div>

                    <div className="Success-paragraphs">
                      Misi kami adalah untuk mengurangi makanan yang menjadi sampah karena terbuang di Indonesia dengan cara mendistribusikan makanan layak konsumsi yang tidak terjual langsung ke konsumen dengan harga dishkon.
                    </div>

                    <div className="Success-paragraphs">
                      Jika kamu ingin terlibat dalam perkembangan atau jika kamu memiliki pertanyaan, silakan hubungi kami di <a style={{ color: '#F45087', textDecoration: 'underline' }} href="mailto:support@dishkon.co">support@dishkon.co</a>.
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
    avgName: state.avg.name,
    dataLoadingStatus: state.avg.dataLoadingStatus,
    userExist: state.user.existanceStatus,
    avgExist: state.avg.existanceStatus,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getAvenger
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (registerAvengerSuccessPage);