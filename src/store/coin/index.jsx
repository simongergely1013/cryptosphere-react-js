import { getRandomColor } from "../../utilities/getRandomColor";

export const ACTIONS = {
  GET_COIN_DATA_PENDING: "GET_COIN_DATA_PENDING",
  GET_COIN_DATA_SUCCESS: "GET_COIN_DATA",
  GET_COIN_DATA_ERROR: "GET_COIN_DATA_ERROR",
};

const initialState = {
  isLoading: false,
  isError: false,
  chartLabels: [],
  coinPrices: [],
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
      const data = action.payload;
      return {
        ...state,
        color1: getRandomColor(),
        color2: getRandomColor(),
        coinPrices: data.coinPrices,
        chartLabels: data.chartLabels,
        lineChartData: data.lineChartData,
        coinName: data.name,
        coinSymbol: data.coinSymbol,
        coinImgSrc: data.coinImgSrc,
        coinHomePage: data.coinHomePage,
        coinCurrentPrice: data.coinCurrentPrice,
        priceChangePercentage24h: data.priceChangePercentage24h,
        coinAth: data.coinAth,
        coinAthDate: data.coinAthDate,
        coinAtl: data.coinAtl,
        coinAtlDate: data.coinAtlDate,
        coinMarketCap: data.coinMarketCap,
        coinFullyDillutedValuation: data.coinFullyDillutedValuation,
        coinVolume24h: data.coinVolume24h,
        coinVolumeOverMarketCap: data.coinVolumeOverMarketCap,
        coinCirculatingSupply: data.coinCirculatingSupply,
        coinTotalSupply: data.coinTotalSupply,
        num1: data.num1,
        num2: data.num2,
        coinDescription: data.coinDescription,
        coinBlockChainSite1: data.coinBlockChainSite1,
        coinBlockChainSite2: data.coinBlockChainSite2,
        coinBlockChainSite3: data.coinBlockChainSite3,
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
