import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import loggedIn from '../hoc/loggedIn';

const Home = () => (
  <div>
    Mały koci CRM.
  </div>
);


export default compose(
  connect(state => state.auth),
  loggedIn,
)(Home);
