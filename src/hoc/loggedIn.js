import React from 'react';
import { Redirect } from "react-router-dom";

export default function loggedIn(WrappedComponent) {
  return (props) => {
    const authenticated = props.logged_in;
    return (
      <div>
        {authenticated && <WrappedComponent { ...props }/>}
        {!authenticated && <Redirect to="/zaloguj"/>}
      </div>
    )
  }
}