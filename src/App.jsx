import React from "react";
import NavBar from "./components/NavBar";
import Coins from "./pages/Coins";
import Portfolio from "./pages/Coins/Portfolio";
import Coin from "./pages/Coins/Coin";
import styled, { createGlobalStyle,ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { SubNavBar } from "./components/NavBar/NavBar.styles";

const GlobalStyle = createGlobalStyle`
  * {
    // border: 1px solid red;
    margin: 0;
    padding: 0; 
  }
  body{
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background: ${(props) => props.theme.main};
    color: ${(props) => props.theme.text};
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
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.background};
   `;
  const darkMode = {
    main: "#191B1F",
    text: "#FAFBFB",
    background: "#424242",
    moonIconFill: "white"
  };
  const lightMode = {
    main: "white",
    text: "#191B1F",
    background: "#E0E0E0",
    moonIconFill: "black"
  }
export default class App extends React.Component {
  state = {
    darkMode: true,
    coins: true,
    portfolio: false
  }
handleThemeColor = () => {
    this.setState({darkMode: !this.state.darkMode})
}
  render(){
  return (
  <ThemeProvider theme={this.state.darkMode ? darkMode : lightMode}>
    <Router>
      <GlobalStyle/>
      <MainWrapper>
        <NavBar onClick={this.handleThemeColor}/>
        <SubNavBar/>
        <Switch>
          <Route exact path="/" component={Coins} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/coin/:id" component={Coin} />
        </Switch>
        </MainWrapper>
    </Router>
   </ThemeProvider>
  )}
};