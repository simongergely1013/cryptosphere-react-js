import React from "react";
import { useState, useEffect, useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import {
  ConversionDiv,
  ConversionIcon,
  CurrencyDiv,
  ConversionInput,
} from "./CurrencyConverter.styles";

export const CurrencyConverter = ({ coinSymbol, coinCurrentPrice }) => {
  const { currency } = useContext(CurrencyContext);
  const [currencyValue, setCurrencyValue] = useState("");
  const [coinValue, setCoinValue] = useState("");
  const [currentPrice, setCurrentPrice] = useState(coinCurrentPrice);

  const handleCurrencyChange = (e) => {
    setCurrencyValue(Number(e.target.value));
    setCoinValue("");
  };
  const handleCoinChange = (e) => {
    setCoinValue(Number(e.target.value));
    setCurrencyValue("");
  };
  const executeConversion = () => {
    if (coinValue === null || coinValue === 0 || coinValue === "") {
      setCoinValue(currencyValue / currentPrice);
    } else if (
      currencyValue === null ||
      currencyValue === 0 ||
      currencyValue === ""
    ) {
      setCurrencyValue(coinValue * currentPrice);
    } else {
      return;
    }
  };
  useEffect(() => {
    setCurrencyValue("");
    setCoinValue("");
  }, [currency]);
  return (
    <>
      <ConversionDiv>
        <CurrencyDiv currency={currency.toUpperCase()} />
        <ConversionInput
          onChange={handleCurrencyChange}
          value={currencyValue}
        />
      </ConversionDiv>
      <ConversionIcon onClick={executeConversion} />
      <ConversionDiv>
        <CurrencyDiv currency={coinSymbol} />
        <ConversionInput onChange={handleCoinChange} value={coinValue} />
      </ConversionDiv>
    </>
  );
};
