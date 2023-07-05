import React from "react";
import { CurrencySelect, Option } from "./NavBarCurrencySelector.styles";

export const NavBarCurrencySelector = ({ onChange }) => {
  return (
    <CurrencySelect onChange={onChange}>
      <Option value="usd">USD</Option>
      <Option value="gbp">GBP</Option>
      <Option value="eur">EUR</Option>
      <Option value="btc">BTC</Option>
      <Option value="eth">ETH</Option>
    </CurrencySelect>
  );
};
