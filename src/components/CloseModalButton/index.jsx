import React, { useState } from "react";
import { Button } from "./CloseModalButton.styles";
import { getThemeColors } from "../../utilities/getThemeColors";

export const CloseModalButton = ({ onClick }) => {
  const { main } = getThemeColors();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      background={isHovered ? main : "#FFFFFF"}
      onClick={onClick}
    >
      Close
    </Button>
  );
};
