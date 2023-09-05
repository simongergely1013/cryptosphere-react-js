import React from "react";
import { useState } from "react";
import {
  ListItemWithProgress,
  ProgressBar,
  TotalVolumeProgressBar,
  VolumeVsMarketCapDiv,
} from "./SubNavVolumeVsMarketCap.styles";
import { BulletPoint } from "../NavBar/NavBar.styles";
import { SubNavLoadingBar } from "../SubNavLoadingBar";
import { hoverColor } from "../../App.styles";

export const SubNavVolumeVsMarketCap = ({
  totalVolume,
  text,
  percent,
  totalMarketCap,
  isLoading,
  isError,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {isLoading || isError ? (
        <SubNavLoadingBar />
      ) : (
        <ListItemWithProgress
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          color={hovered ? hoverColor : ""}
        >
          <BulletPoint />
          {totalVolume}
          {text}
          <ProgressBar>
            <TotalVolumeProgressBar percent={percent} />
          </ProgressBar>
        </ListItemWithProgress>
      )}
      {hovered && (
        <VolumeVsMarketCapDiv
          volume={totalVolume}
          totalMarketCap={totalMarketCap}
          totalVolumePercent={percent}
        />
      )}
    </>
  );
};
