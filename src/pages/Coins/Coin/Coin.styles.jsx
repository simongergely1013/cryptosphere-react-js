import React from "react";
import styled from "styled-components";

export const CoinPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text};
`;

export const HeaderDiv = styled.div`
  margin-bottom: 30px;
  width: 98%;
`;
export const SummaryWrapper = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;
export const CoinBoxContainer = styled.div`
  width: 25%;
  height: 100%;
  margin: 15px;
  border-radius: 20px;
  //   border: 1px solid red;
`;
export const CoinBox = styled.div`
  width: 100%;
  height: 80%;
  background: ${(props) => props.theme.main};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   border: 1px solid red;
`;
export const CoinBoxInner = styled.div`
  width: 50%;
  height: 50%;
  background: ${(props) => props.theme.background};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const CoinUrlBox = styled.div`
  width: 100%;
  height: 65px;
  background: ${(props) => props.theme.main};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 15px;
`;
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
`;
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
  //   border: 1px solid red;
`;
export const CoinImage = styled.img`
  width: 50%;
`;
const UrlSvg = styled.svg`
  width: 20px;
  cursor: pointer;
`;
export const UrlIcon = () => {
  return (
    <UrlSvg
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
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </UrlSvg>
  );
};
export const HomePageDiv = styled.div`
  margin-left: 10px;
`;
export const PriceCHangePercentageDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const PriceChangePercentage = styled.h3`
  margin-right: 10px;
  color: ${(props) => props.color};
`;
const SquareStackSvg = styled.svg`
  width: 30px;
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
