import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      group: 'USER',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleLoginChange(e) {
    this.setState({
      login: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(login(this.state));
    this.setState({ redirect: true });
  }

  render() {
    return (
      <div>
        {this.state.redirect && <Redirect to="/" />}
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <h2>Formularz logowania</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <div className="form-group has-danger">
                <label className="sr-only" htmlFor="login">Login</label>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <input
                    type="text"
                    name="login"
                    className="form-control"
                    id="login"
                    value={this.state.login}
                    onChange={this.handleLoginChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-control-feedback">
                <span className="text-danger align-middle">
                  <i className="fa fa-close" />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <div className="form-group">
                <label className="sr-only" htmlFor="password">Hasło</label>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <button type="submit" className="btn btn-success"><i className="fa fa-sign-in" /> Zaloguj</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginForm);
