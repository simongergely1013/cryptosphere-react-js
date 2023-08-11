import axios from "axios";
import { ACTIONS } from ".";

export const getCoinsTableData = (currency) => async (dispatch, getState) => {
  try {
    const page = getState().coinsTable.page;
    const perPage = page * 10;
    dispatch({ type: ACTIONS.GET_COINS_TABLE_DATA_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({ type: ACTIONS.GET_COINS_TABLE_DATA_SUCCESS, payload: data });
    if (!data.length) {
      dispatch({ type: ACTIONS.NO_MORE_COINS });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: ACTIONS.GET_COINS_TABLE_DATA_ERROR });
  }
};
export const increasePage = () => (dispatch, getState) => {
  const page = getState().coinsTable.page + 1;
  dispatch({ type: ACTIONS.INCREASE_PAGE, payload: page });
};
