import React from "react";
import { ListItemPortfolio, StyledLink } from "./NavBarPortfolioLink.styles";

export const NavBarPortfolioLink = () => {
  return (
    <ListItemPortfolio>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
    </ListItemPortfolio>
  );
};
