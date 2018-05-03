import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCat } from '../actions/cat';

class AddCatForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.dispatch(addCat(values));
    this.setState({ redirect: true });
  }

  render() {
    return (
      <div>
        {this.state.redirect && <Redirect to="/koty" />}
        <div className="row">
          <div className="col-md-6 offset-md-3 col-12">
            <form className="form-horizontal" onSubmit={this.props.handleSubmit(this.handleSubmit)}>
              <fieldset>
                <legend className="text-center">Dodaj kota</legend>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="name">Imię</label>
                  <div className="col-md-9">
                    <Field
                      component="input"
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="image">Url zdjęcia</label>
                  <div className="col-md-9">
                    <Field
                      component="input"
                      id="image"
                      name="image"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="description">Opis</label>
                  <div className="col-md-9">
                    <Field
                      component="textarea"
                      className="form-control"
                      id="description"
                      name="description"
                      rows="5"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12 text-right">
                    <button type="submit" className="btn btn-primary btn-lg">Dodaj</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddCatForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'addCat',
})(connect()(AddCatForm));
