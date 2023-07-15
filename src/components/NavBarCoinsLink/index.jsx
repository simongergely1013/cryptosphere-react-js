import React from "react";
import { ListItemCoins, StyledLink } from "./NavBarCoinsLink.styles";

export const NavBarCoinsLink = ({ isCoins }) => {
  return (
    <ListItemCoins>
      <StyledLink to="/">Coins</StyledLink>
    </ListItemCoins>
  );
};
