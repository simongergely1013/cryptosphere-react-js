import React from "react";
import { useState } from "react";
import { ButtonContainer, Button } from "./BtcChartDurationButton.styles";

export const BtcChartDurationButton = ({ duration, onClick, background }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <ButtonContainer>
      <Button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        background={hovered ? "#06d554" : background}
      />
      {duration}
    </ButtonContainer>
  );
};
