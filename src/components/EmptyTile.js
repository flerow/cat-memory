import React from 'react';
import { connect } from "react-redux";
import { exposeTile } from "../actions/game";

const EmptyTile = (props) => (
  <div className="col-lg-3 col-md-4 col-sm-6 mt-3" onClick={() => props.dispatch(exposeTile(props.id))}>
    <article className="card p-3">
      <div className="card-block">
        <div className="img-card">
          <img src="https://img2.kolorowankimalowanki.pl/kot-%C5%9Bpi-poduszce_4c9a3412a3743-p.gif" className="w-100"/>
        </div>
      </div>
    </article>
  </div>
);

export default connect()(EmptyTile);