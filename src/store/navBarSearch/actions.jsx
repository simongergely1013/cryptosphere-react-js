import axios from "axios";
import { ACTIONS } from ".";

export const searchCoin = (value) => async (dispatch) => {
  try {
    dispatch({ type: ACTIONS.SEARCH_COIN_PENDING });
    let list = [];
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/search?query=${value}`
    );
    if (value !== "") {
      list = data.coins
        .filter((element, index) => {
          return index < 11;
        })
        .map((el) => el.name);
    }
    dispatch({ type: ACTIONS.SEARCH_COIN_SUCCESS, payload: list });
  } catch (error) {
    console.log(error);
    dispatch({ type: ACTIONS.SEARCH_COIN_ERROR });
  }
};
