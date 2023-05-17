import React from "react";
import {StyledNav, StyledLink, StyledList, ListItemCoins, ListItemPortfolio, Search, CurrencySelector, ThemeSwitch, SubNavBar} from "./NavBar.styles"

export default class NavBar extends React.Component {
    render(){
        return(
          <StyledNav>
            <StyledList>
            <ListItemCoins>
              <StyledLink to="/">Coins</StyledLink>
            </ListItemCoins>
            <ListItemPortfolio>
              <StyledLink to="/portfolio">Portfolio</StyledLink>
            </ListItemPortfolio>
          </StyledList>
        <Search/>
        <CurrencySelector/>
        <ThemeSwitch onClick={this.props.onClick}/>
            </StyledNav>
        )
    }
}