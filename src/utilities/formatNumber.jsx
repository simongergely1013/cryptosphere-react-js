import { useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

export const formatNumber = (number) => {
  const { currency } = useContext(CurrencyContext);
  const formattedNumber = new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency,
  }).format(number);
  return formattedNumber;
};
