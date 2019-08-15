import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home/homePage';
import ErrorPage from './pages/error/notFound';
import RegisterUserPage from './pages/register/registerUserPage';
import RegisterUserSuccessPage from './pages/register/registerUserSuccessPage';
import RegisterCustomerPage from './pages/register/registerCustomerPage';
import RegisterCustSuccessPage from './pages/register/registerCustomerSuccessPage';
import RegisterAvengerPage from './pages/register/registerAvengerPage';
import RegisterAvengerSuccessPage from './pages/register/registerAvengerSuccessPage';
import RegisterRangerPage from './pages/register/registerRangerPage';
import RegisterRangerSuccessPage from './pages/register/registerRangerSuccessPage';
import HomePageForBusiness from './pages/home/homePageFB';
import PrivacyPolicyPage from './pages/policy/Privacy';

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
            exact path="/register-user-success" 
            render={ (props) => (<RegisterUserSuccessPage {...props} />) } 
          />
          <Route
            exact path="/register-customer" 
            render={ (props) => (<RegisterCustomerPage {...props} />) } 
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
          <Route
            exact path="/rangers-assemble" 
            render={ (props) => (<RegisterRangerPage {...props} />) } 
          />
          <Route
            exact path="/rangers-assemble-success" 
            render={ (props) => (<RegisterRangerSuccessPage {...props} />) } 
          />
          <Route
            exact path="/for-business" 
            render={ (props) => (<HomePageForBusiness {...props} />) } 
          />
          <Route
            exact path="/privacy-policy" 
            render={ (props) => (<PrivacyPolicyPage {...props} />) } 
          />
          <Route path="/error" component={ ErrorPage } />
          <Route path="*" component={ ErrorPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
