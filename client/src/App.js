import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homePage.jsx';
import ErrorPage from './pages/errorPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path="/" 
            render={ (props) => (<HomePage {...props} />) } 
          />
          <Route path="*" component={ ErrorPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
