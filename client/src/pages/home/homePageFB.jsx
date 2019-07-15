import React, { Component } from 'react'
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../assets/css/general.css';
import HeaderFB from '../../components/header/headerFB';
import ProblemPage from '../../components/problem/problem';
import WastePage from '../../components/forBusiness/donutShot';
import ForBusinessPage from '../../components/forBusiness/forBusiness';
import FooterFB from '../../components/footer/footerFB';

class homePageFB extends Component {
  componentDidMount() {
    ReactGA.pageview('/for-business');
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
        <HeaderFB />
        <ProblemPage />
        <WastePage />
        <ForBusinessPage />
        <FooterFB />
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


export default connect(mapStateToProps, mapDispatchToProps) (homePageFB);