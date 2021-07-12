import React from "react";
import { Link } from 'react-router-dom';
import './style.css'

const Nav = () => {
  return (
    <nav className='navDiv'>
            <Link to='/' className="linkNav">Home</Link>
            <Link to='/login' className="linkNav">Login</Link>
            <Link to='/profile' className="linkNav">Profile</Link>
            <Link to='/map' className="linkNav">Map</Link>
    </nav>
  );
};

export default Nav;