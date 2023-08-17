import axios from "axios";
import { ACTIONS } from ".";
import { getLocalStorageItem } from "../../utilities/getLocalStorageItem";

export const getPortfolioData = (currency) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACTIONS.GET_PORTFOLIO_DATA_PENDING });
    const state = getState();
    const portfolio = state.portfolio.assets;
    console.log("portfolio", portfolio);
    const totalMarketCap = getLocalStorageItem("totalMarketCap");
    const portfolioUpdate = await Promise.all(
      portfolio.map(async (el) => {
        const response1 = await axios(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${el.id}&order=market_cap_desc&page=1&price_change_percentage=24h`
        );
        const data1 = response1.data[0];
        return {
          ...el,
          symbol: data1.symbol.toUpperCase(),
          name: data1.name,
          currentPrice: data1.current_price,
          image: data1.image,
          marketCap: data1.market_cap,
          priceChangePercentage24h:
            data1.price_change_percentage_24h_in_currency.toFixed(2),
          dominancePercent: Math.round(
            (data1.market_cap / totalMarketCap) * 100
          ),
          supplyPercent: Math.round(
            (data1.circulating_supply / data1.total_supply) * 100
          ),
        };
      })
    );
    const newPortfolio = await Promise.all(
      portfolioUpdate.map(async (el) => {
        const response2 = await axios(
          `https://api.coingecko.com/api/v3/coins/${el.id}/history?date=${el.date}`
        );
        const data2 = response2.data;
        return {
          ...el,
          initialValueOfInvestment: Math.round(
            el.amount * data2.market_data.current_price[currency]
          ),
          currentInvestmentValue: (el.amount * el.currentPrice).toFixed(2),
          initialCoinMarketPrice: Math.round(
            data2.market_data.current_price[currency]
          ),
          priceChangePercentageSincePurchase: (
            ((el.currentPrice - data2.market_data.current_price[currency]) /
              data2.market_data.current_price[currency]) *
            100
          ).toFixed(2),
          isInitialBigger:
            data2.market_data.current_price.currency > el.currentPrice,
        };
      })
    );
    dispatch({
      type: ACTIONS.GET_PORTFOLIO_DATA_SUCCESS,
      payload: newPortfolio,
    });
  } catch (error) {
    dispatch({ type: ACTIONS.GET_PORTFOLIO_DATA_ERROR });
    console.log(error);
  }
};
