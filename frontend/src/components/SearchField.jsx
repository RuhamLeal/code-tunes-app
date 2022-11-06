import React, { useRef } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import getAlbums from '../redux/actions/getAlbums';

function SearchField({ dispatch }) {
  const searchRef = useRef(null);

  const handleSearch = () => {
    dispatch(getAlbums(searchRef.current.value));
  };

  return (
    <section>
      <FloatingLabel
        controlId="floatingInput"
        label="Search"
        className="mb-3"
      >
        <Form.Control ref={searchRef} type="text" placeholder="Search" />
      </FloatingLabel>
      <Button onClick={handleSearch} variant="Secondary" type="button">
        <BsSearch />
      </Button>
    </section>
  );
}

SearchField.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SearchField);
