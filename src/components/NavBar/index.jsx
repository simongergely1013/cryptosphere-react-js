import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { formatNumber } from "../../utilities";
import { NavBarCoinsLink } from "../NavBarCoinsLink";
import { NavBarPortfolioLink } from "../NavBarPortfolioLink";
import { NavBarSearch } from "../NavBarSearch";
import { NavBarCurrencySelector } from "../NavBarCurrencySelector";
import { ThemeSwitch } from "../ThemeSwitch";
import { BlackCircleCurrency } from "../BlackCircleCurrency";
import { SubNavListItem1 } from "../SubNavListItem1";
import { SubNavListItem2 } from "../SubNavListItem2";
import { SubNavListItem3 } from "../SubNavListItem3";
import { SubNavVolumeVsMarketCap } from "../SubNavVolumeVsMarketCap";
import { SubNavBtcDominance } from "../SubNavBtcDominance";
import { SubNavEthDominance } from "../SubNavEthDominance";
import {
  StyledNav,
  LinksList,
  NavBarInnerContainer,
  CurrencyDiv,
  SubNavContainer,
  SubNavEmptyDiv,
  SubNavDivCenter,
  ListDiv,
  StyledListSubNav,
} from "./NavBar.styles";

export const NavBar = ({ onClick, onChange, isCoins, isPortfolio }) => {
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
  const handleCurrency = (e) => {
    const newCurrency = e.target.value;
    onChange(newCurrency);
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
        <LinksList>
          <NavBarCoinsLink isCoins={isCoins} />
          <NavBarPortfolioLink isPortfolio={isPortfolio} />
        </LinksList>
        <NavBarInnerContainer>
          <NavBarSearch />
          <CurrencyDiv>
            <BlackCircleCurrency />
            <NavBarCurrencySelector onChange={handleCurrency} />
          </CurrencyDiv>
          <ThemeSwitch onClick={onClick} />
        </NavBarInnerContainer>
      </StyledNav>
      <SubNavContainer>
        <SubNavEmptyDiv></SubNavEmptyDiv>
        <SubNavDivCenter>
          <ListDiv>
            <StyledListSubNav>
              <SubNavListItem1 text={"Coins:  "} data={coins} coins={coins} />
              <SubNavListItem2
                text={"Exchanges:  "}
                data={markets}
                exchanges={markets}
              />
              <SubNavListItem3
                marketCap={totalMarketCapFormatted}
                text={"T"}
                marketCapChange24h={marketCapChange24h.toFixed(2)}
                color={marketCapChange24h > 0 ? "#00FC2A" : "#FE1040"}
              />
              <SubNavVolumeVsMarketCap
                totalVolume={totalVolumeFormatted}
                text={"B"}
                percent={progressBarsData.totalVolumePercent}
                totalMarketCap={totalMarketCapLongFormatted}
              />
              <SubNavBtcDominance
                dominancePercent={progressBarsData.btcDominancePercent}
                percent={progressBarsData}
                btcMarketCap={btcMarketCapFormatted}
                totalMarketCap={totalMarketCapLongFormatted}
                btcDominancePercent={progressBarsData.btcDominancePercent}
              />
              <SubNavEthDominance
                dominancePercent={progressBarsData.ethDominancePercent}
                percent={progressBarsData}
                ethMarketCap={ethMarketCapFormatted}
                totalMarketCap={totalMarketCapLongFormatted}
                ethDominancePercent={progressBarsData.ethDominancePercent}
              />
            </StyledListSubNav>
          </ListDiv>
        </SubNavDivCenter>
        <SubNavEmptyDiv></SubNavEmptyDiv>
      </SubNavContainer>
    </>
  );
};
