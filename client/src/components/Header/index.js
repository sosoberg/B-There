import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from "axios";

import './style.css'

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
                <div className='navDiv'>
                    <Navbar expand="lg">
                        <Navbar.Brand className='menu'>Menu</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="ml-auto">
                                <LinkContainer to='/'>
                                    <Nav.Link className='link'>Home</Nav.Link>
                                </LinkContainer>
                                {/* <LinkContainer to='/profile'>
                                    <Nav.Link>profile</Nav.Link>
                                </LinkContainer> */}
                                <LinkContainer to='/maps'>
                                    <Nav.Link className='link'>Maps</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/login'>
                                    <Nav.Link className='link'>Login</Nav.Link>
                                </LinkContainer>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        } else if (this.props.loggedInStatus === "LOGGED_IN") {
            return (
                <div className='navDiv'>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="ml-auto">
                                <LinkContainer to='/'>
                                    <Nav.Link className='link'>Home</Nav.Link>
                                </LinkContainer>
                                {/* <LinkContainer to='/login'>
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer> */}
                                <LinkContainer to='/maps'>
                                    <Nav.Link className='link'>Maps</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/profile'>
                                    <Nav.Link className='link'>Profile</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/userphotos'>
                                    <Nav.Link className='link'>My Photos</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/'>
                                    <Nav.Link  className='link' onClick={() => this.handleLogoutClick()}> Logout</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        }
    }
}