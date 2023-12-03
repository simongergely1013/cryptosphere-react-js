import axios from "axios";
import { ACTIONS } from ".";

export const getCoinsTableData = (currency, page) => async (dispatch) => {
  try {
    dispatch({ type: ACTIONS.GET_COINS_TABLE_DATA_PENDING });
    let { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${
        page * 10
      }&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    if (!data.length) {
      dispatch({ type: ACTIONS.NO_MORE_COINS });
    } else {
      dispatch({
        type: ACTIONS.GET_COINS_TABLE_DATA_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({ type: ACTIONS.GET_COINS_TABLE_DATA_ERROR });
    console.log(error);
  }
};

export const increasePage = () => (dispatch, getState) => {
  const page = getState().coinsTable.page + 1;
  dispatch({ type: ACTIONS.INCREASE_PAGE, payload: page });
};

export const sortByName = () => (dispatch, getState) => {
  const state = getState();
  const coinsData = state.coinsTable.coinsData;
  const isDesc = !state.coinsTable.isNameDesc;
  let coinsDataSorted = [];
  if (isDesc) {
    coinsDataSorted = coinsData.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (!isDesc) {
    coinsDataSorted = coinsData.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
      if (nameA < nameB) {
        return 1;
      } else if (nameA > nameB) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  dispatch({ type: ACTIONS.SORT_BY_NAME, payload: coinsDataSorted });
};

export const sortByPrice = () => (dispatch, getState) => {
  const state = getState();
  const coinsData = state.coinsTable.coinsData;
  const isDesc = !state.coinsTable.isPriceDesc;
  let coinsDataSorted = [];
  if (isDesc) {
    coinsDataSorted = coinsData.sort(
      (a, b) => b.current_price - a.current_price
    );
  } else if (!isDesc) {
    coinsDataSorted = coinsData.sort(
      (a, b) => a.current_price - b.current_price
    );
  }
  dispatch({ type: ACTIONS.SORT_BY_PRICE, payload: coinsDataSorted });
};

export const sortBy1hChange = () => (dispatch, getState) => {
  const state = getState();
  const coinsData = state.coinsTable.coinsData;
  const isDesc = !state.coinsTable.is1hChangeDesc;
  let coinsDataSorted = [];
  if (isDesc) {
    coinsDataSorted = coinsData.sort(
      (a, b) =>
        b.price_change_percentage_1h_in_currency -
        a.price_change_percentage_1h_in_currency
    );
  } else if (!isDesc) {
    coinsDataSorted = coinsData.sort(
      (a, b) =>
        a.price_change_percentage_1h_in_currency -
        b.price_change_percentage_1h_in_currency
    );
  }
  dispatch({ type: ACTIONS.SORT_BY_1H_CHANGE, payload: coinsDataSorted });
};

export const sortBy24hChange = () => (dispatch, getState) => {
  const state = getState();
  const coinsData = state.coinsTable.coinsData;
  const isDesc = !state.coinsTable.is24hChangeDesc;
  let coinsDataSorted = [];
  if (isDesc) {
    coinsDataSorted = coinsData.sort(
      (a, b) =>
        b.price_change_percentage_24h_in_currency -
        a.price_change_percentage_24h_in_currency
    );
  } else if (!isDesc) {
    coinsDataSorted = coinsData.sort(
      (a, b) =>
        a.price_change_percentage_24h_in_currency -
        b.price_change_percentage_24h_in_currency
    );
  }
  dispatch({ type: ACTIONS.SORT_BY_24H_CHANGE, payload: coinsDataSorted });
};

export const sortBy7dChange = () => (dispatch, getState) => {
  const state = getState();
  const coinsData = state.coinsTable.coinsData;
  const isDesc = !state.coinsTable.is7dChangeDesc;
  let coinsDataSorted = [];
  if (isDesc) {
    coinsDataSorted = coinsData.sort(
      (a, b) =>
        b.price_change_percentage_7d_in_currency -
        a.price_change_percentage_7d_in_currency
    );
  } else if (!isDesc) {
    coinsDataSorted = coinsData.sort(
      (a, b) =>
        a.price_change_percentage_7d_in_currency -
        b.price_change_percentage_7d_in_currency
    );
  }
  dispatch({ type: ACTIONS.SORT_BY_7D_CHANGE, payload: coinsDataSorted });
};
