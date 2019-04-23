import React, { Component } from 'react'

import '../../assets/css/general.css';
import NavigationBar from '../../components/navbar/navbar';
import Header from '../../components/header/header';
import ProblemPage from '../../components/problem/problem';

export default class homePage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Header />
        <ProblemPage />
      </div>
    )
  }
}
