import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:"",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
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
    const { username, email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/api/users",
        {
            username: username,
            email: email,
            password: password,
            points: "0",
        },
        { withCredentials: true }
      )
      .then(response => {
          console.log(response)
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label htmlFor="username">Username</label>
           <input className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
        </div>

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

         <div className="form-group">
         <label htmlFor="passwordConfirm">Confirm Password</label>
          <input className="form-control"
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
        </div>

          <button type="submit" className="btn btn-primary w-100" >Register</button>
          <p>Already have an account? <Link to='/login'>Login</Link></p>
        </form>
      </div>
    );
  }
}