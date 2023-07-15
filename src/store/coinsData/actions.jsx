import axios from "axios";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { ACTIONS } from ".";

export const getCoinsData = () => async (dispatch, getState) => {
  try {
    const { currency } = useContext(CurrencyContext);
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
