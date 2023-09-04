export const ACTIONS = {
  GET_NAVBAR_DATA_PENDING: "GET_NAVBAR_DATA_PENDING",
  GET_NAVBAR_DATA_SUCCESS: "GET_NAVBAR_DATA_SUCCESS",
  GET_NAVBAR_DATA_ERROR: "GET_NAVBAR_DATA_ERROR",
};

const initialState = {
  isLoading: false,
  error: false,
  navBarData: {
    btcDominance: 0,
    coins: 0,
    ethDominance: 0,
    marketCapChange24h: 0,
    markets: 0,
    totalMarketCap: "",
    totalMarketCapLong: "",
    totalVolume: "",
    totalVolumeLong: "",
    totalVolumePercentage: "",
    btcMarketCap: "",
    ethMarketCap: "",
  },
};

const navBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_NAVBAR_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case ACTIONS.GET_NAVBAR_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        navBarData: action.payload,
      };
    case ACTIONS.GET_NAVBAR_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default navBarReducer;
