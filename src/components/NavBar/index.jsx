import React, { useEffect, useContext } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getNavBarData } from "../../store/navbar/actions";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { getThemeColors } from "../../utilities/getThemeColors";
import { formatNumber } from "../../utilities/formatNumber";
import { getAppLoading } from "../../utilities/getAppLoading";
import { getAppError } from "../../utilities/getAppError";
import { NavBarCoinsLink } from "../NavBarCoinsLink";
import { NavBarPortfolioLink } from "../NavBarPortfolioLink";
import { NavBarWatchlistLink } from "../NavBarWatchlistLink";
import { NavBarSearch } from "../NavBarSearch";
import { NavBarCurrencySelector } from "../NavBarCurrencySelector";
import { ThemeSwitch } from "../ThemeSwitch";
import { BlackCircleCurrency } from "../BlackCircleCurrency";
import { SubNavListItem } from "../SubNavListItem";
import { SubNavTotalMarketCap } from "../SubNavTotalMarketCap";
import { SubNavVolumeVsMarketCap } from "../SubNavVolumeVsMarketCap";
import {
  BitcoinSvgSubNav,
  EthereumSvgSubNav,
} from "../SubNavDominance/SubNavDominance.styles";
import { SubNavDominance } from "../SubNavDominance";
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
import {
  setCoinsPage,
  setPortfolioPage,
  setWatchlistPage,
} from "../../store/app/actions";

const NavBar = ({ onClick, onChange }) => {
  const { currency } = useContext(CurrencyContext);
  const { navBarData } = useAppSelector((state) => state.navBar);
  const { navBackground } = getThemeColors();
  const { isCoinsPage, isPortfolioPage, isWatchlistPage } = useAppSelector(
    (state) => state.app
  );
  const isAppLoading = useAppSelector((state) => getAppLoading(state));
  const isAppError = useAppSelector((state) => getAppError(state));
  const dispatch = useAppDispatch();

  const handleCurrency = (e) => {
    const newCurrency = e.target.value;
    onChange(newCurrency);
  };
  useEffect(() => {
    dispatch(getNavBarData(currency));
  }, [currency]);

  const totalMarketCapFormatted = formatNumber(navBarData["totalMarketCap"]);
  const totalMarketCapLongFormatted = formatNumber(
    navBarData["totalMarketCapLong"]
  );
  const btcMarketCapFormatted = formatNumber(navBarData["btcMarketCap"]);
  const ethMarketCapFormatted = formatNumber(navBarData["ethMarketCap"]);
  const totalVolumeFormatted = formatNumber(navBarData["totalVolume"]);
  const progressBarsData = {
    totalVolumePercent: navBarData["totalVolumePercentage"],
    btcDominancePercent: navBarData["btcDominance"],
    ethDominancePercent: navBarData["ethDominance"],
  };
  return (
    <>
      <StyledNav>
        <LinksList>
          <NavBarCoinsLink
            onClick={() => dispatch(setCoinsPage())}
            background={isCoinsPage ? navBackground : ""}
          />
          <NavBarPortfolioLink
            onClick={() => dispatch(setPortfolioPage())}
            background={isPortfolioPage ? navBackground : ""}
          />
          <NavBarWatchlistLink
            onClick={() => dispatch(setWatchlistPage())}
            background={isWatchlistPage ? navBackground : ""}
          />
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
              <SubNavListItem
                title={"Coins"}
                data1={navBarData["coins"]}
                data2={navBarData["coins"]}
                text={"Number of existing coins in the market"}
                isLoading={isAppLoading}
                isError={isAppError}
              />
              <SubNavListItem
                title={"Exchanges: "}
                data1={navBarData["markets"]}
                data2={navBarData["markets"]}
                text={"Number of existing exchange markets to trade at"}
                isLoading={isAppLoading}
                isError={isAppError}
              />
              <SubNavTotalMarketCap
                marketCap={totalMarketCapFormatted}
                text={"T"}
                marketCapChange24h={navBarData["marketCapChange24h"].toFixed(2)}
                color={
                  navBarData["marketCapChange24h"] > 0 ? "#00FC2A" : "#FE1040"
                }
                isLoading={isAppLoading}
                isError={isAppError}
              />
              <SubNavVolumeVsMarketCap
                totalVolume={totalVolumeFormatted}
                text={"B"}
                percent={progressBarsData.totalVolumePercent}
                totalMarketCap={totalMarketCapLongFormatted}
                isLoading={isAppLoading}
                isError={isAppError}
              />
              <SubNavDominance
                coinNameShort={"BTC"}
                coinNameLong={"Bitcoin"}
                svg={<BitcoinSvgSubNav />}
                text={"Market Cap"}
                dominancePercent={progressBarsData.btcDominancePercent}
                percent={progressBarsData}
                marketCap={btcMarketCapFormatted}
                totalMarketCap={totalMarketCapLongFormatted}
                isLoading={isAppLoading}
                isError={isAppError}
              />
              <SubNavDominance
                coinNameShort={"ETH"}
                coinNameLong={"Ethereum"}
                svg={<EthereumSvgSubNav />}
                text={"Market Cap"}
                dominancePercent={progressBarsData.ethDominancePercent}
                percent={progressBarsData}
                marketCap={ethMarketCapFormatted}
                totalMarketCap={totalMarketCapLongFormatted}
                isLoading={isAppLoading}
                isError={isAppError}
              />
            </StyledListSubNav>
          </ListDiv>
        </SubNavDivCenter>
        <SubNavEmptyDiv></SubNavEmptyDiv>
      </SubNavContainer>
    </>
  );
};

export default NavBar;
