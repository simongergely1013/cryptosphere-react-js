import styled from "styled-components";
import React from "react";

const Svg = styled.svg`
  width: 17px;
  margin-left: 8px;
  cursor: pointer;
  color: ${(props) => props.color};
`;

export const ChevronSvg = ({ onMouseEnter, onMouseLeave, onClick, color }) => {
  return (
    <Svg
      onClick={onClick}
      color={color}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
      />
    </Svg>
  );
};
