import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IconContext } from 'react-icons';
import { BsPersonCircle } from 'react-icons/bs';

function ProfileDropdown() {
  const [userName] = useState(localStorage.getItem('username'));

  return (
    <section>
      <IconContext.Provider value={{ className: 'profile-header-icon' }}>
        <BsPersonCircle />
      </IconContext.Provider>
      <DropdownButton
        className="header-dropdown"
        variant="success"
        id="dropdown-basic-button"
        title={userName}
      >
        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
        <Dropdown.Item href="/">Log out</Dropdown.Item>
      </DropdownButton>
    </section>
  );
}

export default ProfileDropdown;
