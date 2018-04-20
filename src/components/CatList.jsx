import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cat from './Cat';

const CatList = ({ cats }) => {
  const Cats = cats.map(cat => (
    <Cat
      name={cat.name}
      description={cat.description}
      id={cat.id}
      img={cat.image}
      key={cat.id}
    />));

  return (
    <section id="products">
      <h2>Koty</h2>
      <div className="row">
        {Cats}
      </div>
    </section>
  );
};

CatList.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(state => state.cat)(CatList);
