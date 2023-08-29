import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, SearchList, ListItem } from "./PortfolioCoinSearch.styles";
import { searchCoin } from "../../store/portfolioSearch/actions";

export const PortfolioCoinSearch = ({ setId }) => {
  const dispatch = useDispatch();
  const coinList = useSelector((state) => state.portfolioSearch.list);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);

  const handleSearch = (value) => {
    setValue(value);
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
  useEffect(() => {
    dispatch(searchCoin(value));
  }, [value]);
  return (
    <>
      <Input
        type="text"
        value={value}
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
