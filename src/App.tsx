import React from "react";
import NavBar from "./components/NavBar";
import Coins from "./pages/Coins";
import Coin from "./pages/Coins/Coin";
import Portfolio from "./pages/Coins/Portfolio";
import WatchList from "./pages/Coins/Watchlist";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useLocalState } from "./hooks";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  GlobalStyle,
  MainWrapper,
  darkMode,
  lightMode,
  BottomRow,
} from "./App.styles";
import { CurrencyContext } from "./contexts/CurrencyContext";
import { setThemeColor } from "./store/app/actions";

export const App = () => {
  const [currency, setCurrency] = useLocalState("currency", "usd");
  const { isDarkMode } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const setColorTheme = (theme: {}) => {
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  const handleThemeChange = () => {
    dispatch(setThemeColor())
  }

  const handleCurrency = (value: string) => {
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
              onClick={handleThemeChange}
              onChange={handleCurrency}
            />
            <Routes>
              <Route path="/" element={Coins} />
              <Route path="/portfolio" element={Portfolio} />
              <Route path="/coin/:coinId" element={Coin} />
              <Route path="/watchlist" element={WatchList} />
            </Routes>
            <BottomRow>
              <ScrollToTopButton />
            </BottomRow>
          </MainWrapper>
        </Router>
      </CurrencyContext.Provider>
    </ThemeProvider>
  );
};
