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
import { Redirect } from 'react-router-dom';

import './register.css';
import '../../assets/css/swal.css';
import Logo from '../../components/logo/logo';
import { getAvenger } from '../../store/firestore/avenger/avenger.actions';
import LoadingSvg from '../../components/svg/loading';

class registerAvengerSuccessPage extends Component {
  componentWillMount() {
    let { id } = this.props.match.params
    this.props.getAvenger(id, 'success')
  }

  componentDidMount() {
    ReactGA.pageview('/avengers-assemble-success');
  }

  render() {
    let {
      avgName,
      dataLoadingStatus,
      userExist,
      avgExist,
    } = this.props
    // console.log('registerAvengerSuccess', this.props)
    return (
      <div className="Register-page">
        <Helmet
          title="Kurangi Sampah Makanan Dengan Dishkon"
        />
        {
          userExist === false ?
          <Redirect to="/error" />
          :
          userExist === true && avgExist === false ?
          <Redirect to={ `/avengers-assemble/${this.props.match.params.id}` } />
          :
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
                      {
                        dataLoadingStatus ?
                        <div className="Container-nowrap-center-cross">
                          <div className="Success-header">Dear <LoadingSvg height="3em" width="3em"/>,</div>
                        </div>
                        :
                        <div className="Success-header">Dear { avgName },</div>
                      }

                      <div className="Success-paragraphs">
                        Terima kasih sudah mendaftarkan nomor Whatsapp kamu untuk bergabung dengan grup Whatsapp kami.
                        Grup Whatsapp kami akan berfungsi sebagai media komunikasi untuk mempromosikan makanan-makanan tidak terjual yang sudah berhasil kami kumpulkan yang bisa kamu beli dengan harga diskon. 
                      </div>

                      <div className="Success-paragraphs">
                        Misi kami adalah untuk mengurangi jumlah sampah makanan di Indonesia dengan cara mendistribusikan makanan yang tidak terjual langsung ke konsumen dengan harga diskon sebelum kadaluwarsa.
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
        }
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