import React from 'react';
import SignIn from './signin/SignIn'
import Registration from './registration/Registration'
import WelcomeBack from './welcome_back/WelcomeBack'

import {
  Route,
  Switch,
} from 'react-router-dom';

import './Login.scss'


class LoginPage extends React.Component {
  render() { 
    return ( 
        <div className="page-flex-container login-container">
          <Switch>
            <Route path="/login/signin"><SignIn /></Route>
            <Route path="/login/registration"><Registration /></Route>
            <Route exact path="/login"><WelcomeBack /></Route>
          </Switch>
        </div>
      
    );
  }
}

export default LoginPage