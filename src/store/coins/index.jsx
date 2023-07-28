import { formatDate } from "../../utilities/formatDate";

export const ACTIONS = {
  GET_COINS_DATA_PENDING: "GET_COINS_DATA_PENDING",
  GET_COINS_DATA_SUCCESS: "GET_COINS_DATA_SUCCESS",
  GET_COINS_DATA_ERROR: "GET_COINS_DATA_ERROR",
  GET_CHARTS_DATA_PENDING: "GET_CHARTS_DATA_PENDING",
  GET_CHARTS_DATA_SUCCESS: "GET_CHARTS_DATA_SUCCESS",
  GET_CHARTS_DATA_ERROR: "GET_CHARTS_DATA_ERROR",
};
const initialState = {
  isLoading: false,
  error: false,
  btcCurrentPrice: 0,
  btcCurrentVolume: 0,
  btcPrices: [],
  btcVolumes: [],
  chartHours: [],
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
        isLoading: false,
        btcCurrentPrice: action.payload[0].current_price,
        btcCurrentVolume: action.payload[0].total_volume,
      };
    case ACTIONS.GET_COINS_DATA_ERROR:
      return {
        ...state,
        isLoading: true,
        error: true,
      };
    case ACTIONS.GET_CHARTS_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case ACTIONS.GET_CHARTS_DATA_SUCCESS:
      return {
        ...state,
        btcPrices: action.payload.prices.map((el) => el[1]),
        btcVolumes: action.payload.total_volumes.map((el) => el[1]),
        chartHours: action.payload.prices.map((el) => formatDate(el[0])),
      };
    case ACTIONS.GET_CHARTS_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default coinsDataReducer;
