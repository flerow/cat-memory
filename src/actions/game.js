export const SET_GAME = 'SET_GAME';
export const setGame = (game) => {
  return {
    type: SET_GAME,
    payload: {
      game,
    }
  }
};


export const EXPOSE_TILE = 'EXPOSE_TILE';
export const exposeTile = (index) => {
  return {
    type: EXPOSE_TILE,
    payload: {
      index,
    }
  }
};