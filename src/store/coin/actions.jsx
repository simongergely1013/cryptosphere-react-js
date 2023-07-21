import axios from "axios";
import { ACTIONS } from ".";
import { getLocalStorageItem } from "../../utilities/getLocalStorageItem";

export const getCoinData = (coinId, chartDuration) => async (dispatch) => {
  try {
    const currency = getLocalStorageItem("currency");
    dispatch({ type: ACTIONS.GET_COIN_DATA_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
    );
    const api2 = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${chartDuration}&interval=hourly`;
    const response = await axios(api2);
    const data2 = response.data;
    const dataFull = { ...data, ...data2 };
    dispatch({ type: ACTIONS.GET_COIN_DATA_SUCCESS, payload: dataFull });
  } catch (err) {
    console.log(err);
    dispatch({ type: ACTIONS.GET_COIN_DATA_ERROR });
  }
};
