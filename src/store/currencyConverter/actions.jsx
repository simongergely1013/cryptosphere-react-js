import { ACTIONS } from ".";

export const setCurrencyValue = (value) => (dispatch) => {
  dispatch({ type: ACTIONS.SET_CURRENCY_VALUE, payload: Number(value) });
};

export const setCoinValue = (value) => (dispatch) => {
  dispatch({ type: ACTIONS.SET_COIN_VALUE, payload: Number(value) });
};
