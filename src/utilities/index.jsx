import { CurrencyContext } from "../contexts/CurrencyContext";
import { useContext } from "react";

export const formatNumber = (number) => {
  const { currency } = useContext(CurrencyContext);
  const formattedNumber = new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency,
  }).format(number);
  return formattedNumber;
};
export const formatDate = (date) => {
  const formattedDate = new Date(date).getHours() + ":" + "00";
  return formattedDate;
};
export const getRandomColor = () => {
  const colors = [
    "#FEE158",
    "#FFB528",
    "#8A92B2",
    "#1BA27A",
    "#E4CD82",
    "#BB9F33",
    "#FFDCCE",
    "#FE7D43",
    "#F4B2B0",
    "#B3404A",
    "#2775C9",
    "#F09242",
  ];
  const index = Math.floor(Math.random() * 12);
  return colors[index];
};
export const formatSupply = (number) => {
  let numberRounded = Math.round(number);
  switch (numberRounded.toString().length) {
    case 7:
    case 8:
    case 9:
      return (numberRounded / 1000000).toFixed(2).toString() + "M";
    case 10:
    case 11:
    case 12:
      return (numberRounded / 1000000000).toFixed(2).toString() + "B";
    default:
      return (numberRounded / 1000).toFixed(2).toString() + "K";
  }
};

export const formatVolumeMarketCap = (number) => {
  let num = number;
  switch (num.toString().length) {
    case 7:
    case 8:
    case 9:
      num = formatNumber((num / 1000000).toFixed(2)) + "M";
      break;
    case 10:
    case 11:
    case 12:
      num = formatNumber((num / 1000000000).toFixed(2)) + "B";
      break;
    default:
      num = formatNumber((num / 1000).toFixed(2)) + "K";
      break;
  }
  return num;
};
export const getDate = () => {
  return new Date();
};
