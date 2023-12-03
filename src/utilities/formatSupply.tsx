export const formatSupply = (number: number) => {
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
