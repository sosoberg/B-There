import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from "axios";

export default class Header extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        axios
          .get("http://localhost:3001/api/users/logout", { withCredentials: true })
          .then(response => {
            this.props.handleLogout();
          })
          .catch(error => {
            console.log("logout error", error);
          });
      };

    render() {
        if (this.props.loggedInStatus === "NOT_LOGGED_IN") {
            return (
                <Navbar bg='primary' variant='light' expand="lg">
                    <Navbar.Brand href="#home">B There</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to='/profile'>
                                <Nav.Link>profile</Nav.Link>
                            </LinkContainer> */}
                            <LinkContainer to='/maps'>
                                <Nav.Link>Maps</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
        } else if (this.props.loggedInStatus === "LOGGED_IN") {
            return (
                <Navbar bg='primary' variant='light' expand="lg">
                    <Navbar.Brand href="#home">B There</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to='/login'>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer> */}
                            <LinkContainer to='/maps'>
                                <Nav.Link>Maps</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/profile'>
                                <Nav.Link>profile</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/'>
                                <Nav.Link onClick={() => this.handleLogoutClick()}> Logout</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
        }
    }
}