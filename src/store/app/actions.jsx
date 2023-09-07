import { ACTIONS } from ".";

export const setThemeColor = () => (dispatch, getState) => {
  const isDarkMode = getState().app.isDarkMode;
  dispatch({ type: ACTIONS.SET_THEME_COLOR, payload: !isDarkMode });
};
export const setCoinsPage = () => (dispatch) => {
  dispatch({ type: ACTIONS.SET_COINS_PAGE });
};
export const setPortfolioPage = () => (dispatch) => {
  dispatch({ type: ACTIONS.SET_PORTFOLIO_PAGE });
};
export const setWatchlisPage = () => (dispatch) => {
  dispatch({ type: ACTIONS.SET_WATCHLIST_PAGE });
};
