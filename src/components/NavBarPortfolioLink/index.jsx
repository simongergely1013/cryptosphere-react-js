import React from "react";
import { ListItemPortfolio, StyledLink } from "./NavBarPortfolioLink.styles";

// type NavBarPortfolioLinkProps = {
//   onClick: any,
//   background: any
// }

export const NavBarPortfolioLink = ({ onClick, background }) => {
  return (
    <ListItemPortfolio onClick={onClick} background={background}>
      <StyledLink to="/portfolio">Portfolio</StyledLink>
    </ListItemPortfolio>
  );
};
