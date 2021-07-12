import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/api/users/login",
        {
            email: email,
            password: password
        },
        { withCredentials: true }
      )
      .then(response => {
        //   console.log(response)
        if (response.data.status === "success") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label htmlFor="email">Email</label>
          <input className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
          <input className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <p>Not yet registered? <Link to='/signup'>Sign up here</Link></p>
        </form>
      </div>
    );
  }
}