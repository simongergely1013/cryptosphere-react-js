import React from "react";
import axios from "axios";
import {
  CoinsPageWrapper,
  HeaderDiv,
  CoinsTableContainer,
  CoinsTable,
  CoinLogo,
} from "./Coins.styles";
import { formatNumber } from "../../utilities";
export default class Coins extends React.Component {
  state = {
    isLoading: false,
    coinsData: [],
    currency: "usd",
  };

  getCoinsData = async () => {
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );
      this.setState({ coinsData: data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.getCoinsData();
  };

  render() {
    const coinsData = this.state.coinsData;
    const currency = this.state.currency;
    return (
      <CoinsPageWrapper>
        <HeaderDiv>
          <h3>Your overview</h3>
        </HeaderDiv>
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
                  <td>{index}</td>
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
