import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 97px;
  padding-left: 20px;
  padding-right: 20px;
  background: ${(props) => props.theme.main};
  position: relative;
  z-index: 5;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  font-size: 20px;
  z-index: 10;
`;
export const StyledList = styled.ul`
  display: flex;
  z-index: 10;
`;
export const ListItemCoins = styled.li`
  list-style-type: none;
  width: 167px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  z-index: 10;
  background: {
    this.props.state.coins: "blue" ? "green";
  }
`;
export const ListItemPortfolio = styled.li`
  list-style-type: none;
  width: 167px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  z-index: 10;
`;
const SearchDiv = styled.div`
  margin: 10px 20px 10px 600px;
  border: none;
  z-index: 10;
`;
const SearchInput = styled.input`
  width: 410px;
  height: 53px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding-left: 80px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  z-index: 10;
`;
const StyledSearchSvg = styled.svg`
  width: 30px;
  position: absolute;
  z-index: 10;
  margin-left: 20px;
  margin-top: 12px;
  z-index: 10;
`;
const SearchSvg = () => {
  return (
    <StyledSearchSvg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </StyledSearchSvg>
  );
};
export const Search = (props) => {
  return (
    <SearchDiv>
      <SearchSvg />
      <SearchInput placeholder="Search..." />
    </SearchDiv>
  );
};
export const CurrencyDiv = styled.div`
  margin: 10px 10px 10px 10px;
  z-index: 10;
`;
export const CurrencySelect = styled.select`
  width: 100px;
  height: 43px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
  z-index: 10;
`;
const ThemeSwitchDiv = styled.div`
  width: 43px;
  height: 43px;
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 10px;
  border-radius: 10px;
  z-index: 10;
`;
const StyledMoonSvg = styled.svg`
  width: 25px;
  fill: ${(props) => props.theme.moonIconFill};
  border: none;
  z-index: 10;
`;
export const ThemeSwitch = (props) => {
  return (
    <ThemeSwitchDiv onClick={props.onClick}>
      <StyledMoonSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </StyledMoonSvg>
    </ThemeSwitchDiv>
  );
};
export const SubNavContainer = styled.div`
  width: 100%;
  height: 43px;
  display: flex;
`;
export const SubNavEmptyDiv = styled.div`
  width: 25%;
  height: 100%;
  background: ${(props) => props.theme.background};
`;
export const SubNavDivCenter = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.main};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
export const ListDiv = styled.div`
  width: 100%;
`;
export const StyledListSubNav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
`;
export const StyledListItemSubNav = styled.li`
  list-style-type: none;
`;
export const BulletPoint = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.theme.bulletPointBackground};
  margin-right: 10px;
`;
export const ListItemWithProgress = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: disc;
`;
export const ArrowTrendingDown = styled.svg`
  width: 25px;
  color: red;
  margin-left: 5px;
`;
export const ArrowTrendingUp = styled.svg`
  width: 25px;
  color: green;
  margin-left: 5px;
`;

export const TrendingDown = () => {
  return (
    <ArrowTrendingDown
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
      />
    </ArrowTrendingDown>
  );
};

export const TrendingUp = () => {
  return (
    <ArrowTrendingUp
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
      />
    </ArrowTrendingUp>
  );
};
export const BitcoinLogoSubNav = styled.svg`
  width: 20px;
  margin-right: 8px;
`;
export const EthereumLogoSubNav = styled.svg`
  width: 16px;
  margin-right: 8px;
`;
