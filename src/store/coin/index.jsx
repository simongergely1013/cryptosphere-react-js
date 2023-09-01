import { getRandomColor } from "../../utilities/getRandomColor";
import { formatDate } from "../../utilities/formatDate";
import { getLocalStorageItem } from "../../utilities/getLocalStorageItem";

export const ACTIONS = {
  GET_COIN_DATA_PENDING: "GET_COIN_DATA_PENDING",
  GET_COIN_DATA_SUCCESS: "GET_COIN_DATA",
  GET_COIN_DATA_ERROR: "GET_COIN_DATA_ERROR",
};

const initialState = {
  isLoading: false,
  isError: false,
  coinData: {
    chartLabels: [],
    coinPrices: [],
  },
};

const coinDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_COIN_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTIONS.GET_COIN_DATA_SUCCESS:
      const currency = getLocalStorageItem("currency");
      const data = action.payload;
      return {
        ...state,
        coinData: {
          ...state.coinData,
          color1: getRandomColor(),
          color2: getRandomColor(),
          coinPrices: data.prices.map((el) => el[1]),
          chartLabels: data.prices.map((el) => formatDate(el[0])),
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
        },
      };
    case ACTIONS.GET_COIN_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default coinDataReducer;
