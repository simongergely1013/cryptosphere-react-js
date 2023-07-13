import React from "react";
import { TopChartHeader, Header2, Header3 } from "./TopChartTitleVolume.styles";
import { formatVolumeMarketCap } from "../../utilities";

export const TopChartTitleVolume = ({ btcVolume, day, month, year }) => {
  return (
    <TopChartHeader>
      <Header3>Volume 24h</Header3>
      <Header2>{formatVolumeMarketCap(btcVolume)}</Header2>
      <Header3>
        {day} {month},{year}
      </Header3>
    </TopChartHeader>
  );
};
