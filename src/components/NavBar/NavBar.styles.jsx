import React from "react";
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
  margin: 10px 10px 10px 25px;
  z-index: 10;
  display: flex;
  align-items: center;
`;
export const CurrencySelect = styled.select`
  width: 130px;
  height: 43px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: 20px;
  padding-left: 20px;
  border-radius: 10px;
  z-index: 10;
`;
export const Option = styled.option`
  padding-left: 15px;
`;
export const BlackCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  z-index: 15;
  margin-left: 8px;
  background: #191b1f;
`;
const CurrencySvg = styled.svg`
  width: 20px;
  fill: #00ff5f;
`;
export const DollarSvg = () => {
  return (
    <CurrencySvg
      viewBox="0 -8 72 72"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="cls-1"
        d="M50.17,28.91a20.68,20.68,0,0,0-7.51-3.19L40,25.15v-11a.33.33,0,0,0,.23.12.1.1,0,0,1,.11.11,6,6,0,0,1,3.53,5.47h8.77c-.16-4.56-1.86-8-5.13-10.48A17.65,17.65,0,0,0,40,6.15V0H32V5.92a15.94,15.94,0,0,0-9,3.64,12.55,12.55,0,0,0-4.33,9.79q0,6.38,4.44,9.45C24.67,29.93,27.63,31,32,32V43.82a7.21,7.21,0,0,1-3.64-2.16,8.05,8.05,0,0,1-1.71-4.33H18a12.77,12.77,0,0,0,4.89,10.59A19,19,0,0,0,32,51.45V56H40V51.56a18.06,18.06,0,0,0,9.45-3.76,12.74,12.74,0,0,0,4.55-10Q54,32,50.17,28.91ZM32,23.22a14.32,14.32,0,0,1-2.73-1,3.76,3.76,0,0,1-2.17-3.53,4.44,4.44,0,0,1,2.17-4A11.93,11.93,0,0,1,32,13.54Zm9.45,20.37a5.81,5.81,0,0,1-1.37.35V33.8a16.67,16.67,0,0,1,3.3,1.37,3.89,3.89,0,0,1,1.94,3.42Q45.28,42.22,41.41,43.59Z"
      />
    </CurrencySvg>
  );
};
export const SterlingSvg = () => {
  return (
    <CurrencySvg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
      xml:space="preserve"
    >
      <path
        d="M192.9,447.7c42.6-21.3,53.3-53.3,53.3-106.6v-42.6h106.6v-64H246.2v-85.3c0-62.5,32.1-95.9,85.3-95.9
	c25.8,0,40.8,18.6,64,32V10.7C370.6,1.1,361.7,0,331.5,0c-44.8,0-88.5,13.6-116.7,40.8c-28.1,27.1-32.5,66.1-32.5,108.5v85.3H97v64
	h85.3v64c0,42.6-42.6,85.3-85.3,85.3l0.3,64.3H438l0.1-64.3H192.9z"
      />
    </CurrencySvg>
  );
};
export const EuroSvg = () => {
  return (
    <CurrencySvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 20.75H12.85C11.1283 20.7123 9.45596 20.1674 8.04255 19.1835C6.62915 18.1996 5.5375 16.8205 4.90437 15.219C4.27123 13.6175 4.12477 11.8648 4.48331 10.1804C4.84186 8.49597 5.68948 6.95484 6.91999 5.75002C7.73905 4.94129 8.71314 4.30649 9.78374 3.88374C10.8543 3.461 11.9994 3.25905 13.15 3.29002C15.3968 3.32202 17.5452 4.21718 19.15 5.79002C19.2904 5.93064 19.3693 6.12127 19.3693 6.32002C19.3693 6.51877 19.2904 6.70939 19.15 6.85002C19.0094 6.99047 18.8187 7.06936 18.62 7.06936C18.4212 7.06936 18.2306 6.99047 18.09 6.85002C17.078 5.85423 15.7963 5.17702 14.4034 4.90218C13.0105 4.62734 11.5675 4.76695 10.2532 5.30371C8.9388 5.84048 7.81065 6.75085 7.00834 7.92217C6.20602 9.0935 5.76476 10.4744 5.73915 11.8939C5.71353 13.3134 6.1047 14.7093 6.86423 15.9088C7.62376 17.1083 8.71833 18.0588 10.0125 18.6426C11.3066 19.2264 12.7436 19.418 14.1455 19.1936C15.5474 18.9692 16.8527 18.3386 17.9 17.38L18.12 17.17C18.2669 17.03 18.4621 16.9519 18.665 16.9519C18.8679 16.9519 19.0631 17.03 19.21 17.17C19.2799 17.2318 19.3367 17.3069 19.3771 17.391C19.4176 17.475 19.4408 17.5663 19.4455 17.6595C19.4501 17.7527 19.4361 17.8458 19.4043 17.9335C19.3724 18.0212 19.3234 18.1016 19.26 18.17L19.21 18.22L18.92 18.5C17.2984 19.9654 15.1856 20.7684 13 20.75Z" />
      <path d="M17 11.25H3C2.80109 11.25 2.61032 11.171 2.46967 11.0303C2.32902 10.8897 2.25 10.6989 2.25 10.5C2.25 10.3011 2.32902 10.1103 2.46967 9.96967C2.61032 9.82902 2.80109 9.75 3 9.75H17C17.1989 9.75 17.3897 9.82902 17.5303 9.96967C17.671 10.1103 17.75 10.3011 17.75 10.5C17.75 10.6989 17.671 10.8897 17.5303 11.0303C17.3897 11.171 17.1989 11.25 17 11.25Z" />
      <path d="M15.5 14.25H3C2.80109 14.25 2.61032 14.171 2.46967 14.0303C2.32902 13.8897 2.25 13.6989 2.25 13.5C2.25 13.3011 2.32902 13.1103 2.46967 12.9697C2.61032 12.829 2.80109 12.75 3 12.75H15.5C15.6989 12.75 15.8897 12.829 16.0303 12.9697C16.171 13.1103 16.25 13.3011 16.25 13.5C16.25 13.6989 16.171 13.8897 16.0303 14.0303C15.8897 14.171 15.6989 14.25 15.5 14.25Z" />
    </CurrencySvg>
  );
};
export const BitcoinSvg = () => {
  return (
    <CurrencySvg
      viewBox="-4.5 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>bitcoin [#1186]</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-182.000000, -2917.000000)"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M127.935517,2777 L127.935517,2770 L135.9263,2769.988 C140.180567,2770.252 140.105082,2776.963 135.677586,2776.963 L127.935517,2777 Z M127.935517,2768 L127.935517,2761 L135.677586,2761 C140.105082,2761 140.180567,2767.711 135.9263,2767.975 L127.935517,2768 Z M138.925384,2768.982 C142.52351,2766.256 141.441556,2759 135.677586,2759 L135.677586,2757 L133.742069,2757 L133.742069,2759 L131.806552,2759 L131.806552,2757 L129.871034,2757 L129.871034,2759 L126,2759 L126,2779 L129.871034,2779 L129.871034,2781 L131.806552,2781 L131.806552,2779 L133.742069,2779 L133.742069,2781 L135.677586,2781 L135.677586,2779 L135.677586,2778.963 C141.441556,2778.963 142.52351,2771.707 138.925384,2768.982 L138.925384,2768.982 Z"
              id="bitcoin-[#1186]"
            ></path>
          </g>
        </g>
      </g>
    </CurrencySvg>
  );
};
export const EthereumSvg = () => {
  return (
    <CurrencySvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 1C12.3038 1 12.5911 1.13809 12.7809 1.3753L20.7809 11.3753C21.073 11.7405 21.073 12.2594 20.7809 12.6247L12.7809 22.6247C12.5911 22.8619 12.3038 23 12 23C11.6962 23 11.4089 22.8619 11.2191 22.6247L3.21913 12.6247C2.92696 12.2594 2.92696 11.7405 3.21913 11.3753L11.2191 1.3753C11.4089 1.13809 11.6962 1 12 1ZM6.65787 12.0713L12 14.4084L17.3421 12.0713L12 10.068L6.65787 12.0713ZM16.6864 14.5412L12.4008 16.4161C12.1453 16.5279 11.8547 16.5279 11.5992 16.4161L7.3136 14.5412L12 20.3992L16.6864 14.5412ZM16.95 9.78819L12.3511 8.06363C12.1247 7.97874 11.8753 7.97874 11.6489 8.06363L7.05005 9.78819L12 3.60078L16.95 9.78819Z"
      />
    </CurrencySvg>
  );
};
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
  width: 28px;
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
  margin-bottom: 20px;
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
  padding: 10px;
