import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

const Tile = (props) => (
  <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
    <article className="card p-3">
      <div className="card-block">
        <div className="img-card">
          <img src={props.img} alt="Movie" className="w-100"/>
        </div>
      </div>
    </article>
  </div>
);

export default connect()(Tile);