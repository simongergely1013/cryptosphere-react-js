import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import Coins from "./pages/Coins";
import Portfolio from "./pages/Coins/Portfolio";
import Coin from "./pages/Coins/Coin";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
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
  }
  ::placeholder {
    color: ${(props) => props.theme.text};
  }

  :-ms-input-placeholder {
    color: ${(props) => props.theme.text};
  }

  ::-ms-input-placeholder {
    color: ${(props) => props.theme.text};
  }
  `;
const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 1720px;
  height: 100%;
  background: ${(props) => props.theme.background};
`;
const darkMode = {
  main: "#191B1F",
  text: "#FAFBFB",
  background: "#424242",
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
const lightMode = {
  main: "white",
  text: "#191B1F",
  background: "#E0E0E0",
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

export const CurrencyContext = React.createContext();
export default class App extends React.Component {
  state = {
    darkMode: true,
    coins: true,
    portfolio: false,
    isLoading: false,
    currency: "",
  };
  handleThemeColor = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  setColorTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  handleCurrency = (currency) => {
    this.setState({ currency });
  };

  componentDidMount = () => {
    this.setState({ currency: "usd" });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currency !== prevState.currency) {
      localStorage.setItem("currency", this.state.currency);
    }
  }

  render() {
    if (this.state.darkMode) {
      this.setColorTheme(darkMode);
    } else {
      this.setColorTheme(lightMode);
    }
    return (
      <ThemeProvider theme={this.state.darkMode ? darkMode : lightMode}>
        <Router>
          <GlobalStyle />
          <MainWrapper>
            <NavBar
              onClick={this.handleThemeColor}
              onChange={this.handleCurrency}
            />
            <Switch>
              <Route exact path="/" component={Coins} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/coin/:id" component={Coin} />
            </Switch>
          </MainWrapper>
        </Router>
      </ThemeProvider>
    );
  }
}
