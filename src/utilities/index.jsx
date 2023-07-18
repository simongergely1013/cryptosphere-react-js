import { useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

const getDate = () => {
  return new Date();
};
export const day = getDate().toString().slice(8, 10);
export const month = getDate().toString().slice(4, 7);
export const year = getDate().toString().slice(11, 15);

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
    case 4:
    case 5:
    case 6:
      return (numberRounded / 1000).toFixed(2).toString() + "K";
    case 7:
    case 8:
    case 9:
      return (numberRounded / 1000000).toFixed(2).toString() + "M";
    case 10:
    case 11:
    case 12:
      return (numberRounded / 1000000000).toFixed(2).toString() + "B";
    case 13:
    case 14:
    case 15:
      return (numberRounded / 1000000000000).toFixed(2).toString() + "T";
    default:
      return numberRounded;
  }
};

export const formatVolumeMarketCap = (number) => {
  let numberRonded = Math.round(number);
  switch (numberRonded.toString().length) {
    case 4:
    case 5:
    case 6:
      numberRonded = formatNumber((numberRonded / 1000).toFixed(2)) + "K";
      break;
    case 7:
    case 8:
    case 9:
      numberRonded = formatNumber((numberRonded / 1000000).toFixed(2)) + "M";
      break;
    case 10:
    case 11:
    case 12:
      numberRonded = formatNumber((numberRonded / 1000000000).toFixed(2)) + "B";
      break;
    case 13:
    case 14:
    case 15:
      numberRonded =
        formatNumber((numberRonded / 1000000000000).toFixed(2)) + "T";
    default:
      break;
  }
  return numberRonded;
};
export const getThemeColors = () => {
  const theme = localStorage.getItem("theme");
  return JSON.parse(theme);
};
export const getLocalStorageItem = (string) => {
  const item = JSON.parse(localStorage.getItem(string));
  return item;
};
export const getSmallChartLabels = () => {
  let labels = [];
  for (let i = 0; i < 28; i++) {
    labels.push("");
  }
  return labels;
};
export const btcPricesData = (chartHours, btcPrices) => {
  const theme = getThemeColors();
  const data = {
    labels: chartHours,
    datasets: [
      {
        label: "BTC Price",
        data: btcPrices,
        borderColor:
          btcPrices[0] < btcPrices[btcPrices.length - 1]
            ? theme.btcPriceChartBorderColorGain
            : btcPrices[0] > btcPrices[btcPrices.length - 1]
            ? theme.btcPriceChartBorderColorLoss
            : theme.btcPriceChartBorderColorGain,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          btcPrices[0] < btcPrices[btcPrices.length - 1]
            ? gradient.addColorStop(0, theme.btcPriceChartGradienColorGain)
            : btcPrices[0] > btcPrices[btcPrices.length - 1]
            ? gradient.addColorStop(0, theme.btcPriceChartGradienColorLoss)
            : gradient.addColorStop(0, theme.btcPriceChartGradienColorGain);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          return gradient;
        },
        pointRadius: 0,
        borderWidth: 3,
        fill: true,
      },
    ],
  };
  return data;
};
export const btcVolumesData = (chartHours, btcVolumes) => {
  const theme = getThemeColors();
  const data = {
    labels: chartHours,
    datasets: [
      {
        label: "BTC Volume",
        data: btcVolumes,
        borderColor: "#e76f51",
        backgroundColor: theme.btcVolumeChartBackgroundColor,
        borderRadius: 5,
      },
    ],
  };
  return data;
};
export const coinPricesData = (chartLabels, coinId, coinPrices) => {
  const theme = getThemeColors();
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: `${coinId} Price`,
        data: coinPrices,
        borderColor:
          coinPrices[0] < coinPrices[coinPrices.length - 1]
            ? theme.btcPriceChartBorderColorGain
            : coinPrices[0] > coinPrices[coinPrices.length - 1]
            ? theme.btcPriceChartBorderColorLoss
            : theme.btcPriceChartBorderColorGain,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          coinPrices[0] < coinPrices[coinPrices.length - 1]
            ? gradient.addColorStop(0, theme.btcPriceChartGradienColorGain)
            : coinPrices[0] > coinPrices[coinPrices.length - 1]
            ? gradient.addColorStop(0, theme.btcPriceChartGradienColorLoss)
            : gradient.addColorStop(0, theme.btcPriceChartGradienColorGain);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          return gradient;
        },
        pointRadius: 0,
        borderWidth: 3,
        fill: true,
      },
    ],
  };
  return data;
};
