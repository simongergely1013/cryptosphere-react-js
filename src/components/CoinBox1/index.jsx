import React from "react";
import { useSelector } from "react-redux";
import {
  CoinBoxContainer,
  CoinBox,
  CoinBoxInner,
  CoinImage,
  CoinName,
} from "./CoinBox1.styles";

export const CoinBox1 = ({ src, coinName, coinSymbol, child, button }) => {
  const portfolio = useSelector((state) => state.portfolio.assets);
  return (
    <CoinBoxContainer>
      <CoinBox>
        <CoinBoxInner>
          <CoinImage src={src} />
        </CoinBoxInner>
        <CoinName>
          {coinName} ({coinSymbol})
        </CoinName>
        {button}
      </CoinBox>
      {child}
    </CoinBoxContainer>
  );
};
