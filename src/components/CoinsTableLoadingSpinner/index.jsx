import React from "react";
import { FadeLoader } from "react-spinners";
import { cssOverride } from "./CoinsTableLoadingSpinner.styles";
import { getThemeColors } from "../../utilities/getThemeColors";

export const CoinsTableLoadingSpinner = () => {
  const { text } = getThemeColors();
  return (
    <FadeLoader
      color={text}
      height={30}
      margin={12}
      radius={0}
      width={5}
      cssOverride={cssOverride}
    />
  );
};
