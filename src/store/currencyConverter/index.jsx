export const ACTIONS = {
  SET_CURRENCY_VALUE: "SET_CURRENCY_VALUE",
  SET_COIN_VALUE: "SET_COIN_VALUE",
};

const initialState = {
  currencyValue: "",
  coinValue: "",
};

const currencyConverterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENCY_VALUE:
      return {
        ...state,
        currencyValue: action.payload,
      };
    case ACTIONS.SET_COIN_VALUE:
      return {
        ...state,
        coinValue: action.payload,
      };
    default:
      return state;
  }
};

export default currencyConverterReducer;
