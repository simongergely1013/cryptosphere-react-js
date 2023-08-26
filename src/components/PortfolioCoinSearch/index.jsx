import axios from "axios";
import React, { useState, useEffect } from "react";
import { Input, SearchList, ListItem } from "./PortfolioCoinSearch.styles";

export const PortfolioCoinSearch = ({ setId }) => {
  const [coinList, setCoinList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState(false);

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value !== "") {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };
  const handleClick = (value) => {
    setId(value.toLowerCase());
    setSearchValue(value);
    setSearch(false);
  };
  const searchCoin = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${searchValue}`
      );
      setCoinList(
        data.coins
          .filter((element, index) => {
            return index < 11;
          })
          .map((el) => el.name)
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchCoin();
  }, [searchValue]);
  return (
    <>
      <Input
        type="text"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search coin..."
      />
      {search && (
        <SearchList>
          {coinList.map((el) => (
            <ListItem key={el} onClick={(e) => handleClick(e.target.innerText)}>
              {el}
            </ListItem>
          ))}
        </SearchList>
      )}
    </>
  );
};
