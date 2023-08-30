import axios from "axios";
import { ACTIONS } from ".";

export const getCoinData =
  (coinId, currency, chartDuration) => async (dispatch) => {
    try {
      dispatch({ type: ACTIONS.GET_COIN_DATA_PENDING });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      const api2 = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${chartDuration}&interval=daily`;
      const response = await axios(api2);
      const data2 = response.data;
      const dataFull = {
        ...data,
        ...data2,
      };
      dispatch({ type: ACTIONS.GET_COIN_DATA_SUCCESS, payload: dataFull });
    } catch (err) {
      console.log(err);
      dispatch({ type: ACTIONS.GET_COIN_DATA_ERROR });
    }
  };
