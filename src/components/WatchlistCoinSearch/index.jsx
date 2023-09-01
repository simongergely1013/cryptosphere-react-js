import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, SearchList, ListItem } from "./WatchlistCoinSearch.styles";
import { searchCoin } from "../../store/watchlistSearch/actions";

export const WatchlistCoinSearch = ({ setId }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.watchlistSearch);
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
    setValue(value);
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
          {list.map((el) => (
            <ListItem key={el} onClick={(e) => handleClick(e.target.innerText)}>
              {el}
            </ListItem>
          ))}
        </SearchList>
      )}
    </>
  );
};
