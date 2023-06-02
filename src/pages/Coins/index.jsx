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
  CoinNameInnerDiv,
  CoinLogo,
  PercentageChangeDiv,
  ChartsWrapper,
  TopChartHeader,
  ChartContainer,
  ArrowUp,
  ArrowDown,
  SmallChartWrapper,
} from "./Coins.styles";
import {
  formatNumber,
  formatDate,
  getRandomColor,
  formatSupply,
  formatVolumeMarketCap,
  getDate,
} from "../../utilities";
import { LineChart, SmallLineChart } from "../../components/LineChart";
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
      this.setState({
        coinsData: data,
        btcCurrentPrice: data[0].current_price,
        btcCurrentVolume: data[0].total_volume,
        day: getDate().toString().slice(8, 10),
        month: getDate().toString().slice(4, 7),
        year: getDate().toString().slice(11, 15),
      });
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
  getOneWeekDays = () => {
    let days = [];
    for (let i = 0; i < 8; i++) {
      days.push("");
    }
    return days;
  };

  componentDidMount = () => {
    this.getCoinsData();
    this.getChartsData();
  };
  render() {
    const btcCurrentVolume = parseInt(this.state.btcCurrentVolume);
    const day = this.state.day;
    const month = this.state.month;
    const year = this.state.year;
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
          backgroundColor: "#2172E5",
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
            <TopChartHeader>
              <h3>BTC</h3>
              <h2>{formatNumber(currency, this.state.btcCurrentPrice)}</h2>
              <h3>
                {day} {month},{year}
              </h3>
            </TopChartHeader>
            <LineChart data={btcPricesData} />
          </ChartContainer>
          <ChartContainer>
            <TopChartHeader>
              <h3>Volume 24h</h3>
              <h2>{formatVolumeMarketCap(btcCurrentVolume, currency)}</h2>
              <h3>
                {day} {month},{year}
              </h3>
            </TopChartHeader>
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
              <TableHeader style={{ textAlign: "center" }}>Last 7d</TableHeader>
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
              const circulatingSupply = formatSupply(obj.circulating_supply);
              const totalSupply = formatSupply(obj.total_supply);
              const totalVolume = formatVolumeMarketCap(
                obj.total_volume,
                currency
              );
              const marketCap = formatVolumeMarketCap(obj.market_cap, currency);
              let color1 = getRandomColor();
              let color2 = getRandomColor();
              if (color1 === color2) {
                color2 = getRandomColor();
              }
              const sparklineData = [
                obj.sparkline_in_7d.price[0],
                obj.sparkline_in_7d.price[24],
                obj.sparkline_in_7d.price[48],
                obj.sparkline_in_7d.price[72],
                obj.sparkline_in_7d.price[96],
                obj.sparkline_in_7d.price[120],
                obj.sparkline_in_7d.price[144],
                obj.sparkline_in_7d.price[167],
              ];
              const coinPricesData = {
                labels: this.getOneWeekDays(),
                datasets: [
                  {
                    label: "",
                    data: sparklineData,
                    borderColor:
                      sparklineData[0] < sparklineData[7] ? "#00FF5F" : "red",
                    pointRadius: 0,
                    borderWidth: 3,
                  },
                ],
              };
              return (
                <TableRow>
                  <TableData>{index + 1}</TableData>
                  <CoinName>
                    <CoinNameInnerDiv>
                      <CoinLogo src={obj.image} />
                      {obj.name} ({obj.symbol.toUpperCase()})
                    </CoinNameInnerDiv>
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
                    <SmallChartWrapper>
                      <SmallLineChart data={coinPricesData} />
                    </SmallChartWrapper>
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
