import React from "react";
import { BarLoader } from "react-spinners";
import { getThemeColors } from "../../utilities/getThemeColors";

export const SubNavLoadingBar = () => {
  const { text } = getThemeColors();
  return (
    <BarLoader
      color={text}
      cssOverride={{}}
      height={5}
      loading
      speedMultiplier={1}
      width={150}
    />
  );
};
