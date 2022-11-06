import React from 'react';
import PropTypes from 'prop-types';
import LoginField from '../components/LoginField';

function Login({ history }) {
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
