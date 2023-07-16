import axios from "axios";
import { ACTIONS } from ".";
import { getLocalStorageItem } from "../../utilities";

export const getCoinsData = () => async (dispatch, getState) => {
  try {
    const currency = getLocalStorageItem("currency");
    dispatch({ type: ACTIONS.GET_COINS_DATA_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({ type: ACTIONS.GET_COINS_DATA_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ACTIONS.GET_COINS_DATA_ERROR, payload: error });
  }
};
export const getChartsData = () => async (dispatch, getState) => {
  try {
    const currency = getLocalStorageItem("currency");
    const btcChartDuration = getLocalStorageItem("btcChartDuration");
    dispatch({ type: ACTIONS.GET_COINS_DATA_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${btcChartDuration}&interval=hourly`
    );
    dispatch({ type: ACTIONS.GET_CHARTS_DATA_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ACTIONS.GET_CHARTS_DATA_ERROR, payload: error });
  }
};