`;
export const StyledListSubNav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  // border: 1px solid red;
`;
export const StyledListItemSubNav = styled.li`
  list-style-type: none;
  cursor: pointer;
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
  cursor: pointer;
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
export const BitcoinSvgSubNav = () => {
  return (
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
  );
};
export const EthereumLogoSubNav = styled.svg`
  width: 16px;
  margin-right: 8px;
`;
export const EthereumSvgSubNav = () => {
  return (
    <EthereumLogoSubNav
      viewBox="420.1 80.7 1079.8 1758.6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m959.8 80.7-539.7 895.6 539.7-245.3z" fill="#8a92b2" />
      <path
        d="m959.8 731-539.7 245.3 539.7 319.1zm539.8 245.3-539.8-895.6v650.3z"
        fill="#62688f"
      />
      <path d="m959.8 1295.4 539.8-319.1-539.8-245.3z" fill="#454a75" />
      <path d="m420.1 1078.7 539.7 760.6v-441.7z" fill="#8a92b2" />
      <path d="m959.8 1397.6v441.7l540.1-760.6z" fill="#62688f" />
    </EthereumLogoSubNav>
  );
};
export const ProgressBar = styled.div`
  width: 60px;
  height: 14px;
  border-radius: 20px;
  margin-left: 8px;
  background: #2172e5;
