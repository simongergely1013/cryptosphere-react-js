import styled from "styled-components";
import React from "react";

export const SearchWrapper = styled.div`
  width: 70%;
`;
const SearchDiv = styled.div`
  z-index: 10;
`;
const SearchInput = styled.input`
  width: 410px;
  height: 53px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding-left: 80px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  z-index: 10;
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
export const Search = (props) => {
  return (
    <SearchDiv>
      <SearchSvg />
      <SearchInput placeholder="Search..." />
    </SearchDiv>
  );
};
