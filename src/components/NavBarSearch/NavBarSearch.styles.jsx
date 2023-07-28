import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export const SearchWrapper = styled.div`
  width: 70%;
  margin-left: -50px;
`;
const SearchDiv = styled.div``;
const SearchInput = styled.input`
  width: 410px;
  height: 53px;
  background: ${(props) => props.theme.navBackground};
  color: ${(props) => props.theme.text};
  padding-left: 80px;
  font-size: 17px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  z-index: 10;
  transition: all 0.2s ease-in-out;
`;
const StyledSearchSvg = styled.svg`
  width: 30px;
  position: absolute;
  z-index: 10;
  margin-left: 20px;
  margin-top: 12px;
  z-index: 10;
`;
const SearchSvg = () => {
  return (
    <StyledSearchSvg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </StyledSearchSvg>
  );
};
export const Search = ({ value, onChange, onBlur }) => {
  return (
    <SearchDiv>
      <SearchSvg />
      <SearchInput
        placeholder="Search..."
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </SearchDiv>
  );
};
export const SearchList = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  margin-left: 60px;
  padding: 10px 0px 10px 20px;
  position: absolute;
  z-index: 50;
  background: ${(props) => props.theme.navBackground};
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
`;
export const StyledLink = styled(Link)`
  z-index: 50;
  color: ${(props) => props.theme.text};
  margin-bottom: 5px;
  transition: color ease-in-out;
`;
