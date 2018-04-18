import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import loggedIn from "../hoc/loggedIn";
import { logout } from "../actions/auth";

const LogoutButton = (props) => (
  <button className="btn btn-success" onClick={() => props.dispatch(logout())}>Wyloguj</button>
);

export default compose(
  connect(state => state.auth),
  loggedIn
)(LogoutButton);