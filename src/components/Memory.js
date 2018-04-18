import React from 'react';
import Cat from "./Cat";
import { connect } from "react-redux";
import { shuffle } from 'lodash';
import { setGame } from "../actions/game";
import EmptyTile from "./EmptyTile";

class Memory extends React.Component {

  constructor(props) {
    super(props);

    const gameElements = shuffle(props.cat.cats.concat(props.cat.cats));
    props.dispatch(setGame(gameElements));
  }

  render() {
    const Elements = this.props.game.elements.map((element, index) => {
      return  element.exposed ?
        (<Cat name={element.name}
              description={element.description}
              id={element.id}
              img={element.image}
              key={`${element.id}.${index}`}/>) : <EmptyTile key={`${element.id}.${index}`} id={index} />

    });
    return (
      <section id="products">
        <h2>Super gra!</h2>
        <div className="row">
          {Elements}
        </div>
      </section>
    )
  };
}

export default connect(state => state)(Memory);