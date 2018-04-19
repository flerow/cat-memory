import { cloneDeep } from 'lodash';
import { EXPOSE_TILE, HIDE_TILES, RESET_PROGRESS, SET_FOUND, SET_GAME } from '../actions/game';

const initialState = {
  elements: [],
  exposed: [],
  found: [],
};

export default (state = initialState, action) => {
  const stateClone = cloneDeep(state);

  switch (action.type) {
    case SET_GAME:
      return { ...stateClone, elements: action.payload.game };
    case EXPOSE_TILE:
      return {
        ...stateClone,
        exposed: [
          ...stateClone.exposed ? stateClone.exposed : [],
          action.payload.id],
      };
    case HIDE_TILES:
      return { ...stateClone, exposed: [] };
    case SET_FOUND:
      return {
        ...stateClone,
        found: [
          ...stateClone.found ? stateClone.found : [],
          action.payload.id],
      };
    case RESET_PROGRESS:
      return { ...stateClone, found: [], exposed: [] };
    default:
      return state;
  }
};
