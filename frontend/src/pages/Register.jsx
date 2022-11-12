import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import RegisterField from '../components/RegisterField';
import '../styles/Register.css';

function Register({ history }) {
  return (
    <section>
      <RegisterField history={history} />
    </section>
  );
}

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Register);
