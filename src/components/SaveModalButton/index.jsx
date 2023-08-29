import React, { useState } from "react";
import { Button } from "./SaveModalButton.styles";
import { getThemeColors } from "../../utilities/getThemeColors";

export const SaveModalButton = ({ onClick }) => {
  const { main, text } = getThemeColors();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      background={isHovered ? main : "#06D554"}
      border={isHovered ? `1px solid ${text}` : ""}
      onClick={onClick}
    >
      Save and Continue
    </Button>
  );
};
