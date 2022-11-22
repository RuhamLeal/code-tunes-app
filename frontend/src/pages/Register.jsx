import React from 'react';
import { connect } from 'react-redux';
import RegisterField from '../components/RegisterField';
import '../styles/Register.css';

function Register() {
  return (
    <section className="register-page">
      <RegisterField />
    </section>
  );
}

export default connect()(Register);
