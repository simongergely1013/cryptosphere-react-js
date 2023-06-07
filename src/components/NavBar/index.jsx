import React from "react";
import axios from "axios";
import styled from "styled-components";
import {
  StyledNav,
  StyledLink,
  StyledList,
  ListItemCoins,
  ListItemPortfolio,
  Search,
  CurrencyDiv,
  CurrencySelect,
  Option,
  BlackCircle,
  DollarSvg,
  SterlingSvg,
  EuroSvg,
  BitcoinSvg,
  EthereumSvg,
  ThemeSwitch,
  SubNavContainer,
  SubNavEmptyDiv,
  SubNavDivCenter,
  ListDiv,
  StyledListSubNav,
  BulletPoint,
  StyledListItemSubNav,
  ListItemWithProgress,
  TrendingDown,
  TrendingUp,
  BitcoinLogoSubNav,
  EthereumLogoSubNav,
} from "./NavBar.styles";
import { formatNumber } from "../../utilities";

const ProgressBar = styled.div`
  width: 60px;
  height: 14px;
  border-radius: 20px;
  margin-left: 8px;
  background: #2172e5;
`;
const TotalVolumeProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.percent.totalVolumePercent}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
  margin-left: 2px;
`;

const BtcDominanceProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.percent.btcDominancePercent}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
`;
const EthDominanceProgeressBar = styled.div`
  height: 100%;
  width: ${(props) => props.percent.ethDominancePercent}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
`;

