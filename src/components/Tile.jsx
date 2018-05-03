import React from 'react';
import PropTypes from 'prop-types';

const Tile = props => (
  <div className={`col-lg-3 col-md-4 col-sm-3 mt-3 col-3${props.found && ' tile-invisible'}`}>
    <article className="card p-3">
      <div className="card-block">
        <div className="img-card">
          <img src={props.img} alt="obrazek" className="w-100" />
        </div>
      </div>
    </article>
  </div>
);

Tile.propTypes = {
  img: PropTypes.string.isRequired,
  found: PropTypes.bool.isRequired,
};

export default Tile;
