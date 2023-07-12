import React from "react";
import { useState } from "react";
import {
  EthDominanceDiv,
  ListItemWithProgress,
  EthereumSvgSubNav,
  ProgressBar,
  EthDominanceProgeressBar,
  EthDominanceHoverDiv1,
  EthDominanceHoverDiv2,
} from "./SubNavEthDominance.styles";

export const SubNavEthDominance = ({
  dominancePercent,
  percent,
  ethMarketCap,
  totalMarketCap,
}) => {
  const [dominanceHovered, setDominanceHovered] = useState(false);
  const [progressBarHovered, setProgressBarHovered] = useState(false);
  return (
    <>
      <ListItemWithProgress>
        <EthereumSvgSubNav />
        <EthDominanceDiv
          onMouseEnter={() => setDominanceHovered(true)}
          onMouseLeave={() => setDominanceHovered(false)}
          color={dominanceHovered && "#BDBDBD"}
        >
          {dominancePercent}% ETH
        </EthDominanceDiv>
        <ProgressBar
          onMouseEnter={() => setProgressBarHovered(true)}
          onMouseLeave={() => setProgressBarHovered(false)}
        >
          <EthDominanceProgeressBar percent={percent} />
        </ProgressBar>
      </ListItemWithProgress>
      {dominanceHovered && (
        <EthDominanceHoverDiv1 ethDominance={dominancePercent} />
      )}
      {progressBarHovered && (
        <EthDominanceHoverDiv2
          ethMarketCap={ethMarketCap}
          totalMarketCap={totalMarketCap}
          ethDominancePercent={dominancePercent}
        />
      )}
    </>
  );
};
