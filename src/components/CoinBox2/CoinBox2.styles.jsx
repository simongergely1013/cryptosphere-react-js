import styled from "styled-components";
import React from "react";

export const PriceBoxContainer = styled.div`
  width: 37.5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.main};
  margin: 15px;
  border-radius: 20px;
  transition: background 1s ease-in-out;
`;
export const PriceChangePercentageDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const PriceChangePercentage = styled.h3`
  margin-right: 10px;
  font-size: 19px;
  color: ${(props) => props.color};
  transition: color 1s ease-in-out;
`;
const SquareStackSvg = styled.svg`
  width: 35px;
  margin-bottom: 20px;
`;
export const SquareStackIcon = () => {
  return (
    <SquareStackSvg
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
        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
      />
    </SquareStackSvg>
  );
};
export const AllTimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const ArrowSvgDiv = styled.div`
  width: 35px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AllTimeDiv = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const AllTimeP = styled.p`
  font-size: 18px;
`;
