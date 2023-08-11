import axios from "axios";
import { ACTIONS } from ".";

export const getCoinsData = (currency) => async (dispatch, getState) => {
  try {
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
export const getChartsData =
  (currency, btcChartDuration) => async (dispatch, getState) => {
    try {
      dispatch({ type: ACTIONS.GET_COINS_DATA_PENDING });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${btcChartDuration}&interval=daily`
      );
      dispatch({ type: ACTIONS.GET_CHARTS_DATA_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: ACTIONS.GET_CHARTS_DATA_ERROR, payload: error });
    }
  };
