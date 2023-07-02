import React from "react";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import {
  BlackCircle,
  DollarSvg,
  SterlingSvg,
  EuroSvg,
  BitcoinSvg,
  EthereumSvg,
} from "./BlackCircleCurrency.styles";

export const BlackCircleCurrency = () => {
  const { currency } = useContext(CurrencyContext);

  const getCurrencySvg = () => {
    switch (currency) {
      case "usd":
        return <DollarSvg />;
      case "gbp":
        return <SterlingSvg />;
      case "eur":
        return <EuroSvg />;
      case "btc":
        return <BitcoinSvg />;
      case "eth":
        return <EthereumSvg />;
      default:
        return <DollarSvg />;
    }
  };
  return <BlackCircle>{getCurrencySvg()}</BlackCircle>;
};
