export const ACTIONS = {
  GET_PORTFOLIO_DATA_PENDING: "GET_PORTFOLIO_DATA_PENDING",
  GET_PORTFOLIO_DATA_SUCCESS: "GET_PORTFOLIO_DATA_SUCCESS",
  GET_PORTFOLIO_DATA_ERROR: "GET_PORTFOLIO_DATA_ERROR",
};

const initialState = {
  isLoading: false,
  error: false,
  portfolioData: [],
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PORTFOLIO_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case ACTIONS.GET_PORTFOLIO_DATA_SUCCESS:
      return {
        ...state,
        portfolioData: action.payload,
      };
    case ACTIONS.GET_PORTFOLIO_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default portfolioReducer;
