import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import loginValidate from '../helpers/loginValidate.js';

function LoginField({ history }) {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const [form] = useAutoAnimate();
  const [emptyFields, setEmptyFields] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loginValidate(userNameRef, passwordRef)) {
      localStorage.setItem('username', userNameRef.current.value);
      history.push('/search');
    } else {
      setEmptyFields(true);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(LoginField);
