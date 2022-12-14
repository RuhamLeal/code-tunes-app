import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginField from '../components/LoginField';
import { cleanUserLocalStorage } from '../helpers/localStorage';
import '../styles/Login.css';
import cleanRegisterMessage from '../redux/actions/cleanRegisterMessage';

function Login({ dispatch }) {
  useEffect(() => {
    cleanUserLocalStorage();
    dispatch(cleanRegisterMessage());
  }, []);

  return (
    <main className="login-page">
      <section className="login-main-container">
        <LoginField />
      </section>
    </main>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
