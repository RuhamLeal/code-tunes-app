import React from 'react';
import PropTypes from 'prop-types';
import EditProfileField from '../components/EditProfileField.jsx';
import Header from '../components/Header.jsx';

function EditProfile({ history }) {
  return (
    <main>
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