`;
export const TotalVolumeProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.percent.totalVolumePercent}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
  margin-left: 2px;
`;
const ProgressBarHover = styled.div`
  width: 100%;
  height: 14px;
  border-radius: 20px;
  background: #2172e5;
`;
const TotalVolumeProgressBarHover = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
  margin-left: 2px;
`;
export const BtcDominanceProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.percent.btcDominancePercent}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
`;
export const EthDominanceProgeressBar = styled.div`
  height: 100%;
  width: ${(props) => props.percent.ethDominancePercent}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
`;
const BtcDominanceProgressBarHover = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
`;
const EthDominanceProgressBarHover = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
`;
export const HoverDivsContainer = styled.div`
  display: flex;
`;
const HoverDiv1 = styled.div`
  width: 400px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-left: 250px;
  margin-top: -15px;
`;
const HoverDiv2 = styled.div`
  width: 440px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: -15px;
  margin-left: 400px;
`;
const HoverDiv3 = styled.div`
  width: 350px;
  padding: 10px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: -15px;
  margin-left: 550px;
`;
const HoverDiv4 = styled.div`
  width: 350px;
  padding: 10px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: -15px;
  margin-left: 700px;
`;
const HoverDiv5 = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: -15px;
  margin-left: 850px;
`;
const HoverDiv6 = styled.div`
  align-items: center;
  padding: 10px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: -15px;
  margin-left: 950px;
