import styled from "styled-components";
import React from "react";

export const CoinDataBoxContainer = styled.div`
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
export const CoinDataRow = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const SmallRectangleBlue = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2172e5;
  margin-right: 20px;
  border-radius: 5px;
`;
const PlusSvg = styled.svg`
  width: 16px;
  fill: white;
`;
export const PlusSmallSvg = () => {
  return (
    <PlusSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </PlusSvg>
  );
};
