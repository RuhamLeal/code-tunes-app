import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LoginField from '../components/LoginField';
import { cleanUserLocalStorage } from '../helpers/localStorage';
import '../styles/Login.css';

function Login({ history }) {
  useEffect(() => {
    cleanUserLocalStorage();
  }, []);
  return (
    <main className="login-page">
      <section className="login-main-container">
        <LoginField history={history} />
      </section>
    </main>
  );
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Login;