`;
const HoverDiv7 = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: -15px;
  margin-left: 1000px;
`;
const HoverDiv8 = styled.div`
  align-items: center;
  padding: 10px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: -15px;
  margin-left: 1050px;
`;
const StyledSpan = styled.span`
  font-weigth: bold;
  color: ${(props) => props.color};
  margin-left: 8px;
`;
const HoverDivInner = styled.div`
  display: flex;
  align-items: center;
`;
export const CoinsHoverDiv = ({ coins }) => {
  return (
    <HoverDiv1>
      <p>
        Number of existing coins in the markget:{" "}
        <span style={{ color: "#00FC2A", fontWeight: "bold" }}>{coins}</span>
      </p>
    </HoverDiv1>
  );
};
export const ExchangesHoverDiv = ({ exchanges }) => {
  return (
    <HoverDiv2>
      <p>
        Number of existing exchange markets to trade at:{" "}
        <span style={{ color: "gold", fontWeight: "bold" }}>{exchanges}</span>
      </p>
    </HoverDiv2>
  );
};
export const TotalMarketCapHoverDiv = ({
  totalMarketCap,
  changePercentage,
  color,
}) => {
  return (
    <HoverDiv3>
      <HoverDivInner>
        <BulletPoint />
        Total Market Cap:{" "}
        <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
          {totalMarketCap}
        </span>
      </HoverDivInner>
      <HoverDivInner>
        <BulletPoint />
        24h Change: <StyledSpan color={color}>{changePercentage}%</StyledSpan>
        {changePercentage > 0 ? <TrendingUp /> : <TrendingDown />}
      </HoverDivInner>
    </HoverDiv3>
  );
};
export const VolumeVsMarketCapDiv = ({
  volume,
  totalMarketCap,
  totalVolumePercent,
}) => {
  return (
    <HoverDiv4>
      <p>24h Volume vs Total Market Cap</p>
      <HoverDivInner>
        <BulletPoint />
        24h Volume:{" "}
        <span style={{ fontWeight: "bold", marginLeft: "8px" }}>{volume}</span>
      </HoverDivInner>
      <HoverDivInner>
        <BulletPoint />
        Total Market Cap:
        <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
          {totalMarketCap}
        </span>
      </HoverDivInner>
      <ProgressBarHover>
        <TotalVolumeProgressBarHover width={totalVolumePercent} />
      </ProgressBarHover>
      <p style={{ fontWeight: "bold" }}>{totalVolumePercent}%</p>
    </HoverDiv4>
  );
};
export const BtcDominanceHoverDiv1 = ({ btcDominance }) => {
  return (
    <HoverDiv5>
      <BulletPoint />
      <p>
        Bitcoin(BTC) Dominance:{" "}
        <span style={{ fontWeight: "bold" }}>{btcDominance}%</span>
      </p>
    </HoverDiv5>
  );
};
export const BtcDominanceHoverDiv2 = ({
  btcMarketCap,
  totalMarketCap,
  btcDominancePercent,
}) => {
  return (
    <HoverDiv6>
      BTC Market Cap vs Total Market Cap
      <HoverDivInner>
        <BulletPoint />
        <p>
          BTC Market Cap:{" "}
          <span style={{ fontWeight: "bold" }}>{btcMarketCap}</span>
        </p>
      </HoverDivInner>
      <HoverDivInner>
        <BulletPoint />
        <p>
          Total Market Cap:{" "}
          <span style={{ fontWeight: "bold" }}>{totalMarketCap}</span>
        </p>
      </HoverDivInner>
      <ProgressBarHover>
        <BtcDominanceProgressBarHover width={btcDominancePercent} />
      </ProgressBarHover>
      <p style={{ fontWeight: "bold" }}>{btcDominancePercent}%</p>
    </HoverDiv6>
  );
};
export const EthDominanceHoverDiv1 = ({ ethDominance }) => {
  return (
    <HoverDiv7>
      <BulletPoint />
      <p>
        Ethereum(ETH) Dominance:{" "}
        <span style={{ fontWeight: "bold" }}>{ethDominance}%</span>
      </p>
    </HoverDiv7>
  );
};
export const EthDominanceHoverDiv2 = ({
  ethMarketCap,
  totalMarketCap,
  ethDominancePercent,
}) => {
  return (
    <HoverDiv8>
      ETH Market Cap vs Total Market Cap
      <HoverDivInner>
        <BulletPoint />
        <p>
          ETC Market Cap:{" "}
          <span style={{ fontWeight: "bold" }}>{ethMarketCap}</span>
        </p>
      </HoverDivInner>
      <HoverDivInner>
        <BulletPoint />
        <p>
          Total Market Cap:{" "}
          <span style={{ fontWeight: "bold" }}>{totalMarketCap}</span>
        </p>
      </HoverDivInner>
      <ProgressBarHover>
        <EthDominanceProgressBarHover width={ethDominancePercent} />
      </ProgressBarHover>
      <p style={{ fontWeight: "bold" }}>{ethDominancePercent}%</p>
    </HoverDiv8>
  );
};
