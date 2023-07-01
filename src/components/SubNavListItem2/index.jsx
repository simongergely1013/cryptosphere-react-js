import React from "react";
import { useState } from "react";
import { StyledListItemSubNav } from "../SubNavListItem1/SubNavListItem1.styles";
import { HoverDiv2 } from "./SubNavListItem2.styles";

const ExchangesHoverDiv = ({ exchanges }) => {
  return (
    <HoverDiv2>
      <p>
        Number of existing exchange markets to trade at:{" "}
        <span style={{ color: "gold", fontWeight: "bold" }}>{exchanges}</span>
      </p>
    </HoverDiv2>
  );
};

export const SubNavListItem2 = ({ text, data, exchanges }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <StyledListItemSubNav
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {text}
        {data}
      </StyledListItemSubNav>
      {hovered && <ExchangesHoverDiv exchanges={exchanges} />}
    </>
  );
};
