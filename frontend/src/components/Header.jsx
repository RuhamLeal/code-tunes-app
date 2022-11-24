import { Link } from 'react-router-dom';
import React from 'react';
import codetuneslogo from '../images/codetuneslogo.png';
import ProfileDropdown from './ProfileDropdown';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <Link to="/search">
        <img className="header-logo" src={codetuneslogo} alt="code-tunes-logo" height={120} />
      </Link>
      <nav className="header-nav-container">
        <Link to="/search" className="header-link">
          Home
        </Link>
        <h1 className="header-barr">|</h1>
        <Link to="/favorites" className="header-link">
          Favorites
        </Link>
      </nav>
      <ProfileDropdown />
    </header>
  );
}

export default Header;
