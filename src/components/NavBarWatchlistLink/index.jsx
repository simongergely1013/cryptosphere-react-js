import React from "react";
import { ListItemWatchlist, StyledLink } from "./NavBarWatchlistLink.styles";

export const NavBarWatchlistLink = ({ isWatchlist }) => {
  return (
    <ListItemWatchlist>
      <StyledLink to="/watchlist">Watchlist</StyledLink>
    </ListItemWatchlist>
  );
};
