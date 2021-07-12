import React, { Component } from 'react'
import './style.css';
import Loginform from '../components/Signin';

export default class Login extends Component {
  constructor(props){
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data){
    this.props.handleLogin(data)
    this.props.history.push("/profile");
  }

  render() {
    return (
      <div className='form-container'>
        <Loginform handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    )
  }
}
