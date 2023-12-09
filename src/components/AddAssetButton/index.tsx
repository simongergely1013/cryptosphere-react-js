import React from "react";
import { useState } from "react";
import { AddAsset } from "./AddAssetButton.styles";
import { type } from "os";

type AddAssetProps = {
  text: string,
  background: string,
  borderColor: string,
  onClick: () => void
}

export const AddAssetButton = ({ text, background, borderColor, onClick } : AddAssetProps) => {
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
