import styled from "styled-components";
import React from "react";

export const CoinBoxContainer = styled.div`
  width: 25%;
  height: 100%;
  margin: 15px;
  border-radius: 20px;
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
export const CoinImage = styled.img`
  width: 50%;
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
