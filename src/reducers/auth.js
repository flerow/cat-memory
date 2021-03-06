import { cloneDeep } from 'lodash';
import { SET_GROUP, SET_LOGGED_IN, SET_LOGGED_OUT, SET_USERNAME } from '../actions/auth';

const initialState = {
  username: null,
  loggedIn: false,
  group: 'ANON',
};

export default (state = initialState, action) => {
  const stateClone = cloneDeep(state);

  switch (action.type) {
    case SET_LOGGED_IN:
      return { ...stateClone, loggedIn: true };
    case SET_LOGGED_OUT:
      return { ...stateClone, loggedIn: false };
    case SET_USERNAME:
      return { ...stateClone, username: action.payload.username };
    case SET_GROUP:
      return { ...stateClone, group: action.payload.group };
    default:
      return state;
  }
};
