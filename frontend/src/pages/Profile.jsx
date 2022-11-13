import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header.jsx';
import ProfileData from '../components/ProfileData.jsx';
import '../styles/Profile.css';

function Profile({ history }) {
  return (
    <main className="profile-page">
      <Header />
      <ProfileData history={history} />
    </main>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
