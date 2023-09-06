export const ACTIONS = {
  SET_THEME_COLOR: "SET_THEME_COLOR",
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
    default:
      return state;
  }
};

export default appReducer;
