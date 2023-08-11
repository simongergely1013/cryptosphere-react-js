export const ACTIONS = {
  GET_COINS_TABLE_DATA_PENDING: "GET_COINS_TABLE_DATA_PENDING",
  GET_COINS_TABLE_DATA_SUCCESS: "GET_COINS_TABLE_DATA_SUCCESS",
  GET_COINS_TABLE_DATA_ERROR: "GET_COINS_TABLE_DATA_ERROR",
  INCREASE_PAGE: "INCREASE_PAGE",
  NO_MORE_COINS: "NO_MORE_COINS",
};

const initialState = {
  isLoading: false,
  error: false,
  coinsData: [],
  labels: [],
  page: 1,
  hasMore: true,
};

const coinsTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_COINS_TABLE_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case ACTIONS.GET_COINS_TABLE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coinsData: action.payload,
      };
    case ACTIONS.GET_COINS_TABLE_DATA_ERROR:
      return {
        ...state,
        isLoading: true,
        error: true,
      };
    case ACTIONS.INCREASE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case ACTIONS.NO_MORE_COINS:
      return {
        ...state,
        hasMore: false,
      };
    default:
      return state;
  }
};

export default coinsTableReducer;