export default class NavBar extends React.Component {
  state = {
    isLoading: false,
    currency: "usd",
  };
  getGlobalData = async () => {
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      this.setState({
        coins: data.data.active_cryptocurrencies,
        markets: data.data.markets,
        totalMarketCap: (
          data.data.total_market_cap[this.state.currency] / 1000000000000
        ).toFixed(2),
        totalVolume: (
          data.data.total_volume[this.state.currency] / 1000000000
        ).toFixed(2),
        totalVolumePercentage: (
          (data.data.total_volume[this.state.currency] /
            data.data.total_market_cap[this.state.currency]) *
          100
        ).toFixed(2),
        marketCapChange24h: data.data.market_cap_change_percentage_24h_usd,
        btcDominance: Math.round(data.data.market_cap_percentage.btc),
        ethDominance: Math.round(data.data.market_cap_percentage.eth),
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleCurrnecy = (e) => {
    this.setState({ currency: e.target.value });
    const currency = e.target.value;
    this.props.onChange(currency);
  };
  componentDidMount() {
    this.getGlobalData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currency !== this.state.currency) {
      this.getGlobalData();
    }
  }
  render() {
    const currency = this.state.currency;
    const totalMarketCap = formatNumber(currency, this.state.totalMarketCap);
    const totalVolume = formatNumber(currency, this.state.totalVolume);
    const progressBarsData = {
      totalVolumePercent: this.state.totalVolumePercentage,
      btcDominancePercent: this.state.btcDominance,
      ethDominancePercent: this.state.ethDominance,
    };

    return (
      <>
        <StyledNav>
          <StyledList>
            <ListItemCoins>
              <StyledLink to="/">Coins</StyledLink>
            </ListItemCoins>
            <ListItemPortfolio>
              <StyledLink to="/portfolio">Portfolio</StyledLink>
            </ListItemPortfolio>
          </StyledList>
          <form>
            <Search />
          </form>
          <CurrencyDiv>
            <BlackCircle>
              {this.state.currency === "usd" ? (
                <DollarSvg />
              ) : this.state.currency === "gbp" ? (
                <SterlingSvg />
              ) : this.state.currency === "eur" ? (
                <EuroSvg />
              ) : this.state.currency === "btc" ? (
                <BitcoinSvg />
              ) : (
                <EthereumSvg />
              )}
            </BlackCircle>
            <CurrencySelect onChange={this.handleCurrnecy}>
              <Option value="usd">USD</Option>
              <Option value="gbp">GBP</Option>
              <Option value="eur">EUR</Option>
              <Option value="btc">BTC</Option>
              <Option value="eth">ETH</Option>
            </CurrencySelect>
          </CurrencyDiv>
          <ThemeSwitch onClick={this.props.onClick} />
        </StyledNav>
        <SubNavContainer>
          <SubNavEmptyDiv></SubNavEmptyDiv>
          <SubNavDivCenter>
            <ListDiv>
              <StyledListSubNav>
                <StyledListItemSubNav>
                  Coins: {this.state.coins}
                </StyledListItemSubNav>
                <StyledListItemSubNav>
                  Exchanges: {this.state.markets}
                </StyledListItemSubNav>
                <ListItemWithProgress>
                  <BulletPoint />
                  {totalMarketCap}T{" "}
                  {this.state.marketCapChange24h > 0 ? (
                    <TrendingUp />
                  ) : (
                    <TrendingDown />
                  )}{" "}
                </ListItemWithProgress>
                <ListItemWithProgress>
                  <BulletPoint />
                  {totalVolume}B{" "}
                  <ProgressBar>
                    <TotalVolumeProgressBar percent={progressBarsData} />
                  </ProgressBar>
                </ListItemWithProgress>
                <ListItemWithProgress>
                  <BitcoinLogoSubNav
                    enable-background="new 0 0 2499.6 2500"
                    viewBox="0 0 2499.6 2500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m2499.6 1250c0 690.2-559.6 1249.8-1250.1 1249.9-690 0-1249.6-559.7-1249.5-1250-.2-690.3 559.4-1249.9 1249.7-1249.9s1249.9 559.7 1249.9 1250z"
                      fill="#eab300"
                    />
                    <g fill="#fff">
                      <path d="m1741.5 943.8c-16.1-167.4-160.6-223.5-343.2-239.5v-232.3h-141.3v226.1c-37.1 0-75.1.7-112.8 1.5v-227.6h-141.3l-.1 232.1c-30.6.6-60.7 1.2-90 1.2v-.7l-194.9-.1v151s104.4-2 102.6-.1c57.3 0 75.9 33.2 81.3 61.9v264.6c4 0 9.1.2 14.9 1h-14.9l-.1 370.7c-2.5 18-13.1 46.7-53.1 46.8 1.8 1.6-102.7 0-102.7 0l-28.1 168.8h184c34.2 0 67.9.6 100.9.8l.1 234.9h141.2v-232.4c38.7.8 76.2 1.1 112.9 1.1l-.1 231.3h141.3v-234.4c237.6-13.6 404.1-73.5 424.7-296.7 16.7-179.7-67.8-260-202.7-292.4 82.1-41.6 133.4-115.1 121.4-237.6zm-197.8 502.2c0 175.5-300.5 155.6-396.4 155.6v-311.3c95.9.2 396.4-27.3 396.4 155.7zm-65.8-439.1c0 159.7-250.8 141-330.6 141.1v-282.2c79.9 0 330.7-25.4 330.6 141.1z" />
                      <path d="m902 1175.7h21v15.5h-21z" />
                    </g>
                  </BitcoinLogoSubNav>
                  {progressBarsData.btcDominancePercent}% BTC{" "}
                  <ProgressBar>
                    <BtcDominanceProgressBar percent={progressBarsData} />
                  </ProgressBar>
                </ListItemWithProgress>
                <ListItemWithProgress>
                  <EthereumLogoSubNav
                    viewBox="420.1 80.7 1079.8 1758.6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m959.8 80.7-539.7 895.6 539.7-245.3z"
                      fill="#8a92b2"
                    />
                    <path
                      d="m959.8 731-539.7 245.3 539.7 319.1zm539.8 245.3-539.8-895.6v650.3z"
                      fill="#62688f"
                    />
                    <path
                      d="m959.8 1295.4 539.8-319.1-539.8-245.3z"
                      fill="#454a75"
                    />
                    <path
                      d="m420.1 1078.7 539.7 760.6v-441.7z"
                      fill="#8a92b2"
                    />
                    <path d="m959.8 1397.6v441.7l540.1-760.6z" fill="#62688f" />
                  </EthereumLogoSubNav>
                  {progressBarsData.ethDominancePercent}% ETH{" "}
                  <ProgressBar>
                    <EthDominanceProgeressBar percent={progressBarsData} />
                  </ProgressBar>
                </ListItemWithProgress>
              </StyledListSubNav>
            </ListDiv>
          </SubNavDivCenter>
          <SubNavEmptyDiv></SubNavEmptyDiv>
        </SubNavContainer>
      </>
    );
  }
}
