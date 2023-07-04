import React from "react";
import { CoinsPercentageBar } from "../CoinsPercentageBar";
import { formatNumber } from "../../utilities";
import {
  CoinDataBoxContainer,
  CoinDataRow,
  SmallRectangleBlue,
  PlusSmallSvg,
} from "./CoinBox3.styles";

export const CoinBox3 = ({
  coinMarketCap,
  coinFullyDillutedValuation,
  coinVolume24h,
  coinVolumeOverMarketCap,
  coinCirculatingSupply,
  coinSymbol,
  coinTotalSupply,
  num1,
  num2,
  color1,
  color2,
}) => {
  return (
    <CoinDataBoxContainer>
      <CoinDataRow>
        <SmallRectangleBlue>
          <PlusSmallSvg />
        </SmallRectangleBlue>
        <p>
          Market Cap: <span>{formatNumber(coinMarketCap)}</span>{" "}
        </p>
      </CoinDataRow>
      <CoinDataRow>
        <SmallRectangleBlue>
          <PlusSmallSvg />
        </SmallRectangleBlue>
        <p>
          Fully Diluted Valuation:{" "}
          <span>{formatNumber(coinFullyDillutedValuation)}</span>
        </p>
      </CoinDataRow>
      <CoinDataRow>
        <SmallRectangleBlue>
          <PlusSmallSvg />
        </SmallRectangleBlue>
        <p>
          Trading Volume 24h: <span>{formatNumber(coinVolume24h)}</span>
        </p>
      </CoinDataRow>
      <CoinDataRow>
        <SmallRectangleBlue>
          <PlusSmallSvg />
        </SmallRectangleBlue>
        <p>
          Volume / Market: <span>{coinVolumeOverMarketCap}%</span>
        </p>
      </CoinDataRow>
      <CoinDataRow>
        <SmallRectangleBlue>
          <PlusSmallSvg />
        </SmallRectangleBlue>
        <p>
          Circulating Supply:{" "}
          <span>
            {coinCirculatingSupply} {coinSymbol}
          </span>
        </p>
      </CoinDataRow>
      <CoinDataRow>
        <SmallRectangleBlue>
          <PlusSmallSvg />
        </SmallRectangleBlue>
        <p>
          Max Supply:{" "}
          <span>
            {coinTotalSupply} {coinSymbol}
          </span>
        </p>
      </CoinDataRow>
      <CoinDataRow style={{ width: "50%", marginLeft: "-180px" }}>
        <CoinsPercentageBar
          num1={num1 + "%"}
          num2={num2 + "%"}
          width={num1 + "%"}
          color1={color1}
          color2={color2}
          background1={color1}
          background2={color2}
        />
      </CoinDataRow>
    </CoinDataBoxContainer>
  );
};
