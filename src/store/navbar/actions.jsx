import axios from "axios";
import { ACTIONS } from ".";

export const getNavBarData = (currency) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACTIONS.GET_NAVBAR_DATA_PENDING });
    const { data } = await axios("https://api.coingecko.com/api/v3/global");
    let navBarData = getState().navBar.navBarData;
    navBarData["btcDominance"] = Math.round(
      data.data.market_cap_percentage.btc
    );
    navBarData["ethDominance"] = Math.round(
      data.data.market_cap_percentage.eth
    );
    navBarData["coins"] = data.data.active_cryptocurrencies;
    navBarData["markets"] = data.data.markets;
    navBarData["marketCapChange24h"] =
      data.data.market_cap_change_percentage_24h_usd;
    navBarData["totalMarketCap"] =
      data.data.total_market_cap[currency] / 1000000000000;
    navBarData["totalMarketCapLong"] = data.data.total_market_cap[currency];
    navBarData["btcMarketCap"] = data.data.total_market_cap["btc"];
    navBarData["ethMarketCap"] = data.data.total_market_cap["eth"];
    navBarData["totalVolume"] = data.data.total_volume[currency] / 1000000000;
    navBarData["totalVolumeLong"] = data.data.total_volume[currency];
    navBarData["totalVolumePercentage"] = (
      (data.data.total_volume[currency] /
        data.data.total_market_cap[currency]) *
      100
    ).toFixed(2);
    localStorage.setItem(
      "totalMarketCap",
      data.data.total_market_cap[currency]
    );
    setTimeout(() => {
      dispatch({ type: ACTIONS.GET_NAVBAR_DATA_SUCCESS, payload: navBarData });
    }, 2000);
  } catch (error) {
    dispatch({ type: ACTIONS.GET_NAVBAR_DATA_ERROR });
    console.log(error);
  }
};
