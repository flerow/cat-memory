import uuid from '../utils/uuid';

export const ADD_CAT = 'ADD_CAT';
export const addCat = (newCat) => {
  return {
    type: ADD_CAT,
    payload: {
      ...newCat,
      id: uuid()
    }
  }
};

export const EDIT_CAT = 'EDIT_CAT';
export const editCat = (newCat) => {
  return {
    type: EDIT_CAT,
    payload: {
      ...newCat
    }
  }
};
