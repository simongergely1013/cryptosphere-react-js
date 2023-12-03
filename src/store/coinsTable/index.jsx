export const ACTIONS = {
  GET_COINS_TABLE_DATA_PENDING: "GET_COINS_TABLE_DATA_PENDING",
  GET_COINS_TABLE_DATA_SUCCESS: "GET_COINS_TABLE_DATA_SUCCESS",
  GET_COINS_TABLE_DATA_ERROR: "GET_COINS_TABLE_DATA_ERROR",
  INCREASE_PAGE: "INCREASE_PAGE",
  NO_MORE_COINS: "NO_MORE_COINS",
  SORT_BY_NAME: "SORT_BT_NAME",
  SORT_BY_PRICE: "SORT_BY_PRICE",
  SORT_BY_1H_CHANGE: "SORT_BY_1H_CHANGE",
  SORT_BY_24H_CHANGE: "SORT_BY_24H_CHANGE",
  SORT_BY_7D_CHANGE: "SORT_BY_7D_CHANGE",
};

const initialState = {
  isLoading: false,
  isError: false,
  coinsData: [],
  labels: [],
  page: 1,
  hasMore: true,
  isNameDesc: false,
  isPriceDesc: false,
  is1hChangeDesc: false,
  is24hChangeDesc: false,
  is7dChangeDesc: false,
};

const coinsTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_COINS_TABLE_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
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
        isLoading: false,
        isError: true,
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
    case ACTIONS.SORT_BY_NAME:
      return {
        ...state,
        coinsData: action.payload,
        isNameDesc: !state.isNameDesc,
      };
    case ACTIONS.SORT_BY_PRICE:
      return {
        ...state,
        coinsData: action.payload,
        isPriceDesc: !state.isPriceDesc,
      };
    case ACTIONS.SORT_BY_1H_CHANGE:
      return {
        ...state,
        coinsData: action.payload,
        is1hChangeDesc: !state.is1hChangeDesc,
      };
    case ACTIONS.SORT_BY_24H_CHANGE:
      return {
        ...state,
        coinsData: action.payload,
        is24hChangeDesc: !state.is24hChangeDesc,
      };
    case ACTIONS.SORT_BY_7D_CHANGE:
      return {
        ...state,
        coinsData: action.payload,
        is7dChangeDesc: !state.is7dChangeDesc,
      };
    default:
      return state;
  }
};

export default coinsTableReducer;
