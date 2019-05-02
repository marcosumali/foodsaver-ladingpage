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
  handleCustomerInputChanges,
  customerRegisterInputValidation
} from '../../store/firestore/customer/customer.actions';
import LoadingSvg from '../../components/svg/loading';

class registerCustomerPage extends Component {
  componentDidMount() {
    ReactGA.pageview('/register-customer');
  }

  render() {
    let {
      handleCustomerInputChanges,
      customerRegisterInputValidation,
      customerName,
      customerEmail,
      businessName,
      customerNameError,
      businessNameError,
      customerEmailError,
      loadingStatus,
    } = this.props
    // console.log('registerCustomerPage', this.props)
    return (
      <div className="Register-page">
        <Helmet>
          <title>Daftarkan Bisnis Anda | Dishkon</title>
          <meta
            name="description"
            content="Segera daftar akun Dishkon untuk mengurangi kelebihan makanan bisnis Anda dengan harga diskon. Kami yang menangani logistik dan pembayaran dari konsumen."
          />
        </Helmet>
        <Container className="Height-100cent">
          <Row>
            <Col md={12} className="Regisration-logo-box Container-nowrap-center">
              <Logo />
            </Col>
          </Row>
          <Row className="Container-nowrap-center">
            <Col md={12} className="Registration-box">
              <Row>
                <Col md={12}>
                  <div className="Registration-header">Silahkan Isi Formulir Untuk Daftarkan Bisnis Anda</div>
                </Col>
                <Col md={12}>
                  <Form>
                    <Form.Group>
                      <Form.Label>Nama</Form.Label>
                      <Form.Control 
                        id="name" 
                        type="text" 
                        placeholder="Nama Anda" 
                        onChange={ (e) => handleCustomerInputChanges(e) }
                        value={ customerName } 
                      />
                      {
                        customerNameError === false ?
                        <div></div>
                        :
                        <Form.Text className="text-muted">
                          { customerNameError }
                        </Form.Text>
                      }
                    </Form.Group>
                    
                    <Form.Group>
                      <Form.Label>Nama Bisnis</Form.Label>
                      <Form.Control 
                        id="businessName" 
                        type="text" 
                        placeholder="Nama Bisnis Anda" 
                        onChange={ (e) => handleCustomerInputChanges(e) }
                        value={ businessName } 
                      />
                      {
                        businessNameError === false ?
                        <div></div>
                        :
                        <Form.Text className="text-muted">
                          { businessNameError }
                        </Form.Text>
                      }
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Alamat Email</Form.Label>
                      <Form.Control 
                        id="email" 
                        type="email" 
                        placeholder="Email Anda" 
                        onChange={ (e) => handleCustomerInputChanges(e) }
                        value={ customerEmail }
                      />
                      {
                        customerEmailError === false ?
                        <div></div>
                        :
                        <Form.Text className="text-muted">
                          { customerEmailError }
                        </Form.Text>
                      }
                    </Form.Group>
                    
                    {
                      loadingStatus ?
                      <div className="Container-wrap-center-cross">
                        <Button variant="secondary">
                          Submit
                        </Button>
                        <LoadingSvg height="3em" width="3em"/>
                      </div>
                      :
                      <Button variant="primary" onClick={ () => customerRegisterInputValidation(this.props, window)}>
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
    customerName: state.cust.customerName,
    customerNameError: state.cust.registerCustomerNameError,
    businessName: state.cust.businessName,
    businessNameError: state.cust.registerBusinessNameError,
    customerEmail: state.cust.customerEmail,
    customerEmailError: state.cust.registerCustomerEmailError,
    loadingStatus: state.cust.registerLoadingStatus,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  handleCustomerInputChanges,
  customerRegisterInputValidation
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (registerCustomerPage);