import React from "react";
import { useState } from "react";
import {
  ListItemWithProgress,
  BitcoinSvgSubNav,
  ProgressBar,
  BtcDominanceProgressBar,
  BtcDominanceHoverDiv1,
  BtcDominanceHoverDiv2,
} from "./SubNavBtcDominance.styles";

export const SubNavBtcDominance = ({
  dominancePercent,
  percent,
  btcMarketCap,
  totalMarketCap,
}) => {
  const [dominanceHovered, setDominanceHovered] = useState(false);
  const [progressBarHovered, setProgressBarHovered] = useState(false);
  return (
    <>
      <ListItemWithProgress>
        <BitcoinSvgSubNav />
        <div
          onMouseEnter={() => setDominanceHovered(true)}
          onMouseLeave={() => setDominanceHovered(false)}
        >
          {dominancePercent}% BTC
        </div>
        <div
          onMouseEnter={() => setProgressBarHovered(true)}
          onMouseLeave={() => setProgressBarHovered(false)}
        >
          <ProgressBar>
            <BtcDominanceProgressBar percent={percent} />
          </ProgressBar>
        </div>
      </ListItemWithProgress>
      {dominanceHovered && (
        <BtcDominanceHoverDiv1 btcDominance={dominancePercent} />
      )}
      {progressBarHovered && (
        <BtcDominanceHoverDiv2
          btcMarketCap={btcMarketCap}
          totalMarketCap={totalMarketCap}
          btcDominancePercent={dominancePercent}
        />
      )}
    </>
  );
};
