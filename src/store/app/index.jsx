export const ACTIONS = {
  SET_THEME_COLOR: "SET_THEME_COLOR",
  SET_COINS_PAGE: "SET_COINS_PAGE",
  SET_PORTFOLIO_PAGE: "SET_PORTFOLIO_PAGE",
  SET_WATCHLIST_PAGE: "SET_WATCHLIST_PAGE",
};

const initialState = {
  isDarkMode: true,
  isCoinsPage: true,
  isPortfolioPage: false,
  isWatchlistPage: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME_COLOR:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case ACTIONS.SET_COINS_PAGE:
      return {
        ...state,
        isCoinsPage: true,
        isPortfolioPage: false,
        isWatchlistPage: false,
      };
    case ACTIONS.SET_PORTFOLIO_PAGE:
      return {
        ...state,
        isCoinsPage: false,
        isPortfolioPage: true,
        isWatchlistPage: false,
      };
    case ACTIONS.SET_WATCHLIST_PAGE:
      return {
        ...state,
        isCoinsPage: false,
        isPortfolioPage: false,
        isWatchlistPage: true,
      };
    default:
      return state;
  }
};

export default appReducer;
