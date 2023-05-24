export const formatNumber = (currency, number) => {
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
