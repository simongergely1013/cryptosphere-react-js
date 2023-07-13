import React from "react";
import { TopChartHeader, Header2, Header3 } from "./TopChartTitlePrice.styles";
import { formatNumber } from "../../utilities";

export const TopChartTitlePrice = ({ btcPrice, day, month, year }) => {
  return (
    <TopChartHeader>
      <Header3>BTC</Header3>
      <Header2>{formatNumber(btcPrice)}</Header2>
      <Header3>
        {day} {month},{year}
      </Header3>
    </TopChartHeader>
  );
};
