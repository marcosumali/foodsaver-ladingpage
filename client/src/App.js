import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/homePage';
import ErrorPage from './pages/error/notFound';
import RegisterUserPage from './pages/register/registerUserPage';
import RegisterCustomerPage from './pages/register/registerCustomerPage';
import RegisterUserSuccessPage from './pages/register/registerUserSuccessPage';
import RegisterCustSuccessPage from './pages/register/registerCustomerSuccessPage';
import RegisterAvengerPage from './pages/register/registerAvengerPage';
import RegisterAvengerSuccessPage from './pages/register/registerAvengerSuccessPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path="/" 
            render={ (props) => (<HomePage {...props} />) } 
          />
          <Route
            exact path="/register-user" 
            render={ (props) => (<RegisterUserPage {...props} />) } 
          />
          <Route
            exact path="/register-customer" 
            render={ (props) => (<RegisterCustomerPage {...props} />) } 
          />
          <Route
            exact path="/register-user-success" 
            render={ (props) => (<RegisterUserSuccessPage {...props} />) } 
          />
          <Route
            exact path="/register-customer-success" 
            render={ (props) => (<RegisterCustSuccessPage {...props} />) } 
          />
          <Route
            exact path="/avengers-assemble/:id" 
            render={ (props) => (<RegisterAvengerPage {...props} />) } 
          />
          <Route
            exact path="/avengers-assemble-success/:id" 
            render={ (props) => (<RegisterAvengerSuccessPage {...props} />) } 
          />
          <Route path="/error" component={ ErrorPage } />
          <Route path="*" component={ ErrorPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
