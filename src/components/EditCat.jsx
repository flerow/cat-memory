import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CatForm from './CatForm';
import { editCat } from '../actions/cat';

class EditCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
  }

  handleSubmit(values) {
    this.props.dispatch(editCat(values));
    this.setState({ redirect: true });
  }

  render() {
    const initialValues = this.props.cats.find(cat => cat.id === this.props.match.params.id);
    return (
      <React.Fragment>
        {this.state.redirect && <Redirect to="/koty" />}
        <CatForm onSubmit={this.handleSubmit} initialValues={initialValues} />
      </React.Fragment>
    );
  }
}

EditCat.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state.cat)(EditCat);
