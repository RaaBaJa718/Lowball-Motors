import React from 'react';

function Header() {
  return (
    <header>
      <div className="menu-icon">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="header-title">
        <h1>LowBall Motors</h1>
      </div>
      <div className="header-signin">
        <div className="signin-icon" title="Sign In"></div>
      </div>
    </header>
  );
}

export default Header;