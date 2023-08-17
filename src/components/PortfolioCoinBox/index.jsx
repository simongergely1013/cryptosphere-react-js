import React from "react";
import { Div, InnerDiv, Title, Data } from "./PortfolioCoinBox.styles";

export const PortfolioCoinBox = ({
  title1,
  title2,
  title3,
  title4,
  data1,
  data2,
  data3,
  data4,
  color1,
  color2,
  child,
}) => {
  return (
    <Div>
      <InnerDiv>
        <Title>{title1}</Title>
        <Data color={color1}>{data1}</Data>
      </InnerDiv>
      <InnerDiv>
        <Title>{title2}</Title>
        <Data color={color1}>{data2}</Data>
      </InnerDiv>
      <InnerDiv>
        <Title>{title3}</Title>
        <Data color={color2}>{data3}</Data>
        {child}
      </InnerDiv>
      <InnerDiv>
        <Title>{title4}</Title>
        <Data>{data4}</Data>
      </InnerDiv>
    </Div>
  );
};
