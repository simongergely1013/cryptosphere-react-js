import React from "react";
import {
  CoinBoxContainer,
  CoinBox,
  CoinBoxInner,
  CoinImage,
} from "./CoinBox1.styles";

export const CoinBox1 = ({ src, coinName, coinSymbol, child }) => {
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
      {child}
    </CoinBoxContainer>
  );
};
