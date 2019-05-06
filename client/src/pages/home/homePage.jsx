import React, { Component } from 'react'
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../assets/css/general.css';
import NavigationBar from '../../components/navbar/navbar';
import Header from '../../components/header/header';
import ProblemPage from '../../components/problem/problem';
import WastePage from '../../components/forBusiness/donutShot';
import ForBusinessPage from '../../components/forBusiness/forBusiness';
import Footer from '../../components/footer/footer';
import { getUsers } from '../../store/firestore/user/user.actions';

class homePage extends Component {
  componentWillMount() {
    // // Only live when getting users data
    // this.props.getUsers()
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
        <NavigationBar />
        <Header />
        <ProblemPage />
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
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (homePage);