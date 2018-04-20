import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function loggedIn(WrappedComponent) {
  const LoggedIn = (props) => {
    const authenticated = props.loggedIn;
    return (
      <div>
        {authenticated && <WrappedComponent {...props} />}
        {!authenticated && <Redirect to="/zaloguj" />}
      </div>
    );
  };

  LoggedIn.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
  };

  return LoggedIn;
}
