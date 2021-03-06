import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const CatForm = ({ handleSubmit }) => (
  <div>
    <div className="row">
      <div className="col-md-6 offset-md-3 col-12">
        <form className="form-horizontal" onSubmit={handleSubmit}>
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

CatForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'addCat',
})(CatForm);
