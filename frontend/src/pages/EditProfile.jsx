import React from 'react';
import PropTypes from 'prop-types';
import EditProfileField from '../components/EditProfileField.jsx';
import Header from '../components/Header.jsx';
import '../styles/EditProfile.css';

function EditProfile({ history }) {
  return (
    <main className="edit-profile-page">
      <Header />
      <EditProfileField history={history} />
    </main>
  );
}

EditProfile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default EditProfile;
