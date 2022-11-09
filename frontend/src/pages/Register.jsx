/* import PropTypes from 'prop-types'; */
import React from 'react';
import { connect } from 'react-redux';
import RegisterField from '../components/RegisterField';

function Register() {
  return (
    <section>
      <RegisterField />
    </section>
  );
}

Register.propTypes = {};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Register);
