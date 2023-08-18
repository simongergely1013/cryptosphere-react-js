import React from "react";
import { useState } from "react";
import { AddAsset } from "./AddAssetButton.styles";

export const AddAssetButton = ({ text, background, borderColor, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <AddAsset
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      background={hovered ? background : "#06D554"}
      borderColor={hovered ? borderColor : "#06D554"}
    >
      {text}
    </AddAsset>
  );
};
