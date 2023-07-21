import { formatNumber } from "./formatNumber";

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
