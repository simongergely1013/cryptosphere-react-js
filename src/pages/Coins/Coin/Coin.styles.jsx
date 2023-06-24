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
  justify-content: center;
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
  margin-left: 15px;
`;
export const PriceCHangePercentageDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const PriceChangePercentage = styled.h3`
  margin-right: 10px;
  font-size: 19px;
  color: ${(props) => props.color};
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
export const AllTimeDiv = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ArrowSvgDiv = styled.div`
  width: 35px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AllTimeP = styled.p`
  font-size: 18px;
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
export const DescriptionWrapper = styled.div`
  width: 96%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.main};
  padding: 30px;
  margin-bottom: 50px;
  border-radius: 20px;
`;
export const CoinDescriptionDiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 19px;
  text-align: center;
  margin-top: 30px;
`;
export const CoinUrlsRow = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  margin-bottom: 50px;
`;
export const UrlDiv = styled.div`
  width: 32%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.theme.main};
  border-radius: 20px;
`;
const CopySvg = styled.svg`
  width: 20px;
  cursor: pointer;
`;
export const CopyIcon = () => {
  return (
    <CopySvg
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
        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
      />
    </CopySvg>
  );
};
export const UrlAddressDiv = styled.div``;
export const CurrencyConversionRow = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
export const BigChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
