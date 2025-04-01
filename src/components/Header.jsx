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
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><Link to="/">Home</Link></li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><Link to="/sell">Sell</Link></li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><Link to="/new">New</Link></li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'><Link to="/coming">PreOwned</Link></li>
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
