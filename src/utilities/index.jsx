export const getCurrentPrice = (currency, price) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency,
  }).format(price);
};
export const getTotalVolumeFormatted = (totalVolume) => {};
