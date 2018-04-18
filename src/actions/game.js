export const SET_GAME = 'SET_GAME';
export const setGame = (game) => {
  return {
    type: SET_GAME,
    payload: {
      game,
    }
  }
};

export const RESET_PROGRESS = 'RESET_PROGRESS';
export const resetProgress = () => {
  return {
    type: RESET_PROGRESS
  }
};

export const EXPOSE_TILE = 'EXPOSE_TILE';
export const exposeTile = (id) => {
  return {
    type: EXPOSE_TILE,
    payload: {
      id,
    }
  }
};

export const HIDE_TILES = 'HIDE_TILES';
export const hideTiles = () => {
  return {
    type: HIDE_TILES
  }
};

export const SET_FOUND = 'SET_FOUND';
export const setFound = (id) => {
  return {
    type: SET_FOUND,
    payload: { id }
  }
};

export const clickTile = (id, exposedElements) => {
  return (dispatch) => {
    if (exposedElements.length === 0) {
      dispatch(exposeTile(id));
    } else if (exposedElements.length === 1) {
      dispatch(exposeTile(id));
      if (exposedElements.find(el => id.split('.')[0] === el.split('.')[0])) {
        setTimeout(function () {
          dispatch(setFound(id.split('.')[0]));
        }, 500)
      }
    } else {
      dispatch(hideTiles());
      dispatch(exposeTile(id))
    }
  }
};