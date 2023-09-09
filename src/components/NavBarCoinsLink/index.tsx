import React from "react";
import { ListItemCoins, StyledLink } from "./NavBarCoinsLink.styles";

type NavBarCoinsLinkProps = {
  onClick: any,
  background: any
}

export const NavBarCoinsLink = ({ onClick, background }: NavBarCoinsLinkProps) => {
  return (
    <ListItemCoins onClick={onClick} background={background}>
      <StyledLink to="/">Coins</StyledLink>
    </ListItemCoins>
  );
};
