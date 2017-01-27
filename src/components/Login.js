import React, {Component} from 'react';
import {login} from '../auth';
import './Login.css';

class Login extends Component {
  componentWillMount() {
    this.login = login();
  }

  componentWillUnmount() {
    this.login.hide();
    this.login = null;
  }

  render() {
    return (
      <div className="Login">
      </div>
    );
  }
}

export default Login;
