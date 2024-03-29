import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";

import './register.css';
import '../../assets/css/swal.css';
import Logo from '../../components/logo/logo';
import {
  handleUserInputChanges,
  userRegisterInputValidation
} from '../../store/firestore/user/user.actions';
import LoadingSvg from '../../components/svg/loading';

class registerUserPage extends Component {
  componentDidMount() {
    ReactGA.pageview('/register-user');
  }

  render() {
    let {
      handleUserInputChanges,
      userRegisterInputValidation,
      userName,
      userEmail,
      userNameError,
      userEmailError,
      loadingStatus,
    } = this.props
    // console.log('regusterUserPage', this.props)
    return (
      <div className="Register-page">
        <Helmet
          title="Daftarkan Email Kamu | Dishkon"
          meta={[
            {
              name: 'description',
              content: 'Segera daftar akun Dishkon untuk pengalaman terbaik selamatkan makanan dan menghemat biaya makan harian kapanpun, dimana pun.',
            },
          ]}
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
                  <div className="Registration-header">Silahkan Isi Formulir Untuk Download</div>
                </Col>
                <Col md={12}>
                  <Form>
                    <Form.Group>
                      <Form.Label>Nama</Form.Label>
                      <Form.Control 
                        id="name" 
                        type="text" 
                        placeholder="Nama Anda" 
                        onChange={ (e) => handleUserInputChanges(e) }
                        value={ userName } 
                      />
                      {
                        userNameError === false ?
                        <div></div>
                        :
                        <Form.Text className="text-muted">
                          { userNameError }
                        </Form.Text>
                      }
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Alamat Email</Form.Label>
                      <Form.Control 
                        id="email" 
                        type="email" 
                        placeholder="Email Anda" 
                        onChange={ (e) => handleUserInputChanges(e) }
                        value={ userEmail }
                      />
                      {
                        userEmailError === false ?
                        <div></div>
                        :
                        <Form.Text className="text-muted">
                          { userEmailError }
                        </Form.Text>
                      }
                    </Form.Group>
                    
                    {
                      loadingStatus ?
                      <div className="Container-wrap-center-end">
                        <Button variant="secondary">
                          Submit
                        </Button>
                        <LoadingSvg height="3em" width="3em"/>
                      </div>
                      :
                      <Button variant="primary" onClick={ () => userRegisterInputValidation(this.props, window)}>
                        Submit
                      </Button>
                    }
                  </Form>
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
    userName: state.user.userName,
    userNameError: state.user.registerUserNameError,
    userEmail: state.user.userEmail,
    userEmailError: state.user.registerUserEmailError,
    loadingStatus: state.user.registerLoadingStatus,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  handleUserInputChanges,
  userRegisterInputValidation
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (registerUserPage);