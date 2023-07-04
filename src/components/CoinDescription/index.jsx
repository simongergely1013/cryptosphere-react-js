import React from "react";
import { SquareStackIcon } from "../CoinBox2/CoinBox2.styles";
import {
  DescriptionWrapper,
  CoinDescriptionDiv,
} from "./CoinDescription.styles";

export const CoinDescription = ({ coinDescription }) => {
  return (
    <DescriptionWrapper>
      <SquareStackIcon />
      <CoinDescriptionDiv>{coinDescription}</CoinDescriptionDiv>
    </DescriptionWrapper>
  );
};
