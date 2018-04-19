import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Cat = props => (
  <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
    <article className="card p-3">
      <header className="title-header">
        <h3>{props.name}</h3>
      </header>
      <div className="card-block">
        <div className="img-card">
          <img src={props.img} alt="Movie" className="w-100" />
        </div>
        <p className="tagline card-text text-xs-center">{props.description}</p>
        <Link href={`/koty/${props.id}`} className="btn btn-primary btn-block" to={`/koty/${props.id}`}>Edytuj</Link>
      </div>
    </article>
  </div>
);

Cat.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default connect()(Cat);
