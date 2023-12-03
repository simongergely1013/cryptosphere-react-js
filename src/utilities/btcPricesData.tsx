import { getThemeColors } from "./getThemeColors";

export const btcPricesData = (chartHours: number[], btcPrices: any) => {
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
        backgroundColor: (context: {}) => {
          const ctx = context["chart"].ctx;
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
