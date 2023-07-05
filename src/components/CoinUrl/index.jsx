import React from "react";
import { UrlDiv, UrlIcon, CopyIcon } from "./CoinUrl.styles";

export const CoinUrl = ({ blockchainSite }) => {
  return (
    <UrlDiv>
      <UrlIcon />
      <div>{blockchainSite}</div>
      <CopyIcon />
    </UrlDiv>
  );
};
