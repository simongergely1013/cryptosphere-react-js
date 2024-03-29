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
import { SubNavLoadingBar } from "../SubNavLoadingBar";

type SubNavDominanceProps ={
  svg: React.JSX.Element,
  dominancePercent: string,
  percent: any,
  marketCap: string,
  totalMarketCap: string,
  coinNameShort: string,
  coinNameLong: string,
  text: string,
  isLoading: boolean,
  isError: boolean,
}

export const SubNavDominance = ({
  svg,
  dominancePercent,
  percent,
  marketCap,
  totalMarketCap,
  coinNameShort,
  coinNameLong,
  text,
  isLoading,
  isError,
}: SubNavDominanceProps): React.JSX.Element => {
  const [dominanceHovered, setDominanceHovered] = useState(false);
  const [progressBarHovered, setProgressBarHovered] = useState(false);
  return (
    <>
      {isLoading || isError ? (
        <SubNavLoadingBar />
      ) : (
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
      )}
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
