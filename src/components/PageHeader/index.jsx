import React from "react";
import { HeaderDiv } from "./PageHeader.styles";

export const PageHeader = ({ text }) => {
  return (
    <HeaderDiv>
      <h2>{text}</h2>
    </HeaderDiv>
  );
};
