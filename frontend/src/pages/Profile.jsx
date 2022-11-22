import React from 'react';
import Header from '../components/Header.jsx';
import ProfileData from '../components/ProfileData.jsx';
import '../styles/Profile.css';

function Profile() {
  return (
    <main className="profile-page">
      <Header />
      <ProfileData />
    </main>
  );
}

export default Profile;
