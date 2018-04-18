import { cloneDeep } from 'lodash';
import { ADD_CAT, EDIT_CAT } from "../actions/cat";

const initialState = {
  cats: []
};

export default (state = initialState, action) => {
  const stateClone = cloneDeep(state);

  switch (action.type) {
    case ADD_CAT:
      return { ...state, cats: [...stateClone.cats, action.payload] };
    case EDIT_CAT:
      return { ...state, cats: stateClone.cats.map(cat => (cat.id === action.payload.id ? action.payload : cat)) };
    default:
      return state;
  }
}
