import axios from "axios";
import { ACTIONS } from ".";
import { formatDate } from "../../utilities/formatDate";
import { coinPricesData } from "../../utilities/coinPricesData";

export const getCoinData =
  (coinId, currency, chartDuration) => async (dispatch, getState) => {
    try {
      dispatch({ type: ACTIONS.GET_COIN_DATA_PENDING });
      const state = getState().coin;
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      const response = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${chartDuration}&interval=daily`
      );
      const data2 = response.data;
      const chartLabels = data2.prices.map((el) => formatDate(el[0]));
      const coinPrices = data2.prices.map((el) => el[1]);
      const lineChartData = coinPricesData(chartLabels, coinId, coinPrices);

      const dataFull = {
        ...state,
        coinPrices: coinPrices,
        chartLabels: chartLabels,
        lineChartData: lineChartData,
        coinName: data.name,
        coinSymbol: data.symbol.toUpperCase(),
        coinImgSrc: data.image.large,
        coinHomePage: data.links.homepage[0],
        coinCurrentPrice: data.market_data.current_price[currency],
        priceChangePercentage24h:
          data.market_data.price_change_percentage_24h.toFixed(2),
        coinAth: data.market_data.ath[currency],
        coinAthDate: data.market_data.ath_date[currency].slice(0, 10),
        coinAtl: data.market_data.atl[currency],
        coinAtlDate: data.market_data.atl_date[currency].slice(0, 10),
        coinMarketCap: data.market_data.market_cap[currency],
        coinFullyDillutedValuation:
          data.market_data.fully_diluted_valuation[currency],
        coinVolume24h: data.market_data.total_volume[currency],
        coinVolumeOverMarketCap: (
          data.market_data.total_volume[currency] /
          data.market_data.market_cap[currency]
        ).toFixed(2),
        coinCirculatingSupply: data.market_data.circulating_supply.toFixed(2),
        coinTotalSupply: data.market_data.total_supply,
        num1:
          (
            data.market_data.total_volume[currency] /
            data.market_data.market_cap[currency]
          ).toFixed(2) * 100,
        num2:
          100 -
          (
            data.market_data.total_volume[currency] /
            data.market_data.market_cap[currency]
          ).toFixed(2) *
            100,
        coinDescription: data.description["en"],
        coinBlockChainSite1: data.links.blockchain_site[0],
        coinBlockChainSite2: data.links.blockchain_site[1],
        coinBlockChainSite3: data.links.blockchain_site[2],
      };
      dispatch({ type: ACTIONS.GET_COIN_DATA_SUCCESS, payload: dataFull });
    } catch (err) {
      console.log(err);
      dispatch({ type: ACTIONS.GET_COIN_DATA_ERROR });
    }
  };
