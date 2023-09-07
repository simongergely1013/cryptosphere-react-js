import React from "react";
import { ListItemPortfolio, StyledLink } from "./NavBarPortfolioLink.styles";

export const NavBarPortfolioLink = ({ onClick, background }) => {
  return (
    <ListItemPortfolio onClick={onClick} background={background}>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
    </ListItemPortfolio>
  );
};
