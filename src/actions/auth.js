export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const setLoggedIn = () => ({
  type: SET_LOGGED_IN,
});

export const SET_LOGGED_OUT = 'SET_LOGGED_OUT';
export const setLoggedOut = () => ({
  type: SET_LOGGED_OUT,
});

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = username => ({
  type: SET_USERNAME,
  payload: {
    username,
  },
});

export const SET_GROUP = 'SET_GROUP';
export const setGroup = group => ({
  type: SET_GROUP,
  payload: {
    group,
  },
});

export const login = ({ username, group }) => (dispatch) => {
  dispatch(setLoggedIn());
  dispatch(setUsername(username));
  dispatch(setGroup(group));
};

export const logout = () => (dispatch) => {
  dispatch(setLoggedOut());
  dispatch(setUsername(null));
  dispatch(setGroup('ANON'));
};
