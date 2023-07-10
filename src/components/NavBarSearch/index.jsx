import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { SearchWrapper, Search, SearchList } from "./NavBarSearch.styles";
import { StyledLink } from "./NavBarSearch.styles";

export const NavBarSearch = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [search, setSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const getQuery = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${value}`
      );
      setIsLoading(true);
      if (value !== "" && data.coins !== []) {
        setList(
          data.coins
            .map((el) => el.name)
            .filter((element, index) => {
              return index < 11;
            })
        );
        setSearch(true);
      } else if (value === "" && data.coins === []) {
        setSearch(false);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const handleSearch = (value) => {
    setValue(value);
    if (value === "") {
      setSearch(false);
    }
  };
  const handleClick = () => {
    setValue("");
    setSearch(false);
  };
  useEffect(() => {
    getQuery();
  }, [value]);
  return (
    <SearchWrapper>
      <form>
        <Search
          value={value}
          onChange={(e) => handleSearch(e.target.value)}
          onBlur={() => setSearch(false)}
        />
      </form>
      <SearchList>
        {search &&
          list.map((el) => (
            <StyledLink onClick={handleClick} to={`/coin/${el.toLowerCase()}`}>
              {el}
            </StyledLink>
          ))}
      </SearchList>
    </SearchWrapper>
  );
};
