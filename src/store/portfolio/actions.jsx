import axios from "axios";
import { ACTIONS } from ".";

export const getPortfolioData = (currency) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACTIONS.GET_PORTFOLIO_DATA_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=bitcoin%2C%20ethereum&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({ type: ACTIONS.GET_PORTFOLIO_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTIONS.GET_PORTFOLIO_DATA_ERROR });
    console.log(error);
  }
};
