import React from "react";
import { ListItemPortfolio, StyledLink } from "./NavBarPortfolioLink.styles";
import { getThemeColors } from "../../utilities";

export const NavBarPortfolioLink = ({ isPortfolio }) => {
  return (
    <ListItemPortfolio>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
    </ListItemPortfolio>
  );
};
