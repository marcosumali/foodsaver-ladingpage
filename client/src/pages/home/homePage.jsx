import React, { Component } from 'react'
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../assets/css/general.css';
import Header from '../../components/header/header';
import ProblemPage from '../../components/problem/problem';
import WastePage from '../../components/forBusiness/donutShot';
import ForBusinessPage from '../../components/forBusiness/forBusiness';
import DownloadPage from '../../components/download/Download';
import Footer from '../../components/footer/footer';
import { getUsers } from '../../store/firestore/user/user.actions';
import { getAvengers } from '../../store/firestore/avenger/avenger.actions';

class homePage extends Component {
  componentWillMount() {
    // // Only live when getting users data
    // this.props.getUsers()
    // this.props.getAvengers()
  }

  componentDidMount() {
    ReactGA.pageview('/');
  }

  render() {
    return (
      <div>
        <Helmet
          title="Kurangi Sampah Makanan Dengan Dishkon"
          meta={[
            {
              name: 'description',
              content: 'Aplikasi yang bantu kamu selamatkan makanan yang tidak terjual agar tidak menjadi sampah makanan dengan harga diskon. Download Dishkon sekarang.',
            },
          ]}
        />
        <Header />
        <ProblemPage />
        <DownloadPage />
        <WastePage />
        <ForBusinessPage />
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsers,
  getAvengers,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (homePage);