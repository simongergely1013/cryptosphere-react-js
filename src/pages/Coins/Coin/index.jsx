import axios from "axios";
import CoinsPercentageBar from "../../../components/CoinsTablePercentageBar";
import { CurrencyConverter } from "../../../components/CurrencyConverter";
import { useEffect, useContext, useReducer } from "react";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import { formatNumber, formatDate, getRandomColor } from "../../../utilities";
import { ArrowUp, ArrowDown } from "../Coins.styles";
import { BigLineChart } from "../../../components/LineChart";
import {
  CoinPageWrapper,
  HeaderDiv,
  SummaryWrapper,
  CoinBoxContainer,
  CoinBox,
  CoinBoxInner,
  CoinImage,
  CoinUrlBox,
  PriceBoxContainer,
  CoinDataBoxContainer,
  UrlIcon,
  HomePageDiv,
  PriceCHangePercentageDiv,
  PriceChangePercentage,
  SquareStackIcon,
  AllTimeContainer,
  AllTimeDiv,
  ArrowSvgDiv,
  AllTimeP,
  CoinDataRow,
  SmallRectangleBlue,
  PlusSmallSvg,
  DescriptionWrapper,
  CoinDescriptionDiv,
  CoinUrlsRow,
  UrlDiv,
  CopyIcon,
  UrlAddressDiv,
  CurrencyConversionRow,
  BigChartWrapper,
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

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.GET_COIN_DATA:
        const data = action.payload;
        return {
          coinData: data,
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
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    coinData: {},
    coinName: "",
    coinSymbol: "",
    coinImgSrc: "",
    coinHomePage: "",
    coinCurrentPrice: 0,
    priceChangePercentage24h: 0,
    coinAth: 0,
    coinAthDate: "",
    coinAtl: 0,
    coinAtlDate: "",
    coinMarketCap: 0,
    coinFullyDillutedValuation: 0,
    coinVolume24h: 0,
    coinVolumeOverMarketCap: 0,
    coinCirculatingSupply: 0,
    coinTotalSupply: 0,
    color1: getRandomColor(),
    color2: getRandomColor(),
    num1: 0,
    num2: 0,
    coinDescription: "",
    coinBlockChainSite1: "",
    coinBlockChainSite2: "",
    coinBlockChainSite3: "",
    days: 1,
    interval: "hourly",
    chartLabels: [],
    coinPrices: [],
    isChartToday: true,
    isChartWeek: false,
    isChart1Month: false,
    isChart3Months: false,
    isChart1Year: false,
    isChartAllTime: false,
  });

  const getThemeColors = () => {
    const theme = localStorage.getItem("theme");
    return JSON.parse(theme);
  };

  useEffect(() => {
    getCoinData(props.match.params.coinId, state.days, state.interval);
  }, [currency]);

  localStorage.setItem("coinCurrentPrice", state.coinCurrentPrice);
  const theme = getThemeColors();
  const coinPricesData = {
    labels: state.chartLabels,
    datasets: [
      {
        label: `${props.match.params.coinId} Price`,
        data: state.coinPrices,
        borderColor:
          state.coinPrices[0] < state.coinPrices[state.coinPrices.length - 1]
            ? theme.btcPriceChartBorderColorGain
            : state.coinPrices[0] >
              state.coinPrices[state.coinPrices.length - 1]
            ? theme.btcPriceChartBorderColorLoss
            : theme.btcPriceChartBorderColorGain,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          state.coinPrices[0] < state.coinPrices[state.coinPrices.length - 1]
            ? gradient.addColorStop(0, theme.btcPriceChartGradienColorGain)
            : state.coinPrices[0] >
              state.coinPrices[state.coinPrices.length - 1]
            ? gradient.addColorStop(0, theme.btcPriceChartGradienColorLoss)
            : gradient.addColorStop(0, theme.btcPriceChartGradienColorGain);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          return gradient;
        },
        pointRadius: 0,
        borderWidth: 3,
        fill: true,
      },
    ],
  };
  return (
    <CoinPageWrapper>
      <HeaderDiv>
        <h2>Summary</h2>
      </HeaderDiv>
      <SummaryWrapper>
        <CoinBoxContainer>
          <CoinBox>
            <CoinBoxInner>
              <CoinImage src={state.coinImgSrc} />
            </CoinBoxInner>
            <h2>
              {state.coinName} ({state.coinSymbol})
            </h2>
          </CoinBox>
          <CoinUrlBox>
            <UrlIcon />
            <HomePageDiv>{state.coinHomePage}</HomePageDiv>
          </CoinUrlBox>
        </CoinBoxContainer>
        <PriceBoxContainer>
          <h2 style={{ fontSize: "44px" }}>
            {formatNumber(state.coinCurrentPrice)}
          </h2>
          <PriceCHangePercentageDiv>
            <PriceChangePercentage
              color={state.priceChangePercentage24h > 0 ? "#00fc2a" : "#fe1040"}
            >
              {" "}
              {state.priceChangePercentage24h}%
            </PriceChangePercentage>
            {state.priceChangePercentage24h > 0 ? <ArrowUp /> : <ArrowDown />}
          </PriceCHangePercentageDiv>
          <SquareStackIcon />
          <AllTimeContainer>
            <ArrowSvgDiv>
              <ArrowUp />
            </ArrowSvgDiv>
            <AllTimeDiv>
              <AllTimeP>
                All Time High: <span> {formatNumber(state.coinAth)}</span>
              </AllTimeP>
              <p>{state.coinAthDate}</p>
            </AllTimeDiv>
          </AllTimeContainer>
          <AllTimeContainer>
            <ArrowSvgDiv>
              <ArrowDown />
            </ArrowSvgDiv>
            <AllTimeDiv>
              <AllTimeP>
                All Time Low: <span> {formatNumber(state.coinAtl)}</span>
              </AllTimeP>
              <p>{state.coinAtlDate}</p>
            </AllTimeDiv>
          </AllTimeContainer>
        </PriceBoxContainer>
        <CoinDataBoxContainer>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Market Cap: <span>{formatNumber(state.coinMarketCap)}</span>{" "}
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Fully Diluted Valuation:{" "}
              <span>{formatNumber(state.coinFullyDillutedValuation)}</span>
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Trading Volume 24h:{" "}
              <span>{formatNumber(state.coinVolume24h)}</span>
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Volume / Market: <span>{state.coinVolumeOverMarketCap}%</span>
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Circulating Supply:{" "}
              <span>
                {state.coinCirculatingSupply} {state.coinSymbol}
              </span>
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Max Supply:{" "}
              <span>
                {state.coinTotalSupply} {state.coinSymbol}
              </span>
            </p>
          </CoinDataRow>
          <CoinDataRow style={{ width: "50%", marginLeft: "-180px" }}>
            <CoinsPercentageBar
              num1={state.num1 + "%"}
              num2={state.num2 + "%"}
              width={state.num1 + "%"}
              color1={state.color1}
              color2={state.color2}
              background1={state.color1}
              background2={state.color2}
            />
          </CoinDataRow>
        </CoinDataBoxContainer>
      </SummaryWrapper>
      <HeaderDiv>
        <h2>Description</h2>
      </HeaderDiv>
      <DescriptionWrapper>
        <SquareStackIcon />
        <CoinDescriptionDiv>{state.coinDescription}</CoinDescriptionDiv>
      </DescriptionWrapper>
      <CoinUrlsRow>
        <UrlDiv>
          <UrlIcon />
          <UrlAddressDiv>{state.coinBlockChainSite1}</UrlAddressDiv>
          <CopyIcon />
        </UrlDiv>
        <UrlDiv>
          <UrlIcon />
          <UrlAddressDiv>{state.coinBlockChainSite2}</UrlAddressDiv>
          <CopyIcon />
        </UrlDiv>
        <UrlDiv>
          <UrlIcon />
          <UrlAddressDiv>{state.coinBlockChainSite3}</UrlAddressDiv>
          <CopyIcon />
        </UrlDiv>
      </CoinUrlsRow>
      <CurrencyConversionRow>
        <CurrencyConverter coinSymbol={state.coinSymbol} />
      </CurrencyConversionRow>
      <BigChartWrapper>
        <BigLineChart data={coinPricesData} />
      </BigChartWrapper>
    </CoinPageWrapper>
  );
};
