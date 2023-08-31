import React from "react";
import styled from "styled-components";

export const ConversionDiv = styled.div`
  width: 330px;
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
const CurrencyDivStyled = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #06d554;
  font-size: 17px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;
export const CurrencyDiv = ({ currency }) => {
  return <CurrencyDivStyled>{currency}</CurrencyDivStyled>;
};
const ConversionInputStyled = styled.input`
  width: 75%;
  height: 100%;
  font-size: 14px;
  padding: 0px 15px 0px 15px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
export const ConversionInput = ({ value, onChange }) => {
  return (
    <ConversionInputStyled
      type="number"
      onChange={onChange}
      value={value}
      placeholder="Enter value..."
    />
  );
};
