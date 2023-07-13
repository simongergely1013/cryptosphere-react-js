import React from "react";
import { ListItemCoins, StyledLink } from "./NavBarCoinsLink.styles";
import { getThemeColors } from "../../utilities";

export const NavBarCoinsLink = ({ isCoins }) => {
  return (
    <ListItemCoins>
      <StyledLink to="/">Coins</StyledLink>
    </ListItemCoins>
  );
};
