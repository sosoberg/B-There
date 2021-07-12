import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './style.css'

const Header = () => {
    return (
        <Navbar bg='primary' variant='light' expand="lg">
            <Navbar.Brand href="#home">B There</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/profile'>
                        <Nav.Link>profile</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/maps'>
                        <Nav.Link>Maps</Nav.Link>
                    </LinkContainer>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header