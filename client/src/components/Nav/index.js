import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/map'>Map</Link>
    </nav>
  );
};

export default Nav;