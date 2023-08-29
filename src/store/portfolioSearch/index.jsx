export const ACTIONS = {
  SEARCH_COIN_PENDING: "SEARCH_COIN_PENDING",
  SEARCH_COIN_SUCCESS: "SEARCH_COIN_SUCCESS",
  SEARCH_COIN_ERROR: "SEARCH_COIN_ERROR",
};

const initialState = {
  list: [],
  isLoading: false,
  isError: false,
};

const portfolioSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH_COIN_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTIONS.SEARCH_COIN_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
        isError: false,
      };
    case ACTIONS.SEARCH_COIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default portfolioSearchReducer;
