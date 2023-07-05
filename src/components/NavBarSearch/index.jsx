import React from "react";
import { SearchWrapper, Search } from "./NavBarSearch.styles";

export const NavBarSearch = () => {
  return (
    <SearchWrapper>
      <form>
        <Search />
      </form>
    </SearchWrapper>
  );
};
