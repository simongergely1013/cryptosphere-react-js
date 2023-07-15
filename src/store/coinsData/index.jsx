export const ACTIONS = {
  GET_COINS_DATA_PENDING: "GET_COINS_DATA_PENDING",
  GET_COINS_DATA_SUCCESS: "GET_COINS_DATA_SUCCESS",
  GET_COINS_DATA_ERROR: "GET_COINS_DATA_ERROR",
};
const initialState = {
  isLoading: false,
  error: false,
  btcCurrentPrice: 0,
  btcCurrentVolume: 0,
};

const coinsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_COINS_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case ACTIONS.GET_COINS_DATA_SUCCESS:
      return {
        ...state,
        btcCurrentPrice: action.payload[0].current_price,
        btcCurrentVolume: action.payload[0].total_volume,
      };
    case ACTIONS.GET_COINS_DATA_ERROR:
      return {
        ...state,
        isLoading: true,
        error: true,
      };
    default:
      return state;
  }
};

export default coinsDataReducer;
