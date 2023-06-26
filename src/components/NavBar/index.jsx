import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { formatNumber } from "../../utilities";
import {
  StyledNav,
  StyledLink,
  StyledList,
  ListItemCoins,
  ListItemPortfolio,
  NavInnerContainer,
  SearchWrapper,
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
  HoverDivsContainer,
  CoinsHoverDiv,
  ExchangesHoverDiv,
  TotalMarketCapHoverDiv,
  VolumeVsMarketCapDiv,
  BtcDominanceHoverDiv1,
  BtcDominanceHoverDiv2,
  EthDominanceHoverDiv1,
  EthDominanceHoverDiv2,
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
  const [totalMarketCapLong, setTotalMarketCapLong] = useState("");
  const [totalVolume, setTotalVolume] = useState("");
  const [totalVolumeLong, setTotalVolumeLong] = useState("");
  const [totalVolumePercentage, setTotalVolumePercentage] = useState("");
  const [btcMarketCap, setBtcMarketCap] = useState("");
  const [ethMarketCap, setEthMarketCap] = useState("");
  const [isCoinsHovered, setCoinsHovered] = useState(false);
  const [isExchangesHovered, setExchangesHovered] = useState(false);
  const [isTotalMarketCapHovered, setTotalMarketCapHovered] = useState(false);
  const [isTotalVolumeHovered, setTotalVolumeHovered] = useState(false);
  const [isBtcDominanceHovered, setBtcDominanceHovered] = useState(false);
  const [isBtcDominanceProgressBarHovered, setBtcDominanceProgressBarHovered] =
    useState(false);
  const [isEthDominanceHovered, setEthDominanceHovered] = useState(false);
  const [isEthDominanceProgressBarHovered, setEthDominanceProgressBarHovered] =
    useState(false);

  const getGlobalData = async () => {
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      setBtcDominance(Math.round(data.data.market_cap_percentage.btc));
      setEthDominance(Math.round(data.data.market_cap_percentage.eth));
      setCoins(data.data.active_cryptocurrencies);
      setMarkets(data.data.markets);
      setMarketCapChange24h(data.data.market_cap_change_percentage_24h_usd);
      setTotalMarketCap(data.data.total_market_cap[currency] / 1000000000000);
      setTotalMarketCapLong(data.data.total_market_cap[currency]);
      setBtcMarketCap(data.data.total_market_cap["btc"]);
      setEthMarketCap(data.data.total_market_cap["eth"]);
      setTotalVolume(data.data.total_volume[currency] / 1000000000);
      setTotalVolumeLong(data.data.total_volume[currency]);
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
  const totalMarketCapLongFormatted = formatNumber(totalMarketCapLong);
  const btcMarketCapFormatted = formatNumber(btcMarketCap);
  const ethMarketCapFormatted = formatNumber(ethMarketCap);
  const totalVolumeFormatted = formatNumber(totalVolume);
  const totalVolumeLongFormatted = formatNumber(totalVolumeLong);
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
        <NavInnerContainer>
          <SearchWrapper>
            <form>
              <Search />
            </form>
          </SearchWrapper>

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
        </NavInnerContainer>
      </StyledNav>
      <SubNavContainer>
        <SubNavEmptyDiv></SubNavEmptyDiv>
        <SubNavDivCenter>
          <ListDiv>
            <StyledListSubNav>
              <StyledListItemSubNav
                onMouseEnter={() => setCoinsHovered(true)}
                onMouseLeave={() => setCoinsHovered(false)}
              >
                Coins: {coins}
              </StyledListItemSubNav>
              <StyledListItemSubNav
                onMouseEnter={() => setExchangesHovered(true)}
                onMouseLeave={() => setExchangesHovered(false)}
              >
                Exchanges: {markets}
              </StyledListItemSubNav>
              <ListItemWithProgress
                onMouseEnter={() => setTotalMarketCapHovered(true)}
                onMouseLeave={() => setTotalMarketCapHovered(false)}
              >
                <BulletPoint />
                {totalMarketCapFormatted}T{" "}
                {marketCapChange24h > 0 ? <TrendingUp /> : <TrendingDown />}{" "}
              </ListItemWithProgress>
              <ListItemWithProgress
                onMouseEnter={() => setTotalVolumeHovered(true)}
                onMouseLeave={() => setTotalVolumeHovered(false)}
              >
                <BulletPoint />
                {totalVolumeFormatted}B{" "}
                <ProgressBar>
                  <TotalVolumeProgressBar percent={progressBarsData} />
                </ProgressBar>
              </ListItemWithProgress>
              <ListItemWithProgress>
                <BitcoinSvgSubNav />
                <div
                  onMouseEnter={() => setBtcDominanceHovered(true)}
                  onMouseLeave={() => setBtcDominanceHovered(false)}
                >
                  {progressBarsData.btcDominancePercent}% BTC{" "}
                </div>

                <ProgressBar
                  onMouseEnter={() => setBtcDominanceProgressBarHovered(true)}
                  onMouseLeave={() => setBtcDominanceProgressBarHovered(false)}
                >
                  <BtcDominanceProgressBar percent={progressBarsData} />
                </ProgressBar>
              </ListItemWithProgress>
              <ListItemWithProgress>
                <EthereumSvgSubNav />
                <div
                  onMouseEnter={() => setEthDominanceHovered(true)}
                  onMouseLeave={() => setEthDominanceHovered(false)}
                >
                  {progressBarsData.ethDominancePercent}% ETH{" "}
                </div>
                <ProgressBar
                  onMouseEnter={() => setEthDominanceProgressBarHovered(true)}
                  onMouseLeave={() => setEthDominanceProgressBarHovered(false)}
                >
                  <EthDominanceProgeressBar percent={progressBarsData} />
                </ProgressBar>
              </ListItemWithProgress>
            </StyledListSubNav>
          </ListDiv>
        </SubNavDivCenter>
        <SubNavEmptyDiv></SubNavEmptyDiv>
      </SubNavContainer>
      <HoverDivsContainer>
        {isCoinsHovered && <CoinsHoverDiv coins={coins} />}
        {isExchangesHovered && <ExchangesHoverDiv exchanges={markets} />}
        {isTotalMarketCapHovered && (
          <TotalMarketCapHoverDiv
            totalMarketCap={totalMarketCapLongFormatted}
            changePercentage={marketCapChange24h.toFixed(2)}
            color={marketCapChange24h > 0 ? "#00FC2A" : "#FE1040"}
          />
        )}
        {isTotalVolumeHovered && (
          <VolumeVsMarketCapDiv
            volume={totalVolumeLongFormatted}
            totalMarketCap={totalMarketCapLongFormatted}
            totalVolumePercent={progressBarsData.totalVolumePercent}
          />
        )}
        {isBtcDominanceHovered && (
          <BtcDominanceHoverDiv1
            btcDominance={progressBarsData.btcDominancePercent}
          />
        )}
        {isBtcDominanceProgressBarHovered && (
          <BtcDominanceHoverDiv2
            btcMarketCap={btcMarketCapFormatted}
            totalMarketCap={totalMarketCapLongFormatted}
            btcDominancePercent={progressBarsData.btcDominancePercent}
          />
        )}

        {isEthDominanceHovered && (
          <EthDominanceHoverDiv1
            ethDominance={progressBarsData.ethDominancePercent}
          />
        )}
        {isEthDominanceProgressBarHovered && (
          <EthDominanceHoverDiv2
            ethMarketCap={ethMarketCapFormatted}
            totalMarketCap={totalMarketCapLongFormatted}
            ethDominancePercent={progressBarsData.ethDominancePercent}
          />
        )}
      </HoverDivsContainer>
    </>
  );
};
