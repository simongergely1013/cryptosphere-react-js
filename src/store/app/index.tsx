type Actions = {
  SET_THEME_COLOR:string,
  SET_COINS_PAGE: string,
  SET_PORTFOLIO_PAGE: string,
  SET_WATCHLIST_PAGE: string,
}

export const ACTIONS: Actions = {
  SET_THEME_COLOR: "SET_THEME_COLOR",
  SET_COINS_PAGE: "SET_COINS_PAGE",
  SET_PORTFOLIO_PAGE: "SET_PORTFOLIO_PAGE",
  SET_WATCHLIST_PAGE: "SET_WATCHLIST_PAGE",
};

type InitialState = {
  isDarkMode: boolean,
  isCoinsPage: boolean,
  isPortfolioPage: boolean,
  isWatchlistPage: boolean
}

const initialState: InitialState = {
  isDarkMode: true,
  isCoinsPage: true,
  isPortfolioPage: false,
  isWatchlistPage: false,
};

const appReducer = (state = initialState, action: { type: any; payload: boolean; }) => {
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
