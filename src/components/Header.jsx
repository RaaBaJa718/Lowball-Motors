import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/Header.css';

function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="header-title">
          <h1>LowBall Motors</h1>
        </div>
      </div>
      <div className="header-bottom">
        <nav className="header-menu">
          <ul className="menu-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-signin">
          <Link to="/login" className="signin-link" title="Sign In">Sign In</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;