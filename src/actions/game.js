export const SET_GAME = 'SET_GAME';
export const setGame = game => ({
  type: SET_GAME,
  payload: {
    game,
  },
});

export const RESET_PROGRESS = 'RESET_PROGRESS';
export const resetProgress = () => ({
  type: RESET_PROGRESS,
});

export const EXPOSE_TILE = 'EXPOSE_TILE';
export const exposeTile = id => ({
  type: EXPOSE_TILE,
  payload: {
    id,
  },
});

export const HIDE_TILES = 'HIDE_TILES';
export const hideTiles = () => ({
  type: HIDE_TILES,
});

export const SET_FOUND = 'SET_FOUND';
export const setFound = id => ({
  type: SET_FOUND,
  payload: { id },
});

export const clickTile = (id, exposedElements) => (dispatch) => {
  if (exposedElements.length === 0) {
    dispatch(exposeTile(id));
  } else if (exposedElements.length === 1) {
    dispatch(exposeTile(id));
    if (exposedElements.find(el => id.split('.')[0] === el.split('.')[0])) {
      dispatch(setFound(id.split('.')[0]));
    }
  } else {
    dispatch(hideTiles());
    dispatch(exposeTile(id));
  }
};
