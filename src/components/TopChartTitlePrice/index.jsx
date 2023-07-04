import React from "react";
import { TopChartHeader } from "./TopChartTitlePrice.styles";
import { formatNumber } from "../../utilities";

export const TopChartTitlePrice = ({ btcPrice, day, month, year }) => {
  return (
    <TopChartHeader>
      <h3>BTC</h3>
      <h2>{formatNumber(btcPrice)}</h2>
      <h3>
        {day} {month},{year}
      </h3>
    </TopChartHeader>
  );
};
