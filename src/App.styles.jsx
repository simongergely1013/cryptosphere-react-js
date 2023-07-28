import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    // border: 1px solid red;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  body{
    width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background: ${(props) => props.theme.main};
    color: ${(props) => props.theme.text};
    place-items: start;
    transition: all 0.2s ease-in-out;
  }
  ::placeholder {
    color: ${(props) => props.theme.text};
    transition: all 0.2s ease-in-out;
  }

  :-ms-input-placeholder {
    color: ${(props) => props.theme.text};
    transition: all 0.2s ease-in-out;
  }

  ::-ms-input-placeholder {
    color: ${(props) => props.theme.text};
    transition: all 0.2s ease-in-out;
  }
  `;
export const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100vw;
  max-width: 1720px;
  height: 100%;
  background: ${(props) => props.theme.background};
  transition: all 0.2s ease-in-out;
`;
export const darkMode = {
  main: "#191B1F",
  text: "#FAFBFB",
  background: "#212121",
  navBackground: "#2C2F36",
  moonIconFill: "white",
  bulletPointBackground: "white",
  progressBarsBackground: "white",
  btcPriceChartBorderColorGain: "#00FF5F",
  btcPriceChartGradienColorGain: "rgba(0, 255, 95, .5)",
  btcPriceChartBorderColorLoss: "#FE1040",
  btcPriceChartGradienColorLoss: "#ad2843",
  btcVolumeChartBackgroundColor: "#2172E5",
  coinsPercentageBarColor: "#ECEFF1",
  darkMode: true,
};
export const lightMode = {
  main: "white",
  text: "#191B1F",
  background: "#E0E0E0",
  navBackground: "#E0E0E0",
  moonIconFill: "black",
  bulletPointBackground: "black",
  progressBarsBackground: "black",
  btcPriceChartBorderColorGain: "#2172E5",
  btcPriceChartGradienColorGain: "RGBA(37,80,234,0.56 )",
  btcPriceChartBorderColorLoss: "#FE1040",
  btcPriceChartGradienColorLoss: "#ad2843",
  btcVolumeChartBackgroundColor: "#1AD761",
  coinsPercentageBarColor: "#546E7A",
  darkMode: false,
};
export const hoverColor = "#BDBDBD";
