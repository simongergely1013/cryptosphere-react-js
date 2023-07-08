import React from "react";
import { ListItemPortfolio, StyledLink } from "./NavBarPortfolioLink.styles";
import { getThemeColors } from "../../utilities";
const { main } = getThemeColors();
const background = "#2C2F36";

export const NavBarPortfolioLink = ({ isPortfolio }) => {
  return (
    <ListItemPortfolio background={isPortfolio ? background : main}>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
    </ListItemPortfolio>
  );
};
