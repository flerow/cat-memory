import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CatForm from './CatForm';
import { addCat } from '../actions/cat';

class AddCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
  }

  handleSubmit(values) {
    this.props.dispatch(addCat(values));
    this.setState({ redirect: true });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.redirect && <Redirect to="/koty" />}
        <CatForm onSubmit={this.handleSubmit} />
      </React.Fragment>
    );
  }
}

AddCat.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddCat);
