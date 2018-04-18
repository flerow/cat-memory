export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const setLoggedIn = () => {
    return {
        type: SET_LOGGED_IN
    }
};

export const SET_LOGGED_OUT = 'SET_LOGGED_OUT';
export const setLoggedOut = () => {
  return {
    type: SET_LOGGED_OUT
  }
};

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: {
      username
    }
  }
};

export const SET_GROUP = 'SET_GROUP';
export const setGroup = (group) => {
  return {
    type: SET_GROUP,
    payload: {
      group
    }
  }
};

export const login = ({login, group}) => {
  return (dispatch) => {
    dispatch(setLoggedIn());
    dispatch(setUsername(login));
    dispatch(setGroup(group));
  }
};

export const logout = () => {
  return (dispatch) => {
    dispatch(setLoggedOut());
    dispatch(setUsername(null));
    dispatch(setGroup('ANON'));
  }
};