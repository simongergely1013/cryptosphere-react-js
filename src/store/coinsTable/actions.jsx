import axios from "axios";
import { getLocalStorageItem } from "../../utilities/getLocalStorageItem";
import { ACTIONS } from ".";

export const getCoinsTableData = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const currency = getLocalStorageItem("currency");
    dispatch({ type: ACTIONS.GET_COINS_TABLE_DATA_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${state.page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
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
  const state = getState();
  const page = state.page + 1;
  dispatch({ type: ACTIONS.INCREASE_PAGE, payload: page });
};
