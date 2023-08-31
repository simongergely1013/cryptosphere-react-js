export const ACTIONS = {
  ADD_TO_WATCHLIST: "ADD_TO_WATCHLIST",
  GET_WATCHLIST_DATA_PENDING: "GET_WATCHLIST_DATA_PENDING",
  GET_WATCHLIST_DATA_SUCCESS: "GET_WATCHLIST_DATA_SUCCESS",
  GET_WATCHLIST_DATA_ERROR: " GET_WATCHLIST_DATA_ERROR",
  SORT_BY_NAME: "SORT_BT_NAME",
  SORT_BY_PRICE: "SORT_BY_PRICE",
  SORT_BY_1H_CHANGE: "SORT_BY_1H_CHANGE",
  SORT_BY_24H_CHANGE: "SORT_BY_24H_CHANGE",
  SORT_BY_7D_CHANGE: "SORT_BY_7D_CHANGE",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  ADD_COIN_PENDING: "ADD_COIN_PENDING",
  ADD_COIN_SUCCESS: "ADD_COIN_SUCCESS",
  ADD_COIN_ERROR: "ADD_COIN_ERROR",
  REMOVE_COIN: "REMOVE_COIN",
};

const initialState = {
  assets: [],
  data: [],
  isLoading: false,
  isError: false,
  isModalOpen: false,
  isNameDesc: false,
  isPriceDesc: false,
  is1hChangeDesc: false,
  is24hChangeDesc: false,
  is7dChangeDesc: false,
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_WATCHLIST:
      return {
        ...state,
        assets: action.payload,
      };
    case ACTIONS.GET_WATCHLIST_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTIONS.GET_WATCHLIST_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case ACTIONS.GET_WATCHLIST_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ACTIONS.SORT_BY_NAME:
      return {
        ...state,
        data: action.payload,
        isNameDesc: !state.isNameDesc,
      };
    case ACTIONS.SORT_BY_PRICE:
      return {
        ...state,
        data: action.payload,
        isPriceDesc: !state.isPriceDesc,
      };
    case ACTIONS.SORT_BY_1H_CHANGE:
      return {
        ...state,
        data: action.payload,
        is1hChangeDesc: !state.is1hChangeDesc,
      };
    case ACTIONS.SORT_BY_24H_CHANGE:
      return {
        ...state,
        data: action.payload,
        is24hChangeDesc: !state.is24hChangeDesc,
      };
    case ACTIONS.SORT_BY_7D_CHANGE:
      return {
        ...state,
        data: action.payload,
        is7dChangeDesc: !state.is7dChangeDesc,
      };
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    default:
      return state;
  }
};

export default watchlistReducer;
