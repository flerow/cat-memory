import React from 'react';
import { connect } from "react-redux";
import { editCat } from "../actions/cat";
import { Redirect } from "react-router-dom";

class EditCatForm extends React.Component {
  constructor(props) {
    super(props);
    const { name, image, description, id } = props.cats.find(cat => cat.id === props.match.params.id);
    this.state = {
      name,
      description,
      image,
      id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleImageChange(e) {
    this.setState({
      image: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(editCat(this.state));
    this.setState({ redirect: true });
  }

  render() {
    return (
      <div>
        {this.state.redirect && <Redirect to="/koty"/>}
        <div className="row">
          <div className="col-6 offset-3">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <fieldset>
                <legend className="text-center">Edytuj kota</legend>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="name">Imię</label>
                  <div className="col-md-9">
                    <input id="name" name="name" type="text" className="form-control" value={this.state.name}
                           onChange={this.handleNameChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="image">Url zdjęcia</label>
                  <div className="col-md-9">
                    <input id="image" name="image" type="text" className="form-control" value={this.state.image}
                           onChange={this.handleImageChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="description">Opis</label>
                  <div className="col-md-9">
                  <textarea className="form-control" id="description" name="description" rows="5"
                            value={this.state.description} onChange={this.handleDescriptionChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12 text-right">
                    <button type="submit" className="btn btn-primary btn-lg">Edytuj</button>
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

export default connect(state => state.cat)(EditCatForm);