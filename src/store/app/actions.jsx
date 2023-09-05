import { ACTIONS } from ".";

export const setThemeColor = () => (dispatch, getState) => {
  const isDarkMode = getState().app.isDarkMode;
  dispatch({ type: ACTIONS.SET_THEME_COLOR, payload: !isDarkMode });
};
