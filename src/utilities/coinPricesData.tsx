import { getThemeColors } from "./getThemeColors";

export const coinPricesData = (chartLabels: string[], coinId: string, coinPrices: {}) => {
  const theme = getThemeColors();
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: `${coinId} Price`,
        data: coinPrices,
        borderColor:
          coinPrices[0] < coinPrices["coinPrices"].length - 1
            ? theme.btcPriceChartBorderColorGain
            : coinPrices[0] > coinPrices["coinPrices"].length - 1
            ? theme.btcPriceChartBorderColorLoss
            : theme.btcPriceChartBorderColorGain,
        backgroundColor: (context: {}) => {
          const ctx = context["chart"].ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          coinPrices[0] < coinPrices["coinPrices"].length - 1
            ? gradient.addColorStop(0, theme.btcPriceChartGradienColorGain)
            : coinPrices[0] > coinPrices["coinPrices"].length - 1
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
