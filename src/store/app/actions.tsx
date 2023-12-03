import { ACTIONS } from ".";
import { AppDispatch } from "..";

export const setThemeColor = () => (dispatch: AppDispatch, getState: any) => {
  const isDarkMode = getState().app.isDarkMode;
  dispatch({ type: ACTIONS.SET_THEME_COLOR, payload: !isDarkMode });
};
export const setCoinsPage = () => (dispatch: AppDispatch) => {
  dispatch({ type: ACTIONS.SET_COINS_PAGE });
};
export const setPortfolioPage = () => (dispatch: AppDispatch) => {
  dispatch({ type: ACTIONS.SET_PORTFOLIO_PAGE });
};
export const setWatchlistPage = () => (dispatch: AppDispatch) => {
  dispatch({ type: ACTIONS.SET_WATCHLIST_PAGE });
};
