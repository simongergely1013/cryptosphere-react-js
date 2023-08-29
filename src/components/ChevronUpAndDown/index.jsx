import React, { useState } from "react";
import { ChevronSvg } from "./ChevronUpAndDown.styles";

export const ChevronUpAndDown = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ChevronSvg
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      color={isHovered ? "#2172e5" : ""}
    />
  );
};
