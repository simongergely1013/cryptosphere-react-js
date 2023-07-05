import React from "react";
import styled from "styled-components";

export const ConversionDiv = styled.div`
  width: 330px;
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
const ConversionSvg = styled.svg`
  width: 50px;
  height: 30px;
  cursor: pointer;
  margin: 0px 20px 0px 20px;
`;
export const ConversionIcon = ({ onClick }) => {
  return (
    <ConversionSvg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </ConversionSvg>
  );
};
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
