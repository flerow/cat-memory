import React from 'react';
import Cat from "./Cat";
import { connect } from "react-redux";

const CatList = ({ cats }) => {
  const Cats = cats.map(cat => <Cat name={cat.name}
                                    description={cat.description}
                                    id={cat.id}
                                    img={cat.image}
                                    key={cat.id}/>);
  return (
    <section id="products">
      <h2>Koty</h2>
      <div className="row">
        {Cats}
      </div>
    </section>
  )
};

export default connect(state => state.cat)(CatList);