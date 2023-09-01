import React from "react";
import { useState } from "react";
import { hoverColor } from "../../App.styles";
import {
  LiWithProgress,
  DominanceDiv,
  ProgressBar,
  DominanceProgressBar,
  DominanceHoverDiv1,
  DominanceHoverDiv2,
} from "./SubNavDominance.styles";

export const SubNavDominance = ({
  svg,
  dominancePercent,
  percent,
  marketCap,
  totalMarketCap,
  coinNameShort,
  coinNameLong,
  text,
}) => {
  const [dominanceHovered, setDominanceHovered] = useState(false);
  const [progressBarHovered, setProgressBarHovered] = useState(false);
  return (
    <>
      <LiWithProgress>
        {svg}
        <DominanceDiv
          onMouseEnter={() => setDominanceHovered(true)}
          onMouseLeave={() => setDominanceHovered(false)}
          color={dominanceHovered ? hoverColor : ""}
        >
          {dominancePercent}% {coinNameShort}
        </DominanceDiv>
        <div
          onMouseEnter={() => setProgressBarHovered(true)}
          onMouseLeave={() => setProgressBarHovered(false)}
        >
          <ProgressBar>
            <DominanceProgressBar percent={percent} />
          </ProgressBar>
        </div>
      </LiWithProgress>
      {dominanceHovered && (
        <DominanceHoverDiv1
          coinNameShort={coinNameShort}
          coinNameLong={coinNameLong}
          dominance={dominancePercent}
        />
      )}
      {progressBarHovered && (
        <DominanceHoverDiv2
          coinName={coinNameShort}
          marketCap={marketCap}
          totalMarketCap={totalMarketCap}
          dominancePercent={dominancePercent}
          text={text}
        />
      )}
    </>
  );
};
