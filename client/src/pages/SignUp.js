import React, {Component} from 'react'
import './style.css';
import Signupform from '../components/Signup';

export default class SignUp extends Component {

  constructor(props){
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data){
    this.props.handleLogin(data)
    this.props.history.push("/profile");
  }

  render(){
  return (
    <div className='form-container'>
      <Signupform handleSuccessfulAuth={this.handleSuccessfulAuth}/>
    </div>
    )
  }
}