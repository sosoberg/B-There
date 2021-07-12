import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
// pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';

// import API from "./utils/API";
//components
import Header from "./components/Header";
import Title from "./components/Title";
// import { response } from 'express';
import axios from "axios";

export default class App extends Component {
    constructor() {
        super();
    
        this.state = {
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        };
    
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
      }
    
      checkLoginStatus() {
        axios
          .get("http://localhost:3001/api/users/login", { withCredentials: true })
          .then(response => {
              console.log(response)
            if (
              response.data.status === "logined" &&
              this.state.loggedInStatus === "NOT_LOGGED_IN"
            ) {
              this.setState({
                loggedInStatus: "LOGGED_IN",
                user: response.data.user
              });
            } else if (
              !response.data.logged_in === "logined" &
              (this.state.loggedInStatus === "LOGGED_IN")
            ) {
              this.setState({
                loggedInStatus: "NOT_LOGGED_IN",
                user: {}
              });
            }
          })
          .catch(error => {
            console.log("check login error", error);
          });
      }
    
      componentDidMount() {
        this.checkLoginStatus();
      }
    
      handleLogout() {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        });
      }
    
      handleLogin(data) {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: data.user
        });
      }

    render() {
        return (
            <Router>
                <div>
                    <Title />
                </div>
                <div className='app'>
                    <Header handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus}/>
                    <Container>
                        {/* <Nav /> */}
                        <Switch>
                            <Route exact path='/' render = {props => (<Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>)}/>
                            <Route exact path='/profile' render = {props => (<Profile {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus}/>)} />
                            <Route exact path='/map' component={Map} />
                            <Route exact path='/login' render = {props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>)}/>
                            <Route exact path='/signup' render = {props => (<SignUp {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>)}/>
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
}
