import React from "react";
import { useState } from "react";
import { StyledListItemSubNav, CoinsHoverDiv } from "./SubNavListItem.styles";
import { hoverColor } from "../../App.styles";

export const SubNavListItem = ({ title, data1, data2, text }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <StyledListItemSubNav
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        color={hovered && hoverColor}
      >
        {title} {data1}
      </StyledListItemSubNav>
      {hovered && <CoinsHoverDiv coins={data2} text={text} />}
    </>
  );
};
