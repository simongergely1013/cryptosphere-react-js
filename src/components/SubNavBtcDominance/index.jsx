import React from "react";
import { useState } from "react";
import {
  BtcDominanceDiv,
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
        <BtcDominanceDiv
          onMouseEnter={() => setDominanceHovered(true)}
          onMouseLeave={() => setDominanceHovered(false)}
          color={dominanceHovered && "#BDBDBD"}
        >
          {dominancePercent}% BTC
        </BtcDominanceDiv>
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
