import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FiEdit } from 'react-icons/fi';
import { connect } from 'react-redux';
import getUser from '../redux/actions/getUser';

function ProfileData({ history, dispatch, userData }) {
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <main>
      <section>
        { userData ? <img src={userData.img} alt="Profile-img" /> : null }
        <div>
          <h4>Username: </h4>
          { userData ? <h6>{userData.userName}</h6> : null }
        </div>
        <div>
          <h4>Name: </h4>
          { userData ? <h6>{userData.name}</h6> : null }
        </div>
        <div>
          <h4>Email: </h4>
          { userData ? <h6>{userData.email}</h6> : null }
        </div>
      </section>
      <section>
        <Button onClick={() => history.push('/profile/edit')} variant="Secondary" type="button">
          <FiEdit />
        </Button>
      </section>
    </main>
  );
}

ProfileData.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  userData: PropTypes.shape(),
  dispatch: PropTypes.func.isRequired,
};

ProfileData.defaultProps = {
  userData: null,
};

const mapStateToProps = (state) => ({
  userData: state.profileReducer.userData,
});

export default connect(mapStateToProps)(ProfileData);
