import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

const Cat = (props) => (
  <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
    <article className="card p-3">
      <header className="title-header">
        <h3>{props.name}</h3>
      </header>
      <div className="card-block">
        <div className="img-card">
          <img src={props.img} alt="Movie" className="w-100"/>
        </div>
        <p className="tagline card-text text-xs-center">{props.description}</p>
        <Link className="btn btn-primary btn-block" to={`/koty/${props.id}`}>Edytuj</Link>
      </div>
    </article>
  </div>
);

export default connect()(Cat);