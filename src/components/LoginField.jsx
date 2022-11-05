import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import getUsername from '../redux/actions/getUsername.js';
import loginValidate from '../helpers/loginValidate.js';

function LoginField({ history, dispatch }) {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const [emptyFields, setEmptyFields] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loginValidate(userNameRef, passwordRef)) {
      dispatch(getUsername(userNameRef));
      history.push('/search');
    } else {
      setEmptyFields(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control ref={userNameRef} type="text" placeholder="Username" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
      </FloatingLabel>
      { emptyFields ? <h6> ! Preencha todos os campos</h6> : null }
      <Button type="Submit" variant="primary">Entrar</Button>
    </form>
  );
}

LoginField.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(LoginField);
