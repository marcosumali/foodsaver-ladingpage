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
import { Redirect } from 'react-router-dom';

import './register.css';
import '../../assets/css/swal.css';
import Logo from '../../components/logo/logo';
import {
  getUser,
} from '../../store/firestore/user/user.actions';
import {
  handleUserInputChanges,
  avengerRegisterInputValidation,
  getAvenger
} from '../../store/firestore/avenger/avenger.actions';
import LoadingSvg from '../../components/svg/loading';

class registerAvenger extends Component {
  constructor() {
    super()

    this.state = { 
      date: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      month: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'] ,
      yearMax: 1940,
      yearMin: 2005,
      city: ['Ambon','Balikpapan','Banda Aceh','Bandar Lampung','Bandung','Banjar','Banjarbaru','Banjarmasin','Batam','Batu','Bau-Bau','Bekasi','Bengkulu','Bima','Binjai','Bitung','Blitar','Bogor','Bontang','Bukittinggi','Cilegon','Cimahi','Cirebon','Denpasar','Depok','Dumai','Gorontalo','Jakarta Barat','Jakarta Pusat','Jakarta Selatan','Jakarta Timur','Jakarta Utara','Jambi','Jayapura','Kediri','Kendari','Kotamobagu','Kupang','Langsa','Lhokseumawe','Lubuklinggau','Madiun','Magelang','Makassar','Malang','Manado','Mataram','Medan','Metro','Meulaboh','Mojokerto','Padang','Padang Sidempuan','Padangpanjang','Pagaralam','Palangkaraya','Palembang','Palopo','Palu','Pangkalpinang','Parepare','Pariaman','Pasuruan','Payakumbuh','Pekalongan','Pekanbaru','Pematangsiantar','Pontianak','Prabumulih','Probolinggo','Purwokerto','Sabang','Salatiga','Samarinda','Sawahlunto','Semarang','Serang','Sibolga','Singkawang','Solok','Sorong','Subulussalam','Sukabumi','Sungai Penuh','Surabaya','Surakarta','Tangerang','Tangerang Selatan','Tanjungbalai','Tanjungpinang','Tarakan','Tasikmalaya','Tebingtinggi','Tegal','Ternate','Tidore Kepulauan','Tomohon','Tual','Yogyakarta']
    }
  }

  componentWillMount() {
    let { id } = this.props.match.params
    this.props.getUser(id)
    this.props.getAvenger(id, 'register')
  }

  componentDidMount() {
    ReactGA.pageview('/avengers-assemble');
  }

