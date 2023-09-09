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

type SubNavVolumeVsMarketCapProps = {
  totalVolume: string,
  text: string,
  percent: string,
  totalMarketCap: string,
  isLoading: boolean,
  isError: boolean,
}

export const SubNavVolumeVsMarketCap = ({
  totalVolume,
  text,
  percent,
  totalMarketCap,
  isLoading,
  isError,
}: SubNavVolumeVsMarketCapProps): React.JSX.Element => {
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
