import { cloneDeep } from 'lodash';
import { EXPOSE_TILE, SET_GAME } from "../actions/game";

const initialState = {
  elements: []
};

export default (state = initialState, action) => {
  const stateClone = cloneDeep(state);

  switch (action.type) {
    case SET_GAME:
      return { ...stateClone, elements: action.payload.game };
    case EXPOSE_TILE:
      const exposedElement = cloneDeep(stateClone.elements.find((element, index) => index === action.payload.index));
      exposedElement.exposed = true;
      const elements = stateClone.elements.map((element, index) => index === action.payload.index ? exposedElement :  element);
      return { elements };
    default:
      return state;
  }
}
