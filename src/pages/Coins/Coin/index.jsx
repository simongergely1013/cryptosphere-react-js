import axios from "axios";
import { CoinsPercentageBar } from "../../../components/CoinsPercentageBar";
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
      days: 1,
      interval: "hourly",
      isChartToday: true,
      isChartWeek: false,
      isChart1Month: false,
      isChart3Months: false,
      isChart1Year: false,
      isChartAllTime: false,
      color1: getRandomColor(),
      color2: getRandomColor(),
      chartLabels: [],
      coinPrices: [],
    },
  });
  const getThemeColors = () => {
    const theme = localStorage.getItem("theme");
    return JSON.parse(theme);
  };
  useEffect(() => {
    getCoinData(
      props.match.params.coinId,
      state.coinData.days,
      state.coinData.interval
    );
  }, [currency]);

  localStorage.setItem("coinCurrentPrice", state.coinData.coinCurrentPrice);
  const theme = getThemeColors();
  const coinPricesData = {
    labels: state.coinData.chartLabels,
    datasets: [
      {
        label: `${props.match.params.coinId} Price`,
        data: state.coinData.coinPrices,
        borderColor:
          state.coinData.coinPrices[0] <
          state.coinData.coinPrices[state.coinData.coinPrices.length - 1]
            ? theme.btcPriceChartBorderColorGain
            : state.coinData.coinPrices[0] >
              state.coinData.coinPrices[state.coinData.coinPrices.length - 1]
            ? theme.btcPriceChartBorderColorLoss
            : theme.btcPriceChartBorderColorGain,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          state.coinData.coinPrices[0] <
          state.coinData.coinPrices[state.coinData.coinPrices.length - 1]
            ? gradient.addColorStop(0, theme.btcPriceChartGradienColorGain)
            : state.coinData.coinPrices[0] >
              state.coinData.coinPrices[state.coinData.coinPrices.length - 1]
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
              <CoinImage src={state.coinData.coinImgSrc} />
            </CoinBoxInner>
            <h2>
              {state.coinData.coinName} ({state.coinData.coinSymbol})
            </h2>
          </CoinBox>
          <CoinUrlBox>
            <UrlIcon />
            <HomePageDiv>{state.coinData.coinHomePage}</HomePageDiv>
          </CoinUrlBox>
        </CoinBoxContainer>
        <PriceBoxContainer>
          <h2 style={{ fontSize: "44px" }}>
            {formatNumber(state.coinData.coinCurrentPrice)}
          </h2>
          <PriceCHangePercentageDiv>
            <PriceChangePercentage
              color={
                state.coinData.priceChangePercentage24h > 0
                  ? "#00fc2a"
                  : "#fe1040"
              }
            >
              {" "}
              {state.coinData.priceChangePercentage24h}%
            </PriceChangePercentage>
            {state.coinData.priceChangePercentage24h > 0 ? (
              <ArrowUp />
            ) : (
              <ArrowDown />
            )}
          </PriceCHangePercentageDiv>
          <SquareStackIcon />
          <AllTimeContainer>
            <ArrowSvgDiv>
              <ArrowUp />
            </ArrowSvgDiv>
            <AllTimeDiv>
              <AllTimeP>
                All Time High:{" "}
                <span> {formatNumber(state.coinData.coinAth)}</span>
              </AllTimeP>
              <p>{state.coinData.coinAthDate}</p>
            </AllTimeDiv>
          </AllTimeContainer>
          <AllTimeContainer>
            <ArrowSvgDiv>
              <ArrowDown />
            </ArrowSvgDiv>
            <AllTimeDiv>
              <AllTimeP>
                All Time Low:{" "}
                <span> {formatNumber(state.coinData.coinAtl)}</span>
              </AllTimeP>
              <p>{state.coinData.coinAtlDate}</p>
            </AllTimeDiv>
          </AllTimeContainer>
        </PriceBoxContainer>
        <CoinDataBoxContainer>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Market Cap:{" "}
              <span>{formatNumber(state.coinData.coinMarketCap)}</span>{" "}
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Fully Diluted Valuation:{" "}
              <span>
                {formatNumber(state.coinData.coinFullyDillutedValuation)}
              </span>
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Trading Volume 24h:{" "}
              <span>{formatNumber(state.coinData.coinVolume24h)}</span>
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Volume / Market:{" "}
              <span>{state.coinData.coinVolumeOverMarketCap}%</span>
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Circulating Supply:{" "}
              <span>
                {state.coinData.coinCirculatingSupply}{" "}
                {state.coinData.coinSymbol}
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
                {state.coinData.coinTotalSupply} {state.coinData.coinSymbol}
              </span>
            </p>
          </CoinDataRow>
          <CoinDataRow style={{ width: "50%", marginLeft: "-180px" }}>
            <CoinsPercentageBar
              num1={state.coinData.num1 + "%"}
              num2={state.coinData.num2 + "%"}
              width={state.coinData.num1 + "%"}
              color1={state.coinData.color1}
              color2={state.coinData.color2}
              background1={state.coinData.color1}
              background2={state.coinData.color2}
            />
          </CoinDataRow>
        </CoinDataBoxContainer>
      </SummaryWrapper>
      <HeaderDiv>
        <h2>Description</h2>
      </HeaderDiv>
      <DescriptionWrapper>
        <SquareStackIcon />
        <CoinDescriptionDiv>
          {state.coinData.coinDescription}
        </CoinDescriptionDiv>
      </DescriptionWrapper>
      <CoinUrlsRow>
        <UrlDiv>
          <UrlIcon />
          <UrlAddressDiv>{state.coinData.coinBlockChainSite1}</UrlAddressDiv>
          <CopyIcon />
        </UrlDiv>
        <UrlDiv>
          <UrlIcon />
          <UrlAddressDiv>{state.coinData.coinBlockChainSite2}</UrlAddressDiv>
          <CopyIcon />
        </UrlDiv>
        <UrlDiv>
          <UrlIcon />
          <UrlAddressDiv>{state.coinData.coinBlockChainSite3}</UrlAddressDiv>
          <CopyIcon />
        </UrlDiv>
      </CoinUrlsRow>
      <CurrencyConversionRow>
        <CurrencyConverter coinSymbol={state.coinData.coinSymbol} />
      </CurrencyConversionRow>
      <BigLineChart data={coinPricesData} />
    </CoinPageWrapper>
  );
};
