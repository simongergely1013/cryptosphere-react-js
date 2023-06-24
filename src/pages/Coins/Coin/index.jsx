import axios from "axios";
import CoinsPercentageBar from "../../../components/CoinsTablePercentageBar";
import { CurrencyConverter } from "../../../components/CurrencyConverter";
import { useState, useEffect, useContext } from "react";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import { formatNumber, formatDate, getRandomColor } from "../../../utilities";
import { ArrowUp, ArrowDown } from "../Coins.styles";
import { LineChart } from "../../../components/LineChart";
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

export const Coin = (props) => {
  const { currency } = useContext(CurrencyContext);
  const [coinData, setCoinData] = useState({});
  const [coinName, setCoinName] = useState("");
  const [coinSymbol, setCoinSymbol] = useState("");
  const [coinImgSrc, setCoinImgSrc] = useState("");
  const [coinHomePage, setCoinHomePage] = useState("");
  const [coinCurrentPrice, setCoinCurrentPrice] = useState(0);
  const [priceChangePercentage24h, setPriceChangePercentage24h] = useState(0);
  const [coinAth, setcoinAth] = useState(0);
  const [coinAthDate, setCoinAthDate] = useState("");
  const [coinAtl, setCoinAtl] = useState(0);
  const [coinAtlDate, setCoinAtlDate] = useState("");
  const [coinMarketCap, setCoinMarketCap] = useState(0);
  const [coinFullyDillutedValuation, setCoinFullyDillutedValuation] =
    useState(0);
  const [coinVolume24h, setCoinVolume24h] = useState(0);
  const [coinVolumeOverMarketCap, setCoinVolumeOverMarketCap] = useState(0);
  const [coinCirculatingSupply, setCoinCirculatingSupply] = useState(0);
  const [coinTotalSupply, setCoinTotalSupply] = useState(0);
  const [color1, setColor1] = useState(getRandomColor());
  const [color2, setColor2] = useState(getRandomColor());
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [coinDescription, setCoinDescription] = useState("");
  const [coinBlockChainSite1, setCoinBlockChainSite1] = useState("");
  const [coinBlockChainSite2, setCoinBlockChainSite2] = useState("");
  const [coinBlockChainSite3, setCoinBlockChainSite3] = useState("");
  const [days, setDays] = useState(1);
  const [interval, setInterval] = useState("hourly");
  const [chartHours, setChartHours] = useState([]);
  const [coinPricesHourly, setCoinPricesHourly] = useState([]);
  const [isChartToday, setIsChartToday] = useState(true);
  const [isChartWeek, setIsChartWeek] = useState(false);
  const [isChart1Month, setIsChart1Month] = useState(false);
  const [isChart3Months, setIsChart3Months] = useState(false);
  const [isChart1Year, setIsChart1Year] = useState(false);
  const [isChartAllTime, setIsChartAllTime] = useState(false);

  const getCoinData = async (coinId) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      setCoinData(data);
      setCoinName(data.name);
      setCoinSymbol(data.symbol);
      setCoinImgSrc(data.image.large);
      setCoinHomePage(data.links.homepage[0]);
      setCoinCurrentPrice(data.market_data.current_price[currency]);
      setPriceChangePercentage24h(data.market_data.price_change_percentage_24h);
      setcoinAth(data.market_data.ath[currency]);
      setCoinAthDate(data.market_data.ath_date[currency]);
      setCoinAtl(data.market_data.atl[currency]);
      setCoinAtlDate(data.market_data.atl_date[currency]);
      setCoinMarketCap(data.market_data.market_cap[currency]);
      setCoinFullyDillutedValuation(
        data.market_data.fully_diluted_valuation[currency]
      );
      setCoinVolume24h(data.market_data.total_volume[currency]);
      setCoinVolumeOverMarketCap(
        data.market_data.total_volume[currency] /
          data.market_data.market_cap[currency]
      );
      setCoinCirculatingSupply(data.market_data.circulating_supply);
      setCoinTotalSupply(data.market_data.total_supply);
      setNum1(
        (data.market_data.total_volume[currency] /
          data.market_data.market_cap[currency]) *
          100
      );
      setNum2(
        100 -
          (data.market_data.total_volume[currency] /
            data.market_data.market_cap[currency]) *
            100
      );
      setCoinDescription(data.description["en"]);
      setCoinBlockChainSite1(data.links.blockchain_site[0]);
      setCoinBlockChainSite2(data.links.blockchain_site[1]);
      setCoinBlockChainSite3(data.links.blockchain_site[2]);
    } catch (err) {
      console.log(err);
    }
  };

  const getCoinChartData = async (coinId) => {
    try {
      const base = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=`;
      const search = `&days=${days}&interval=${interval}`;
      const fullURL = `${base}${currency}${search}`;
      const { data } = await axios(fullURL);
      setCoinPricesHourly(data.prices.map((el) => el[1]));
      setChartHours(data.prices.map((el) => el[0]));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getThemeColors = () => {
    const theme = localStorage.getItem("theme");
    return JSON.parse(theme);
  };

  useEffect(() => {
    getCoinData(props.match.params.coinId);
    getCoinChartData(props.match.params.coinId);
  }, [currency]);

  localStorage.setItem("coinCurrentPrice", coinCurrentPrice);
  const theme = getThemeColors();
  const chartHoursFormatted = chartHours
    .map((el) => formatDate(el))
    .slice(0, 24);
  const coinPricesData = {
    labels: chartHoursFormatted,
    datasets: [
      {
        label: `${props.match.params.coinId} Price`,
        data: coinPricesHourly.slice(0, 24),
        borderColor:
          coinPricesHourly[0] < coinPricesHourly[24]
            ? theme.btcPriceChartBorderColorGain
            : coinPricesHourly[0] > coinPricesHourly[24]
            ? theme.btcPriceChartBorderColorLoss
            : theme.btcPriceChartBorderColorGain,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          coinPricesHourly[0] < coinPricesHourly[24]
            ? gradient.addColorStop(0, theme.btcPriceChartGradienColorGain)
            : coinPricesHourly[0] > coinPricesHourly[24]
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
              <CoinImage src={coinImgSrc} />
            </CoinBoxInner>
            <h2>
              {coinName} ({coinSymbol.toUpperCase()})
            </h2>
          </CoinBox>
          <CoinUrlBox>
            <UrlIcon />
            <HomePageDiv>{coinHomePage}</HomePageDiv>
          </CoinUrlBox>
        </CoinBoxContainer>
        <PriceBoxContainer>
          <h2 style={{ fontSize: "44px" }}>{formatNumber(coinCurrentPrice)}</h2>
          <PriceCHangePercentageDiv>
            <PriceChangePercentage
              color={priceChangePercentage24h > 0 ? "#00fc2a" : "#fe1040"}
            >
              {" "}
              {priceChangePercentage24h.toFixed(2)}%
            </PriceChangePercentage>
            {priceChangePercentage24h > 0 ? <ArrowUp /> : <ArrowDown />}
          </PriceCHangePercentageDiv>
          <SquareStackIcon />
          <AllTimeContainer>
            <ArrowSvgDiv>
              <ArrowUp />
            </ArrowSvgDiv>
            <AllTimeDiv>
              <AllTimeP>
                All Time High: <span> {formatNumber(coinAth)}</span>
              </AllTimeP>
              <p>{coinAthDate.slice(0, 10)}</p>
            </AllTimeDiv>
          </AllTimeContainer>
          <AllTimeContainer>
            <ArrowSvgDiv>
              <ArrowDown />
            </ArrowSvgDiv>
            <AllTimeDiv>
              <AllTimeP>
                All Time Low: <span> {formatNumber(coinAtl)}</span>
              </AllTimeP>
              <p>{coinAtlDate.slice(0, 10)}</p>
            </AllTimeDiv>
          </AllTimeContainer>
        </PriceBoxContainer>
        <CoinDataBoxContainer>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Market Cap: <span>{formatNumber(coinMarketCap)}</span>{" "}
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Fully Diluted Valuation:{" "}
              <span>{formatNumber(coinFullyDillutedValuation)}</span>
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Trading Volume 24h: <span>{formatNumber(coinVolume24h)}</span>
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Volume / Market:{" "}
              <span>{coinVolumeOverMarketCap.toFixed(2)}%</span>
            </p>
          </CoinDataRow>
          <CoinDataRow>
            <SmallRectangleBlue>
              <PlusSmallSvg />
            </SmallRectangleBlue>
            <p>
              Circulating Supply:{" "}
              <span>
                {coinCirculatingSupply} {coinSymbol.toUpperCase()}
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
                {coinTotalSupply} {coinSymbol.toUpperCase()}
              </span>
            </p>
          </CoinDataRow>
          <CoinDataRow style={{ width: "50%", marginLeft: "-180px" }}>
            <CoinsPercentageBar
              num1={num1.toFixed(2) + "%"}
              num2={num2.toFixed(2) + "%"}
              width={num1.toFixed(2) + "%"}
              color1={color1}
              color2={color2}
              background1={color1}
              background2={color2}
            />
          </CoinDataRow>
        </CoinDataBoxContainer>
      </SummaryWrapper>
      <HeaderDiv>
        <h2>Description</h2>
      </HeaderDiv>
      <DescriptionWrapper>
        <SquareStackIcon />
        <CoinDescriptionDiv>{coinDescription}</CoinDescriptionDiv>
      </DescriptionWrapper>
      <CoinUrlsRow>
        <UrlDiv>
          <UrlIcon />
          <UrlAddressDiv>{coinBlockChainSite1}</UrlAddressDiv>
          <CopyIcon />
        </UrlDiv>
        <UrlDiv>
          <UrlIcon />
          <UrlAddressDiv>{coinBlockChainSite2}</UrlAddressDiv>
          <CopyIcon />
        </UrlDiv>
        <UrlDiv>
          <UrlIcon />
          <UrlAddressDiv>{coinBlockChainSite3}</UrlAddressDiv>
          <CopyIcon />
        </UrlDiv>
      </CoinUrlsRow>
      <CurrencyConversionRow>
        <CurrencyConverter coinSymbol={coinSymbol.toUpperCase()} />
      </CurrencyConversionRow>
      <BigChartWrapper>
        <LineChart data={coinPricesData} />
      </BigChartWrapper>
    </CoinPageWrapper>
  );
};
