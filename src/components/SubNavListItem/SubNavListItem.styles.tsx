import React from "react";
import styled from "styled-components";

export const StyledListItemSubNav: styled = styled.li`
  list-style-type: none;
  cursor: pointer;
  color: ${(props: { color: string; }) => props.color};
  font-size: 16px;
  font-weight: 500;
`;
const HoverDiv1: styled = styled.div`
  width: 450px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: { theme: { main: string; }; }) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-left: -850px;
  margin-top: 100px;
  transition: all 0.2s ease-in-out;
`;
type CoinsHoverDivProps = {
  coins: number,
  text: string
}
export const CoinsHoverDiv = ({ coins, text }: CoinsHoverDivProps): React.JSX.Element => {
  return (
    <HoverDiv1>
      <p>
        {text}:{" "}
        <span style={{ color: "#00FC2A", fontWeight: "bold" }}>{coins}</span>
      </p>
    </HoverDiv1>
  );
};
