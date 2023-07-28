import React from "react";
import styled from "styled-components";

export const StyledListItemSubNav = styled.li`
  list-style-type: none;
  cursor: pointer;
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 500;
`;
const HoverDiv1 = styled.div`
  width: 450px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-left: -850px;
  margin-top: 100px;
  transition: all 0.2s ease-in-out;
`;
export const CoinsHoverDiv = ({ coins, text }) => {
  return (
    <HoverDiv1>
      <p>
        {text}:{" "}
        <span style={{ color: "#00FC2A", fontWeight: "bold" }}>{coins}</span>
      </p>
    </HoverDiv1>
  );
};
