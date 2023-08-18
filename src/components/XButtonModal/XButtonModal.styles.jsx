import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 45px;
  cursor: pointer;
  color: #06d554;
`;

export const XButton = ({ onClick }) => {
  return (
    <Svg
      onClick={onClick}
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
        d="M6 18L18 6M6 6l12 12"
      />
    </Svg>
  );
};
