import React from "react";
import {
  CoinBoxContainer,
  CoinBox,
  CoinBoxInner,
  CoinImage,
  CoinUrlBox,
  UrlIcon,
  HomePageDiv,
} from "./CoinBox1.styles";

export const CoinBox1 = ({ src, coinName, coinSymbol, coinHomePage }) => {
  return (
    <CoinBoxContainer>
      <CoinBox>
        <CoinBoxInner>
          <CoinImage src={src} />
        </CoinBoxInner>
        <h2>
          {coinName} ({coinSymbol})
        </h2>
      </CoinBox>
      <CoinUrlBox>
        <UrlIcon />
        <HomePageDiv>{coinHomePage}</HomePageDiv>
      </CoinUrlBox>
    </CoinBoxContainer>
  );
};
