import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FiEdit } from 'react-icons/fi';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getUser from '../redux/actions/getUser';

function ProfileData({ dispatch, userData }) {
  const history = useHistory();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <main className="profile-main">
      <section className="profile-data-conteiner">
        { userData ? <img src={userData.img} alt="Profile-img" width={300} /> : null }
        <section className="profile-data-fields">
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
        <div>
          <Button onClick={() => history.push('/profile/edit')} variant="Secondary" type="button">
            <FiEdit />
          </Button>
        </div>
      </section>
    </main>
  );
}

ProfileData.propTypes = {
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
