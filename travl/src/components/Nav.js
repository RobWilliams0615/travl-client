import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navDiv">
        <Link to="/Facilities">Facilities</Link>
        <Link to="/Locations">Locations</Link>
      </div>
    </nav>
  );
};

export default Nav;
