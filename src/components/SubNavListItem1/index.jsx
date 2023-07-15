import React from "react";
import { useState } from "react";
import { StyledListItemSubNav, HoverDiv1 } from "./SubNavListItem1.styles";
import { hoverColor } from "../../App.styles";

const CoinsHoverDiv = ({ coins }) => {
  return (
    <HoverDiv1>
      <p>
        Number of existing coins in the markget:{" "}
        <span style={{ color: "#00FC2A", fontWeight: "bold" }}>{coins}</span>
      </p>
    </HoverDiv1>
  );
};

export const SubNavListItem1 = ({ text, data, coins }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <StyledListItemSubNav
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        color={hovered && hoverColor}
      >
        {text} {data}
      </StyledListItemSubNav>
      {hovered && <CoinsHoverDiv coins={coins} />}
    </>
  );
};
