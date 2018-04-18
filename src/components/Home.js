import React from 'react';
import loggedIn from "../hoc/loggedIn";
import {connect} from 'react-redux';
import {compose} from 'redux';

const Home = (props) => (
  <div>
    Mały koci CRM.
  </div>
);


export default compose(
  connect(state => state.auth),
  loggedIn
)(Home);