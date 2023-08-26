import styled from "styled-components";
import React from "react";

const ThemeSwitchDiv = styled.div`
  width: 43px;
  height: 43px;
  background: ${(props) => props.theme.navBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 0px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
const StyledMoonSvg = styled.svg`
  width: 28px;
  fill: ${(props) => props.theme.moonIconFill};
  border: none;
  transition: all 0.2s ease-in-out;
`;
export const ThemeSwitchStyled = ({ onClick }) => {
  return (
    <ThemeSwitchDiv onClick={onClick}>
      <StyledMoonSvg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </StyledMoonSvg>
    </ThemeSwitchDiv>
  );
};
