import React from "react";
import axios from "axios";
import CoinsPercentageBar from "../../components/CoinsTablePercentageBar";
import {
  CoinsPageWrapper,
  HeaderDiv,
  CoinsTableContainer,
  CoinsTable,
  TableHeader,
  TableRow,
  TableData,
  CoinName,
  CoinLogo,
  PercentageChangeDiv,
  ChartsWrapper,
  ChartContainer,
  ArrowUp,
  ArrowDown,
} from "./Coins.styles";
import { formatNumber, formatDate, getRandomColor } from "../../utilities";
import { LineChart } from "../../components/LineChart";
import { BarChart } from "../../components/BarChart";

export default class Coins extends React.Component {
  state = {
    isLoading: false,
    coinsData: [],
    chartHours: [],
    btcPricesHourly: [],
    btcVolumesHourly: [],
    currency: "usd",
  };

  getCoinsData = async () => {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );
      this.setState({ coinsData: data });
    } catch (error) {
      console.log(error);
    }
  };

  getChartsData = async () => {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly"
      );
      this.setState({
        btcPricesHourly: data.prices.map((el) => el[1]),
        btcVolumesHourly: data.total_volumes.map((el) => el[1]),
        chartHours: data.prices.map((el) => el[0]),
      });
    } catch (error) {
      console.log(error);
    }
  };
  getOneWeekHours = () => {
    let hours = [];
    for (let i = 0; i < 84; i++) {
      hours.push(" ");
    }
    return hours;
  };

  componentDidMount = () => {
    this.getCoinsData();
    this.getChartsData();
  };
  render() {
    const coinsData = this.state.coinsData;
    const currency = this.state.currency;
    const chartHours = this.state.chartHours
      .map((el) => formatDate(el))
      .slice(0, 24);
    const btcPricesData = {
      labels: chartHours,
      datasets: [
        {
          label: "BTC Price",
          data: this.state.btcPricesHourly.slice(0, 24),
          borderColor: "#00FF5F",
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 350);
            gradient.addColorStop(0, "rgba(0, 255, 95, .5)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
            return gradient;
          },
          pointRadius: 0,
          borderWidth: 3,
          fill: true,
        },
      ],
    };
    const btcVolumesData = {
      labels: chartHours,
      datasets: [
        {
          label: "BTC Volume",
          data: this.state.btcVolumesHourly.slice(0, 24),
          borderColor: "#e76f51",
          backgroundColor: "#2172e5",
        },
      ],
    };
    return (
      <CoinsPageWrapper>
        <HeaderDiv>
          <h3>Your overview</h3>
        </HeaderDiv>
        <ChartsWrapper>
          <ChartContainer>
            <LineChart data={btcPricesData} />
          </ChartContainer>
          <ChartContainer>
            <BarChart data={btcVolumesData} />
          </ChartContainer>
        </ChartsWrapper>
        <HeaderDiv>
          <h3>Your overview</h3>
        </HeaderDiv>
        <CoinsTableContainer>
          <CoinsTable>
            <TableRow>
              <TableHeader>#</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>1h%</TableHeader>
              <TableHeader>24h%</TableHeader>
              <TableHeader>7d%</TableHeader>
              <TableHeader>24h Volume/Market Cap</TableHeader>
              <TableHeader>Circulating/Total Supply</TableHeader>
              <TableHeader>Last 7d</TableHeader>
            </TableRow>
            {coinsData.map((obj, index) => {
              const percentageChange1h =
                obj.price_change_percentage_1h_in_currency.toFixed(2);
              const percentageChange24h =
                obj.price_change_percentage_24h.toFixed(2);
              const percentageChange7d =
                obj.price_change_percentage_7d_in_currency.toFixed(2);
              const percentageVolume24h = (
                (obj.total_volume / obj.market_cap) *
                100
              ).toFixed(2);
              const percentageCirculating = (
                (obj.circulating_supply / obj.total_supply) *
                100
              ).toFixed(2);
              let circulatingSupply = Math.round(obj.circulating_supply);
              switch (circulatingSupply.toString().length) {
                case 7:
                case 8:
                case 9:
                  circulatingSupply =
                    (circulatingSupply / 1000000).toFixed(2).toString() + "M";
                  break;
                case 10:
                case 11:
                case 12:
                  circulatingSupply =
                    (circulatingSupply / 1000000000).toFixed(2).toString() +
                    "B";
                  break;
                default:
                  circulatingSupply =
                    (circulatingSupply / 1000).toFixed(2).toString() + "K";
                  break;
              }
              let totalSupply = Math.round(obj.total_supply);
              switch (totalSupply.toString().length) {
                case 7:
                case 8:
                case 9:
                  totalSupply =
                    (totalSupply / 1000000).toFixed(2).toString() + "M";
                  break;
                case 10:
                case 11:
                case 12:
                  totalSupply =
                    (totalSupply / 1000000000).toFixed(2).toString() + "B";
                  break;
                default:
                  totalSupply =
                    (totalSupply / 1000).toFixed(2).toString() + "K";
                  break;
              }
              let totalVolume = obj.total_volume;
              switch (totalVolume.toString().length) {
                case 7:
                case 8:
                case 9:
                  totalVolume =
                    formatNumber(currency, (totalVolume / 1000000).toFixed(2)) +
                    "M";
                  break;
                case 10:
                case 11:
                case 12:
                  totalVolume =
                    formatNumber(
                      currency,
                      (totalVolume / 1000000000).toFixed(2)
                    ) + "B";
                  break;
                default:
                  totalVolume =
                    formatNumber(currency, (totalVolume / 1000).toFixed(2)) +
                    "K";
                  break;
              }
              let marketCap = obj.market_cap;
              switch (marketCap.toString().length) {
                case 7:
                case 8:
                case 9:
                  marketCap =
                    formatNumber(currency, (marketCap / 1000000).toFixed(2)) +
                    "M";
                  break;
                case 10:
                case 11:
                case 12:
                  marketCap =
                    formatNumber(
                      currency,
                      (marketCap / 1000000000).toFixed(2)
                    ) + "B";
                  break;
                default:
                  marketCap =
                    formatNumber(currency, (marketCap / 1000).toFixed(2)) + "K";
                  break;
              }
              let color1 = getRandomColor();
              let color2 = getRandomColor();
              if (color1 === color2) {
                color2 = getRandomColor();
              }
              const coinPricesData = {
                labels: this.getOneWeekHours(),
                datasets: [
                  {
                    label: "",
                    data: obj.sparkline_in_7d.price.slice(84, 168),
                    borderColor:
                      obj.sparkline_in_7d.price[0] <
                      obj.sparkline_in_7d.price[
                        obj.sparkline_in_7d.price.length - 1
                      ]
                        ? "#00FF5F"
                        : "red",
                    pointRadius: 0,
                    borderWidth: 3,
                    // fill: true,
                  },
                ],
              };
              return (
                <TableRow>
                  <TableData>{index + 1}</TableData>
                  <CoinName>
                    <CoinLogo src={obj.image} />
                    {obj.name} ({obj.symbol.toUpperCase()})
                  </CoinName>
                  <TableData>
                    {formatNumber(currency, obj.current_price)}
                  </TableData>
                  <TableData
                    style={{
                      color: percentageChange1h > 0 ? "#00FC2A" : "#FE1040",
                    }}
                  >
                    <PercentageChangeDiv>
                      {percentageChange1h > 0 ? <ArrowUp /> : <ArrowDown />}
                      {percentageChange1h}%
                    </PercentageChangeDiv>
                  </TableData>
                  <TableData
                    style={{
                      color: percentageChange24h > 0 ? "#00FC2A" : "#FE1040",
                    }}
                  >
                    <PercentageChangeDiv>
                      {percentageChange24h > 0 ? <ArrowUp /> : <ArrowDown />}
                      {percentageChange24h}%
                    </PercentageChangeDiv>
                  </TableData>
                  <TableData
                    style={{
                      color: percentageChange7d > 0 ? "#00FC2A" : "#FE1040",
                    }}
                  >
                    <PercentageChangeDiv>
                      {percentageChange7d > 0 ? <ArrowUp /> : <ArrowDown />}
                      {percentageChange7d}%
                    </PercentageChangeDiv>
                  </TableData>
                  <TableData>
                    <CoinsPercentageBar
                      num1={totalVolume}
                      num2={marketCap}
                      width={percentageVolume24h.toString() + "%"}
                      color1={color1}
                      color2={color2}
                      background1={color1}
                      background2={color2}
                    />
                  </TableData>
                  <TableData>
                    <CoinsPercentageBar
                      num1={circulatingSupply}
                      num2={totalSupply}
                      width={percentageCirculating.toString() + "%"}
                      color1={color1}
                      color2={color2}
                      background1={color1}
                      background2={color2}
                    />
                  </TableData>
                  <TableData>
                    <ChartsWrapper style={{ width: "80%" }}>
                      <LineChart data={coinPricesData} />
                    </ChartsWrapper>
                  </TableData>
                </TableRow>
              );
            })}
          </CoinsTable>
        </CoinsTableContainer>
      </CoinsPageWrapper>
    );
  }
}
