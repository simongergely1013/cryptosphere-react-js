import NavBar from "./components/NavBar";
import Coins from "./pages/Coins";
import Coin from "./pages/Coins/Coin";
import Portfolio from "./pages/Coins/Portfolio";
import WatchList from "./pages/Coins/Watchlist";
import ScrollToTopButton from "./components/ScrollToTopButton";
import React, { useState } from "react";
import { useLocalState } from "./hooks";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  GlobalStyle,
  MainWrapper,
  darkMode,
  lightMode,
  BottomRow,
} from "./App.styles";
import { CurrencyContext } from "./contexts/CurrencyContext";

export const App = () => {
  const [currency, setCurrency] = useLocalState("currency", "usd");
  const [isCoinsPage, setIsCoinsPage] = useState(true);
  const [isCoinPage, setIsCoinPage] = useState(false);
  const [isPortfolioPage, setIsPortfolioPage] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const handleThemeColor = () => {
    setDarkMode(!isDarkMode);
  };
  const setColorTheme = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  const handleCurrency = (value) => {
    setCurrency(value);
  };
  isDarkMode ? setColorTheme(darkMode) : setColorTheme(lightMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <CurrencyContext.Provider value={{ currency, handleCurrency }}>
        <Router>
          <GlobalStyle />
          <MainWrapper>
            <NavBar
              onClick={handleThemeColor}
              onChange={handleCurrency}
              isCoins={isCoinsPage}
              isCoin={isCoinPage}
              isPortfolio={isPortfolioPage}
            />
            <Switch>
              <Route exact path="/" component={Coins} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/coin/:coinId" component={Coin} />
              <Route exact path="/watchlist" component={WatchList} />
            </Switch>
            <BottomRow>
              <ScrollToTopButton />
            </BottomRow>
          </MainWrapper>
        </Router>
      </CurrencyContext.Provider>
    </ThemeProvider>
  );
};
