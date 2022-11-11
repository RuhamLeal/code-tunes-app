import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LoginField from '../components/LoginField';
import { cleanUserLocalStorage } from '../helpers/localStorage';

function Login({ history }) {
  useEffect(() => {
    cleanUserLocalStorage();
  }, []);
  return (
    <section>
      <LoginField history={history} />
    </section>
  );
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Login;
