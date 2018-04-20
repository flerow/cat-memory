import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loggedIn from '../hoc/loggedIn';
import { logout } from '../actions/auth';

const LogoutButton = props => (
  <button className="btn btn-success" onClick={() => props.dispatch(logout())}>Wyloguj</button>
);

LogoutButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default compose(
  connect(state => state.auth),
  loggedIn,
)(LogoutButton);