  render() {
    let {
      handleUserInputChanges,
      avengerRegisterInputValidation,
      avgName,
      avgEmail,
      avgGender,
      avgDOBDate,
      avgDOBMonth,
      avgDOBYear,
      avgCity,
      avgWhatsapp,
      avgNameError,
      avgEmailError,
      avgGenderError,
      avgDOBError,
      avgCityError,
      avgWhatsappError,
      loadingStatus,
      dataLoadingStatus,
      userExist,
      registeredStatus,
    } = this.props
    // console.log('registerAvenger', this.props)

    let year = []
    for (let i = this.state.yearMax; i <= this.state.yearMin; i++) {
      year.push(i)
    }

    return (
      <div className="Register-page">
        <Helmet
          title="Food Avengers Assemble | Dishkon"
        />
        {
          userExist === false ?
          <Redirect to="/error" />
          :
          userExist === true && registeredStatus === true ?
          <Redirect to={ `/avengers-assemble-success/${this.props.match.params.id}` } />
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
                    <div className="Registration-header">Food Avengers Initiative - RSVP</div>
                  </Col>
                  <Col md={12}>
                    <Form>
                      {
                        dataLoadingStatus ?
                        <div className="Container-nowrap-center-cross">
                          <Form.Group>
                            <Form.Label>Nama</Form.Label>
                            <Form.Control 
                              id="name" 
                              type="text" 
                              placeholder="Nama Anda" 
                              onChange={ (e) => handleUserInputChanges(e) }
                              value={ avgName } 
                            />
                            {
                              avgNameError === false ?
                              <div></div>
                              :
                              <Form.Text className="text-muted">
                                { avgNameError }
                              </Form.Text>
                            }
                          </Form.Group>
                          <LoadingSvg height="3em" width="3em"/>
                        </div>
                        :
                        <Form.Group>
                          <Form.Label>Nama</Form.Label>
                          <Form.Control 
                            id="name" 
                            type="text" 
                            placeholder="Nama Anda" 
                            onChange={ (e) => handleUserInputChanges(e) }
                            value={ avgName } 
                          />
                          {
                            avgNameError === false ?
                            <div></div>
                            :
                            <Form.Text className="text-muted">
                              { avgNameError }
                            </Form.Text>
                          }
                        </Form.Group>
                      }

                      {
                        dataLoadingStatus ?
                        <div className="Container-nowrap-center-cross">
                          <Form.Group>
                            <Form.Label>Alamat Email</Form.Label>
                            <Form.Control 
                              id="email" 
                              type="email" 
                              placeholder="Email Anda" 
                              onChange={ (e) => handleUserInputChanges(e) }
                              value={ avgEmail }
                            />
                            {
                              avgEmailError === false ?
                              <div></div>
                              :
                              <Form.Text className="text-muted">
                                { avgEmailError }
                              </Form.Text>
                            }
                          </Form.Group>
                          <LoadingSvg height="3em" width="3em"/>
                        </div>
                        :
                        <Form.Group>
                          <Form.Label>Alamat Email</Form.Label>
                          <Form.Control 
                            id="email" 
                            type="email" 
                            placeholder="Email Anda" 
                            onChange={ (e) => handleUserInputChanges(e) }
                            value={ avgEmail }
                          />
                          {
                            avgEmailError === false ?
                            <div></div>
                            :
                            <Form.Text className="text-muted">
                              { avgEmailError }
                            </Form.Text>
                          }
                        </Form.Group>
                      }

                      <Form.Group>
                        <Form.Label>Jenis Kelamin</Form.Label>
                        <Form.Control
                          id="gender" 
                          as="select"
                          onChange={ (e) => handleUserInputChanges(e) }
                          value={ avgGender }
                        >
                          <option>Jenis Kelamin</option>
                          <option>Pria</option>
                          <option>Wanita</option>
                        </Form.Control>
                        {
                          avgGenderError === false ?
                          <div></div>
                          :
                          <Form.Text className="text-muted">
                            { avgGenderError }
                          </Form.Text>
                        }
                      </Form.Group>

                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Tanggal Lahir</Form.Label>
                          <Form.Control
                            id="date"
                            as="select" 
                            onChange={ (e) => handleUserInputChanges(e) }
                            value={ avgDOBDate }
                          >
                            <option>Tanggal</option>
                            {
                              this.state.date.map((date, index) => {
                                return (
                                  <option key={ 'date' +  index }>{ date }</option>
                                )
                              })
                            }
                          </Form.Control>
                          {
                            avgDOBError === false ?
                            <div></div>
                            :
                            <Form.Text className="text-muted">
                              { avgDOBError }
                            </Form.Text>
                          }
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>&nbsp;</Form.Label>
                          <Form.Control 
                            id="month"
                            as="select" 
                            onChange={ (e) => handleUserInputChanges(e) }
                            value={ avgDOBMonth }
                          >
                            <option>Bulan</option>
                            {
                              this.state.month.map((month, index) => {
                                return (
                                  <option key={ 'month' +  index }>{ month }</option>
                                )
                              })
                            }
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>&nbsp;</Form.Label>
                          <Form.Control 
                            id="year"
                            as="select" 
                            onChange={ (e) => handleUserInputChanges(e) }
                            value={ avgDOBYear }
                          >
                            <option>Tahun</option>
                            {
                              year.map((year, index) => {
                                return (
                                  <option key={ 'year' +  index }>{ year }</option>
                                )
                              })
                            }
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>

                      <Form.Group>
                        <Form.Label>Kota Tempat Tinggal</Form.Label>
                        <Form.Control 
                          id="city"
                          as="select" 
                          onChange={ (e) => handleUserInputChanges(e) }
                          value={ avgCity }
                        >
                          <option>Nama Kota Tempat Tinggal Anda</option>
                          {
                              this.state.city.map((city, index) => {
                                return (
                                  <option key={ 'city' +  index }>{ city }</option>
                                )
                              })
                            }
                        </Form.Control>
                        {
                          avgCityError === false ?
                          <div></div>
                          :
                          <Form.Text className="text-muted">
                            { avgCityError }
                          </Form.Text>
                        }
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Nomor Whatsapp</Form.Label>
                        <Form.Control 
                          id="whatsapp" 
                          type="text" 
                          placeholder="Nomor Whatsapp Anda" 
                          onChange={ (e) => handleUserInputChanges(e) }
                          value={ avgWhatsapp }
                        />
                        {
                          avgWhatsappError === false ?
                          <div></div>
                          :
                          <Form.Text className="text-muted">
                            { avgWhatsappError }
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
                        <Button variant="primary" onClick={ () => avengerRegisterInputValidation(this.props, window, this.props.match.params.id)}>
                          Submit
                        </Button>
                      }
                    </Form>
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
    avgNameError: state.avg.registerNameError,
    avgEmail: state.avg.email,
    avgEmailError: state.avg.registerEmailError,
    avgGender: state.avg.gender,
    avgGenderError: state.avg.registerGenderError,
    avgDOBDate: state.avg.dobDate,
    avgDOBMonth: state.avg.dobMonth,
    avgDOBYear: state.avg.dobYear,
    avgDOBError: state.avg.registerDOBError,
    avgCity: state.avg.city,
    avgCityError: state.avg.registerCityError,
    avgWhatsapp: state.avg.whatsappNo,
    avgWhatsappError: state.avg.registerWANoError,
    loadingStatus: state.avg.registerLoadingStatus,
    dataLoadingStatus: state.avg.dataLoadingStatus,
    userExist: state.user.existanceStatus,
    registeredStatus: state.avg.registeredStatus,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  handleUserInputChanges,
  avengerRegisterInputValidation,
  getUser,
  getAvenger,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (registerAvenger);