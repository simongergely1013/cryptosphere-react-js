import React from "react";
import { ListItemWatchlist, StyledLink } from "./NavBarWatchlistLink.styles";

type NavBarWatchlistLinkProps = {
  onClick: any,
  background: any
}

export const NavBarWatchlistLink = ({ onClick, background }: NavBarWatchlistLinkProps) => {
  return (
    <ListItemWatchlist onClick={onClick} background={background}>
      <StyledLink to="/watchlist">Watchlist</StyledLink>
    </ListItemWatchlist>
  );
};
