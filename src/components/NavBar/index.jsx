import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { formatNumber } from "../../utilities";
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
  BitcoinSvgSubNav,
  EthereumSvgSubNav,
  ProgressBar,
  TotalVolumeProgressBar,
  BtcDominanceProgressBar,
  EthDominanceProgeressBar,
} from "./NavBar.styles";
import { CurrencyContext } from "../../contexts/CurrencyContext";

export const NavBar = (props) => {
  const { currency } = useContext(CurrencyContext);
  const [isLoading, setLoading] = useState(false);
  const [btcDominance, setBtcDominance] = useState(0);
  const [coins, setCoins] = useState(0);
  const [ethDominance, setEthDominance] = useState(0);
  const [marketCapChange24h, setMarketCapChange24h] = useState(0);
  const [markets, setMarkets] = useState(0);
  const [totalMarketCap, setTotalMarketCap] = useState("");
  const [totalVolume, setTotalVolume] = useState("");
  const [totalVolumePercentage, setTotalVolumePercentage] = useState("");

  const getGlobalData = async () => {
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      setBtcDominance(Math.round(data.data.market_cap_percentage.btc));
      setEthDominance(Math.round(data.data.market_cap_percentage.eth));
      setCoins(data.data.active_cryptocurrencies);
      setMarkets(data.data.markets);
      setMarketCapChange24h(data.data.market_cap_change_percentage_24h_usd);
      setTotalMarketCap(data.data.total_market_cap[currency] / 1000000000000);
      setTotalVolume(data.data.total_volume[currency] / 1000000000);
      setTotalVolumePercentage(
        (
          (data.data.total_volume[currency] /
            data.data.total_market_cap[currency]) *
          100
        ).toFixed(2)
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleCurrnecy = (e) => {
    const newCurrency = e.target.value;
    props.onChange(newCurrency);
  };
  useEffect(() => {
    getGlobalData();
  }, [currency]);

  const totalMarketCapFormatted = formatNumber(totalMarketCap);
  const totalVolumeFormatted = formatNumber(totalVolume);
  const progressBarsData = {
    totalVolumePercent: totalVolumePercentage,
    btcDominancePercent: btcDominance,
    ethDominancePercent: ethDominance,
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
            {currency === "usd" ? (
              <DollarSvg />
            ) : currency === "gbp" ? (
              <SterlingSvg />
            ) : currency === "eur" ? (
              <EuroSvg />
            ) : currency === "btc" ? (
              <BitcoinSvg />
            ) : (
              <EthereumSvg />
            )}
          </BlackCircle>
          <CurrencySelect onChange={handleCurrnecy}>
            <Option value="usd">USD</Option>
            <Option value="gbp">GBP</Option>
            <Option value="eur">EUR</Option>
            <Option value="btc">BTC</Option>
            <Option value="eth">ETH</Option>
          </CurrencySelect>
        </CurrencyDiv>
        <ThemeSwitch onClick={props.onClick} />
      </StyledNav>
      <SubNavContainer>
        <SubNavEmptyDiv></SubNavEmptyDiv>
        <SubNavDivCenter>
          <ListDiv>
            <StyledListSubNav>
              <StyledListItemSubNav>Coins: {coins}</StyledListItemSubNav>
              <StyledListItemSubNav>Exchanges: {markets}</StyledListItemSubNav>
              <ListItemWithProgress>
                <BulletPoint />
                {totalMarketCapFormatted}T{" "}
                {marketCapChange24h > 0 ? <TrendingUp /> : <TrendingDown />}{" "}
              </ListItemWithProgress>
              <ListItemWithProgress>
                <BulletPoint />
                {totalVolumeFormatted}B{" "}
                <ProgressBar>
                  <TotalVolumeProgressBar percent={progressBarsData} />
                </ProgressBar>
              </ListItemWithProgress>
              <ListItemWithProgress>
                <BitcoinSvgSubNav />
                {progressBarsData.btcDominancePercent}% BTC{" "}
                <ProgressBar>
                  <BtcDominanceProgressBar percent={progressBarsData} />
                </ProgressBar>
              </ListItemWithProgress>
              <ListItemWithProgress>
                <EthereumSvgSubNav />
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
};
