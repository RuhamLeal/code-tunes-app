import React from 'react';
import EditProfileField from '../components/EditProfileField.jsx';
import Header from '../components/Header.jsx';
import '../styles/EditProfile.css';

function EditProfile() {
  return (
    <main className="edit-profile-page">
      <Header />
      <EditProfileField />
    </main>
  );
}

export default EditProfile;
