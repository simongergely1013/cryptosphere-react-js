import React from "react";
import { Div, InnerDiv, Title, Data } from "./PortfolioCoinBox.styles";
import { ProgressBar } from "../SubNavDominance/SubNavDominance.styles";

export const PortfolioCoinBox = ({
  title1,
  title2,
  title3,
  title4,
  data1,
  data2,
  data3,
  data4,
  color,
  child,
}) => {
  return (
    <Div>
      <InnerDiv>
        <Title>{title1}</Title>
        <Data color={color}>{data1}</Data>
      </InnerDiv>
      <InnerDiv>
        <Title>{title2}</Title>
        <Data color={color}>{data2}</Data>
      </InnerDiv>
      <InnerDiv>
        <Title>{title3}</Title>
        <Data>{data3}</Data>
        {child}
      </InnerDiv>
      <InnerDiv>
        <Title>{title4}</Title>
        <Data>{data4}</Data>
      </InnerDiv>
    </Div>
  );
};
