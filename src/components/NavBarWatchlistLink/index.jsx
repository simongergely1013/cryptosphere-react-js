import React from "react";
import { ListItemWatchlist, StyledLink } from "./NavBarWatchlistLink.styles";

export const NavBarWatchlistLink = ({ onClick, background }) => {
  return (
    <ListItemWatchlist onClick={onClick} background={background}>
      <StyledLink to="/watchlist">Watchlist</StyledLink>
    </ListItemWatchlist>
  );
};
