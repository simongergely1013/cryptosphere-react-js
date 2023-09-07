import React from "react";
import { ListItemCoins, StyledLink } from "./NavBarCoinsLink.styles";

export const NavBarCoinsLink = ({ onClick, background }) => {
  return (
    <ListItemCoins onClick={onClick} background={background}>
      <StyledLink to="/">Coins</StyledLink>
    </ListItemCoins>
  );
};
