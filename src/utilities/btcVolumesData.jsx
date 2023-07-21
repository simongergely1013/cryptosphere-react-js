import { getThemeColors } from "./getThemeColors";

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
