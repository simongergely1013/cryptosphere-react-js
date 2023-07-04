import React from "react";
import { TopChartHeader } from "./TopChartTitleVolume.styles";
import { formatVolumeMarketCap } from "../../utilities";

export const TopChartTitleVolume = ({ btcVolume, day, month, year }) => {
  return (
    <TopChartHeader>
      <h3>Volume 24h</h3>
      <h2>{formatVolumeMarketCap(btcVolume)}</h2>
      <h3>
        {day} {month},{year}
      </h3>
    </TopChartHeader>
  );
};
