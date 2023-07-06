import axios from "axios";
import { useEffect, useContext, useReducer, useState } from "react";
import { CurrencyConverter } from "../../../components/CurrencyConverter";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import {
  formatDate,
  getRandomColor,
  coinPricesData,
  getThemeColors,
} from "../../../utilities";
import { PageHeader } from "../../../components/PageHeader";
import { CoinBox1 } from "../../../components/CoinBox1";
import { CoinBox2 } from "../../../components/CoinBox2";
import { CoinBox3 } from "../../../components/CoinBox3";
import { CoinDescription } from "../../../components/CoinDescription";
import { CoinUrl } from "../../../components/CoinUrl";
import { CoinChartDurationButton } from "../../../components/CoinChartDurationButton";
import { BigLineChart } from "../../../components/LineChart";
import {
  CoinPageWrapper,
  SummaryWrapper,
  CoinUrlsRow,
  CurrencyConversionRow,
  ChartDurationRow,
} from "./Coin.styles";

const ACTIONS = {
  GET_COIN_DATA: "getCoinData",
};
export const Coin = (props) => {
  const { currency } = useContext(CurrencyContext);
  const getCoinData = async (coinId, days, interval) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      const base = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=`;
      const search = `&days=${days}&interval=${interval}`;
      const fullURL = `${base}${currency}${search}`;
      const response = await axios(fullURL);
      const data2 = response.data;
      const dataFull = { ...data, ...data2 };
      dispatch({ type: ACTIONS.GET_COIN_DATA, payload: dataFull });
    } catch (err) {
      console.log(err);
    }
  };
  const handleDay = () => {
    setDays(1);
    setInterval("hourly");
  };
  const handleWeek = () => {
    setDays(7);
    setInterval("hourly");
  };
  const handleMonth = () => {
    setDays(30);
    setInterval("hourly");
  };
  const handle3Months = () => {
    setDays(90);
    setInterval("daily");
  };
  const handleYear = () => {
    setDays(365);
    setInterval("daily");
  };
  const handleMax = () => {
    setDays("max");
    setInterval("daily");
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.GET_COIN_DATA:
        const data = action.payload;
        return {
          coinData: {
            ...state.coinData,
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
            coinCirculatingSupply: data.market_data.circulating_supply,
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
            coinPrices: data.prices.map((el) => el[1]),
            chartLabels: data.prices.map((el) => formatDate(el[0])),
          },
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    coinData: {
      color1: getRandomColor(),
      color2: getRandomColor(),
      chartLabels: [],
      coinPrices: [],
    },
  });
  const [days, setDays] = useState(1);
  const [interval, setInterval] = useState("hourly");
  const theme = getThemeColors();
  useEffect(() => {
    getCoinData(props.match.params.coinId, days, interval);
  }, [currency, days, interval]);
  localStorage.setItem("coinCurrentPrice", state.coinData.coinCurrentPrice);
  console.log(theme);
  return (
    <CoinPageWrapper>
      <PageHeader text={"Summary"} />
      <SummaryWrapper>
        <CoinBox1
          src={state.coinData.coinImgSrc}
          coinName={state.coinData.coinName}
          coinSymbol={state.coinData.coinSymbol}
          coinHomePage={state.coinData.coinHomePage}
        />
        <CoinBox2
          coinPrice={state.coinData.coinCurrentPrice}
          priceChangePercentage={state.coinData.priceChangePercentage24h}
          ath={state.coinData.coinAth}
          athDate={state.coinData.coinAthDate}
          atl={state.coinData.coinAtl}
          atlDate={state.coinData.coinAtlDate}
        />
        <CoinBox3
          coinMarketCap={state.coinData.coinMarketCap}
          coinFullyDillutedValuation={state.coinData.coinFullyDillutedValuation}
          coinVolume24h={state.coinData.coinVolume24h}
          coinVolumeOverMarketCap={state.coinData.coinVolumeOverMarketCap}
          coinCirculatingSupply={state.coinData.coinCirculatingSupply}
          coinSymbol={state.coinData.coinSymbol}
          coinTotalSupply={state.coinData.coinTotalSupply}
          num1={state.coinData.num1 + "%"}
          num2={state.coinData.num2 + "%"}
          color1={state.coinData.color1}
          color2={state.coinData.color2}
        />
      </SummaryWrapper>
      <PageHeader text={"Description"} />
      <CoinDescription coinDescription={state.coinData.coinDescription} />
      <CoinUrlsRow>
        <CoinUrl blockchainSite={state.coinData.coinBlockChainSite1} />
        <CoinUrl blockchainSite={state.coinData.coinBlockChainSite2} />
        <CoinUrl blockchainSite={state.coinData.coinBlockChainSite3} />
      </CoinUrlsRow>
      <ChartDurationRow>
        <CoinChartDurationButton
          onClick={handleDay}
          duration={"1d"}
          background={days === 1 ? "#06d554" : theme.background}
        />
        <CoinChartDurationButton
          onClick={handleWeek}
          duration={"7d"}
          background={days === 7 ? "#06d554" : theme.background}
        />
        <CoinChartDurationButton
          onClick={handleMonth}
          duration={"30d"}
          background={days === 30 ? "#06d554" : theme.background}
        />
        <CoinChartDurationButton
          onClick={handle3Months}
          duration={"90d"}
          background={days === 90 ? "#06d554" : theme.background}
        />
        <CoinChartDurationButton
          onClick={handleYear}
          duration={"1y"}
          background={days === 365 ? "#06d554" : theme.background}
        />
        <CoinChartDurationButton
          onClick={handleMax}
          duration={"Max"}
          background={days === "max" ? "#06d554" : theme.background}
        />
      </ChartDurationRow>
      <CurrencyConversionRow>
        <CurrencyConverter coinSymbol={state.coinData.coinSymbol} />
      </CurrencyConversionRow>
      <BigLineChart
        data={coinPricesData(
          state.coinData.chartLabels,
          props.match.params.coinId,
          state.coinData.coinPrices
        )}
      />
    </CoinPageWrapper>
  );
};
