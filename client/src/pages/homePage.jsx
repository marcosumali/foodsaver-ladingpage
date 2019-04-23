import React, { Component } from 'react'

import NavigationBar from '../components/navbar/navbar';
import '../assets/css/general.css';

export default class homePage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        Hello
      </div>
    )
  }
}
