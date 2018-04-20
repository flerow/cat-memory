import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clickTile } from '../actions/game';

const HiddenTile = props => (
  <div role="none" className="col-lg-3 col-md-3 col-sm-3 mt-3 col-3" onClick={() => props.dispatch(clickTile(props.id, props.exposed ? props.exposed : []))}>
    <article className="card p-3">
      <div className="card-block">
        <div className="img-card">
          <img src="http://games1.85play.com/thumbs/original-non-stop-nyan-cat.gif" alt="ok" className="w-100" />
        </div>
      </div>
    </article>
  </div>
);

HiddenTile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  exposed: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(state => state.game)(HiddenTile);
