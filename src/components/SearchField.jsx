import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';

function FormFloatingBasicExample() {
  return (
    <section>
      <FloatingLabel
        controlId="floatingInput"
        label="Search"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Search" />
      </FloatingLabel>
      <Button variant="Secondary" type="button">
        <BsSearch />
      </Button>
    </section>
  );
}

export default FormFloatingBasicExample;
