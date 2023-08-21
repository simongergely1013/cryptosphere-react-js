import axios from "axios";
import React, { useState, useEffect } from "react";
import { Input, SearchList, ListItem } from "./PortfolioCoinSearch.styles";

export const PortfolioCoinSearch = () => {
  const [coinList, setCoinList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState(false);

  const handleSubmit = () => {};

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value === "") {
      setSearch(false);
    }
  };
  const handleClick = (value) => {
    console.log(value);
  };
  const searchCoin = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${searchValue}`
      );
      if (searchValue !== "") {
        setCoinList(
          data.coins
            .filter((element, index) => {
              return index < 11;
            })
            .map((el) => el.name)
        );
        setSearch(true);
      } else {
        setSearch(false);
      }
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
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search coin..."
      />
      {search && (
        <SearchList>
          {coinList.map((el) => (
            <ListItem onClick={(e) => handleClick(e.target.innerText)}>
              {el}
            </ListItem>
          ))}
        </SearchList>
      )}
    </>
  );
};
