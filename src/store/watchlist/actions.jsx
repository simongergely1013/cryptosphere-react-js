import axios from "axios";
import { ACTIONS } from ".";

export const addToWatchlist = (coin) => async (dispatch, getState) => {
  const assets = getState().watchlist.assets;
  const newAssets = [...assets, coin];
  dispatch({ type: ACTIONS.ADD_TO_WATCHLIST, payload: newAssets });
};

export const getWatchlistData = (currency) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACTIONS.GET_WATCHLIST_DATA_PENDING });
    const assets = getState().watchlist.assets;
    const assetsUpdate = await Promise.all(
      assets.map(async (el) => {
        const response1 = await axios(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${el}&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
        );
        const data1 = response1.data[0];
        return data1;
      })
    );
    dispatch({
      type: ACTIONS.GET_WATCHLIST_DATA_SUCCESS,
      payload: assetsUpdate,
    });
  } catch (error) {
    dispatch({ type: ACTIONS.GET_WATCHLIST_DATA_ERROR });
    console.log(error);
  }
};

export const sortByName = () => (dispatch, getState) => {
  const state = getState();
  const data = state.watchlist.data;
  const isDesc = !state.watchlist.isNameDesc;
  let dataSorted = [];
  if (isDesc) {
    dataSorted = data.sort((a, b) => {
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
    dataSorted = data.sort((a, b) => {
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
  dispatch({ type: ACTIONS.SORT_BY_NAME, payload: dataSorted });
};

export const sortByPrice = () => (dispatch, getState) => {
  const state = getState();
  const data = state.watchlist.data;
  const isDesc = !state.watchlist.isPriceDesc;
  let dataSorted = [];
  if (isDesc) {
    dataSorted = data.sort((a, b) => b.current_price - a.current_price);
  } else if (!isDesc) {
    dataSorted = data.sort((a, b) => a.current_price - b.current_price);
  }
  dispatch({ type: ACTIONS.SORT_BY_PRICE, payload: dataSorted });
};

export const sortBy1hChange = () => (dispatch, getState) => {
  const state = getState();
  const data = state.watchlist.data;
  const isDesc = !state.watchlist.is1hChangeDesc;
  let dataSorted = [];
  if (isDesc) {
    dataSorted = data.sort(
      (a, b) =>
        b.price_change_percentage_1h_in_currency -
        a.price_change_percentage_1h_in_currency
    );
  } else if (!isDesc) {
    dataSorted = data.sort(
      (a, b) =>
        a.price_change_percentage_1h_in_currency -
        b.price_change_percentage_1h_in_currency
    );
  }
  dispatch({ type: ACTIONS.SORT_BY_1H_CHANGE, payload: dataSorted });
};

export const sortBy24hChange = () => (dispatch, getState) => {
  const state = getState();
  const data = state.watchlist.data;
  const isDesc = !state.watchlist.is24hChangeDesc;
  let dataSorted = [];
  if (isDesc) {
    dataSorted = data.sort(
      (a, b) =>
        b.price_change_percentage_24h_in_currency -
        a.price_change_percentage_24h_in_currency
    );
  } else if (!isDesc) {
    dataSorted = data.sort(
      (a, b) =>
        a.price_change_percentage_24h_in_currency -
        b.price_change_percentage_24h_in_currency
    );
  }
  dispatch({ type: ACTIONS.SORT_BY_24H_CHANGE, payload: dataSorted });
};

export const sortBy7dChange = () => (dispatch, getState) => {
  const state = getState();
  const data = state.watchlist.data;
  const isDesc = !state.watchlist.is7dChangeDesc;
  let dataSorted = [];
  if (isDesc) {
    dataSorted = data.sort(
      (a, b) =>
        b.price_change_percentage_7d_in_currency -
        a.price_change_percentage_7d_in_currency
    );
  } else if (!isDesc) {
    dataSorted = data.sort(
      (a, b) =>
        a.price_change_percentage_7d_in_currency -
        b.price_change_percentage_7d_in_currency
    );
  }
  dispatch({ type: ACTIONS.SORT_BY_7D_CHANGE, payload: dataSorted });
};

export const openModal = (dispatch) => {
  dispatch({ type: ACTIONS.OPEN_MODAL, payload: true });
};
export const closeModal = (dispatch) => {
  dispatch({ type: ACTIONS.CLOSE_MODAL, payload: false });
};
