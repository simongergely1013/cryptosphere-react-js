import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchWrapper, Search, SearchList } from "./NavBarSearch.styles";
import { StyledLink } from "./NavBarSearch.styles";
import { searchCoin } from "../../store/navBarSearch/actions";

export const NavBarSearch = () => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  const { list, isLoading, isError } = useSelector(
    (state) => state.navBarSearch
  );
  const handleSearch = (value) => {
    setValue(value);
    setSearch(true);
    dispatch(searchCoin(value));
  };
  const handleClick = () => {
    setValue("");
    setSearch(false);
  };
  useEffect(() => {
    dispatch(searchCoin(value));
  }, [value]);
  return (
    <SearchWrapper>
      <form>
        <Search value={value} onChange={(e) => handleSearch(e.target.value)} />
      </form>
      {search && (
        <SearchList>
          {list.map((el) => (
            <StyledLink onClick={handleClick} to={`/coin/${el.toLowerCase()}`}>
              {el}
            </StyledLink>
          ))}
        </SearchList>
      )}
    </SearchWrapper>
  );
};
