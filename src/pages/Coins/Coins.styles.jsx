import styled from "styled-components";
import React from "react";

export const CoinsPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: ${(props) => props.theme.text};
`;
export const HeaderDiv = styled.div`
  margin-bottom: 20px;
  width: 92%;
`;
export const CoinsTableContainer = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CoinsTable = styled.table`
  width: 100%;
  padding: 5px;
  background: ${(props) => props.theme.main};
`;
export const TableHeader = styled.th`
  height: 65px;
  text-align: left;
  border-bottom: 1px solid #707070;
  padding: 10px;
`;
export const TableRow = styled.tr`
  margin-bottom: 50px;
`;
export const TableData = styled.td`
  height: 65px;
  border-bottom: 1px solid #707070;
  padding: 10px;
`;
export const PercentageChangeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const CoinName = styled.td`
  display: flex;
  align-items: center;
  height: 75px;
  border-bottom: 1px solid #707070;
  padding: 10px;
`;
export const CoinLogo = styled.img`
  width: 34px;
  margin-right: 10px;
`;
export const ChartsWrapper = styled.div`
  width: 92%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ChartContainer = styled.div`
  width: 50%;
`;
export const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #00fc2a;
`;
export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-top: 5px solid #fe1040;
`;
