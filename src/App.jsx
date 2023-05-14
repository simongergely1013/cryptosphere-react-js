import React from "react";
import Coins from "./pages/Coins";
import Portfolio from "./newpages/Portfolio";
import Coin from "./pages/Coins/Coin";
import styled, { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MainWrapper, MainContainer, NavBar, Search, CurrencySelector, ThemeSwitch, MacroIndexes } from "./components";

const CoinsLink = styled(Link)`
  text-decoration: none;
`;
const PortfolioLink = styled(Link)`
  text-decoration: none;
`;

export default function App() {
  return (
    <ThemeProvider>
    <Router>
      <MainWrapper>
        <MainContainer>
        <NavBar>
         <ul>
            <li>
              <CoinsLink to="/">Coins</CoinsLink>
            </li>
            <li>
              <PortfolioLink to="/portfolio">Portfolio</PortfolioLink>
            </li>
          </ul>
        <Search />
        <CurrencySelector/>
        <ThemeSwitch/>
        </NavBar>
        <MacroIndexes/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Coins} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/coin/:id" component={Coin} />
        </Switch>
      </MainContainer>
      </MainWrapper>
    </Router>
    </ThemeProvider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
