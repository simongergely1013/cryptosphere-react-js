import React from "react";
import { ListItemCoins, StyledLink } from "./NavBarCoinsLink.styles";
import { getThemeColors } from "../../utilities";
const { main } = getThemeColors();
const background = "#2C2F36";

export const NavBarCoinsLink = ({ isCoins }) => {
  return (
    <ListItemCoins background={isCoins ? background : main}>
      <StyledLink to="/">Coins</StyledLink>
    </ListItemCoins>
  );
};
