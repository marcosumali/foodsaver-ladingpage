import React, { Component } from 'react'
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";

import '../../assets/css/general.css';
import NavigationBar from '../../components/navbar/navbar';
import Header from '../../components/header/header';
import ProblemPage from '../../components/problem/problem';
import WastePage from '../../components/forBusiness/donutShot';
import ForBusinessPage from '../../components/forBusiness/forBusiness';
import Footer from '../../components/footer/footer';

export default class homePage extends Component {
  componentDidMount() {
    ReactGA.pageview('/');
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Kurangi Sampah Makanan Dengan Dishkon</title>
          <meta
            name="description"
            content="Aplikasi yang bantu kamu selamatkan makanan yang tidak terjual agar tidak menjadi sampah makanan dengan harga diskon. Download Dishkon sekarang."
          />
        </Helmet>
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
