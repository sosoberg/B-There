import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import UserPhotos from './pages/UserPhotos'

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
            user: {},
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    checkLoginStatus() {
        axios
            .get("http://localhost:3001/api/users/login", { withCredentials: true })
            .then(response => {
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

    checkEventWinner() {
        const currentTime = new Date().getTime();
        const execTime = new Date().setHours(23, 0, 0, 0);
        let timeLeft;
        if (currentTime < execTime) {
            timeLeft = execTime - currentTime;
        } else {
            timeLeft = execTime + 86400000 - currentTime
        }
        setTimeout(function () {
            setInterval(function () {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, 0);
                var mm = String(today.getMonth() + 1).padStart(2, '0');
                var yyyy = String(today.getFullYear());
                var nowtoday = mm + dd + yyyy;
                axios.get(`http://localhost:3001/api/events/check/${nowtoday}`)
                    .then(response => {
                        let data = response.data
                        data.sort(function (a, b) {
                            return parseFloat(b.likes) - parseFloat(a.likes);
                        });
                        axios.get(`http://localhost:3001/api/users/points/${data[0].userId}`)
                        .then(response => {
                            let thisPoints = parseInt(response.data.points,10)
                            thisPoints = thisPoints + 100;
                            axios.put(`http://localhost:3001/api/users/points/${data[0].userId}`,{
                                points: thisPoints
                            },{withCredentials:true})
                                .then(response =>{
                                    console.log('success to update points', response)
                                }).catch(error => {
                                    console.log('error to update points', error)
                                })
                        }).catch(error => {
                            console.log('error to get winner data:', error)
                        })
                    }).catch(error => {
                        console.log('error for checking today events:', error)
                    })
            }, 86400000);
        }, timeLeft);
    }

    componentDidMount() {
        this.checkLoginStatus();
        this.checkEventWinner();
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
                    <Header handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} />
                    {/* <Container> */}
                    {/* <Nav /> */}
                    <Switch>
                        <Route exact path='/' render={props => (<Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />)} />
                        <Route exact path='/profile' render={props => (<Profile {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} />)} />
                        <Route exact path='/userphotos' render={props => (<UserPhotos {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} />)} />
                        <Route exact path='/maps' component={Map} />
                        <Route exact path='/login' render={props => (<Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />)} />
                        <Route exact path='/signup' render={props => (<SignUp {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />)} />
                    </Switch>
                    {/* </Container> */}
                </div>
            </Router>
        );
    }
}
