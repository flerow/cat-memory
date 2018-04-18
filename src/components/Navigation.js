import React from 'react';
import { NavLink } from 'react-router-dom';
import { compose } from "redux";
import { connect } from "react-redux";
import loggedIn from "../hoc/loggedIn";
import LogoutButton from "./LogoutButton";

const Navigation = () => (
  <header>
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/koty'>Lista kotów</NavLink></li>
        <li><NavLink to='/dodaj-kota'>Dodaj kota</NavLink></li>
        <li><NavLink to='/memory'>Zagraj</NavLink></li>
      </ul>
      <ul className="nav navbar-nav-right">
        <LogoutButton/>
      </ul>
    </nav>
  </header>
);

export default compose(
  connect(state => state.auth),
  loggedIn
)(Navigation);