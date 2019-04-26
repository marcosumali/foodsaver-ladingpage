import React, { Component } from 'react'
import ReactGA from 'react-ga';

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