import React from "react";
import { ArrowUp, ArrowDown } from "../../pages/Coins/Coins.styles";
import {
  PriceBoxContainer,
  PriceChangePercentageDiv,
  PriceChangePercentage,
  SquareStackIcon,
  AllTimeContainer,
  ArrowSvgDiv,
  AllTimeDiv,
  AllTimeP,
} from "./CoinBox2.styles";
import { formatNumber } from "../../utilities/formatNumber";

export const CoinBox2 = ({
  coinPrice,
  priceChangePercentage,
  ath,
  athDate,
  atl,
  atlDate,
}) => {
  return (
    <PriceBoxContainer>
      <h2 style={{ fontSize: "44px" }}>{formatNumber(coinPrice)}</h2>
      <PriceChangePercentageDiv>
        <PriceChangePercentage
          color={priceChangePercentage > 0 ? "#00fc2a" : "#fe1040"}
        >
          {" "}
          {priceChangePercentage}%
        </PriceChangePercentage>
        {priceChangePercentage > 0 ? <ArrowUp /> : <ArrowDown />}
      </PriceChangePercentageDiv>
      <SquareStackIcon />
      <AllTimeContainer>
        <ArrowSvgDiv>
          <ArrowUp />
        </ArrowSvgDiv>
        <AllTimeDiv>
          <AllTimeP>
            All Time High: <span> {formatNumber(ath)}</span>
          </AllTimeP>
          <p>{athDate}</p>
        </AllTimeDiv>
      </AllTimeContainer>
      <AllTimeContainer>
        <ArrowSvgDiv>
          <ArrowDown />
        </ArrowSvgDiv>
        <AllTimeDiv>
          <AllTimeP>
            All Time Low: <span> {formatNumber(atl)}</span>
          </AllTimeP>
          <p>{atlDate}</p>
        </AllTimeDiv>
      </AllTimeContainer>
    </PriceBoxContainer>
  );
};
