import { getSmallChartLabels } from "./getSmallChartLabels";

export const getCoinPricesData = (sparklineData: {}) => {
  const coinPricesData = {
    labels: getSmallChartLabels(),
    datasets: [
      {
        label: "",
        data: sparklineData,
        borderColor:
          sparklineData[0] < sparklineData["sparklineData"].length - 1
            ? "#00FF5F"
            : "red",
        pointRadius: 0,
        borderWidth: 3,
      },
    ],
  };
  return coinPricesData;
};
