import React from "react";
import styled from "styled-components";
import { BulletPoint, TrendingUp, TrendingDown } from "../NavBar/NavBar.styles";

export const ListItemWithProgress: styled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: disc;
  cursor: pointer;
  color: ${(props: { color: string; }) => props.color};
  font-size: 16px;
  font-weight: 500;
`;
const HoverDiv3: styled = styled.div`
  width: 350px;
  padding: 10px;
  background: ${(props: { theme: { main: string; }; }) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: 100px;
  margin-left: -300px;
  transition: all 0.2s ease-in-out;
`;
const HoverDivInner: styled = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSpan: styled = styled.span`
  font-weigth: bold;
  color: ${(props: { color: string; }) => props.color};
  margin-left: 8px;
  transition: all 0.2s ease-in-out;
`;
type TotalMarketCapHoverDivProps = {
  totalMarketCap: string,
  changePercentage: number,
  text: string,
  color: string,
}
export const TotalMarketCapHoverDiv = ({
  totalMarketCap,
  changePercentage,
  text,
  color,
}:TotalMarketCapHoverDivProps) => {
  return (
    <HoverDiv3>
      <HoverDivInner>
        <BulletPoint />
        Total Market Cap:{" "}
        <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
          {totalMarketCap}
          {text}
        </span>
      </HoverDivInner>
      <HoverDivInner>
        <BulletPoint />
        24h Change: <StyledSpan color={color}>{changePercentage}%</StyledSpan>
        {changePercentage > 0 ? <TrendingUp /> : <TrendingDown />}
      </HoverDivInner>
    </HoverDiv3>
  );
};
