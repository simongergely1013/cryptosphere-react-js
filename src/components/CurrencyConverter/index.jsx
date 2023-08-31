import React from "react";
import { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrencyValue,
  setCoinValue,
} from "../../store/currencyConverter/actions";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import {
  ConversionDiv,
  CurrencyDiv,
  ConversionInput,
} from "./CurrencyConverter.styles";
import { CurrencyConversionIcon } from "../CurrencyConversionIcon";

export const CurrencyConverter = ({ coinSymbol, coinCurrentPrice }) => {
  const { currency } = useContext(CurrencyContext);
  const { currencyValue, coinValue } = useSelector(
    (state) => state.currencyConverter
  );
  const dispatch = useDispatch();

  const handleCurrencyChange = (value) => {
    dispatch(setCurrencyValue(value));
    dispatch(setCoinValue(""));
  };
  const handleCoinChange = (value) => {
    dispatch(setCoinValue(value));
    dispatch(setCurrencyValue(""));
  };
  const executeConversion = () => {
    if (coinValue === null || coinValue === 0 || coinValue === "") {
      dispatch(setCoinValue(currencyValue / coinCurrentPrice));
    } else if (
      currencyValue === null ||
      currencyValue === 0 ||
      currencyValue === ""
    ) {
      dispatch(setCurrencyValue(coinValue * coinCurrentPrice));
    } else {
      return;
    }
  };
  useEffect(() => {
    dispatch(setCurrencyValue(""));
    dispatch(setCoinValue(""));
  }, [currency]);
  return (
    <>
      <ConversionDiv>
        <CurrencyDiv currency={currency.toUpperCase()} />
        <ConversionInput
          onChange={(e) => handleCurrencyChange(e.target.value)}
          value={currencyValue}
        />
      </ConversionDiv>
      <CurrencyConversionIcon onClick={executeConversion} />
      <ConversionDiv>
        <CurrencyDiv currency={coinSymbol} />
        <ConversionInput
          onChange={(e) => handleCoinChange(e.target.value)}
          value={coinValue}
        />
      </ConversionDiv>
    </>
  );
};
