import React from "react";
import axios from "axios";
import {
  CoinsPageWrapper,
  HeaderDiv,
  CoinsTableContainer,
  CoinsTable,
  CoinLogo,
  ChartsWrapper,
  ChartContainer,
} from "./Coins.styles";
import { formatNumber, formatDate } from "../../utilities";
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
          borderColor: "#e76f51",
          backgroundColor: "#edede9",
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
          backgroundColor: "#edede9",
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
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>1h%</th>
              <th>24h%</th>
              <th>7d%</th>
              <th>24h Volume/Market Cap</th>
              <th>Circulating/Total Supply</th>
              <th>Last 7d</th>
            </tr>
            {coinsData.map((obj, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <CoinLogo src={obj.image} />
                    {obj.name} ({obj.symbol.toUpperCase()})
                  </td>
                  <td>{formatNumber(currency, obj.current_price)}</td>
                  <td>
                    {obj.price_change_percentage_1h_in_currency.toFixed(2)}%
                  </td>
                  <td>{obj.price_change_percentage_24h.toFixed(2)}%</td>
                  <td>
                    {obj.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </td>
                  <td>
                    {formatNumber(currency, obj.total_volume)} /{" "}
                    {formatNumber(currency, obj.market_cap)}
                  </td>
                  <td>
                    {obj.circulating_supply} / {obj.total_supply}
                  </td>
                  <td>Last 7d</td>
                </tr>
              );
            })}
          </CoinsTable>
        </CoinsTableContainer>
      </CoinsPageWrapper>
    );
  }
}
