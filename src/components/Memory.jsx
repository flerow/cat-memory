import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { shuffle } from 'lodash';
import { resetProgress, setGame } from '../actions/game';
import HiddenTile from './HiddenTile';
import Tile from './Tile';

class Memory extends React.Component {
  constructor(props) {
    super(props);

    const gameElements = shuffle(props.cats.concat(props.cats));
    props.dispatch(resetProgress());
    props.dispatch(setGame(gameElements));
  }

  render() {
    const { elements, exposed, found } = this.props;
    const Elements = elements.map((element, index) => ((
      exposed.some(ex => ex === `${element.id}.${index}`) || found.some(ex => ex === element.id)) ?
        <Tile
          found={found.some(ex => ex === element.id)}
          img={element.image}
          key={`${element.id}.${index}`}
        /> :
        <HiddenTile
          key={`${element.id}.${index}`}
          id={`${element.id}.${index}`}
        />
    ));

    return (
      <section id="products">
        <h2>Super gra!</h2>
        <div className="row">
          {Elements}
        </div>
      </section>
    );
  }
}

Memory.propTypes = {
  exposed: PropTypes.arrayOf(PropTypes.string),
  found: PropTypes.arrayOf(PropTypes.string),
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  cats: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

Memory.defaultProps = {
  exposed: [],
  found: [],
};

export default connect(state => ({
  elements: state.game.elements,
  exposed: state.game.exposed,
  found: state.game.found,
  cats: state.cat.cats,
}))(Memory);
