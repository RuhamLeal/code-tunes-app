import { Link } from 'react-router-dom';
import React from 'react';
import codetuneslogo from '../images/codetuneslogo.png';
import ProfileDropdown from './ProfileDropdown';

function Header() {
  return (
    <header>
      <Link to="/search">
        <img src={codetuneslogo} alt="code-tunes-logo" width={85} />
      </Link>
      <Link to="/search">
        Home
      </Link>
      <Link to="/favorites">
        Favorites
      </Link>
      <ProfileDropdown />
    </header>
  );
}

export default Header;
