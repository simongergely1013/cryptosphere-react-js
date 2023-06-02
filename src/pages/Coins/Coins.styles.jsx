import styled from "styled-components";

export const CoinsPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  color: ${(props) => props.theme.text};
`;
export const HeaderDiv = styled.div`
  margin-bottom: 30px;
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
  border-radius: 10px;
`;
export const TableHeader = styled.th`
  height: 65px;
  text-align: left;
  border-bottom: 1px solid #707070;
  padding: 10px;
`;
export const TableRow = styled.tr`
  margin-bottom: 50px;
  box-shadow: inset 0px 0px 1px 0px ghostwhite;
`;
export const TableData = styled.td`
  padding: 10px;
  // border: 1px solid red;
`;
export const PercentageChangeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const CoinName = styled.td`
  padding: 10px;
`;
export const CoinNameInnerDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const CoinLogo = styled.img`
  width: 34px;
  margin-right: 10px;
`;
export const ChartsWrapper = styled.div`
  width: 94%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
export const TopChartHeader = styled.div`
  position: absolute;
  z-index: 10;
  margin-top: -85px;
  margin-left: -30px;
`;
export const ChartContainer = styled.div`
  width: 50%;
  height: 350px;
  padding: 100px 50px 0px 50px;
  background: ${(props) => props.theme.main};
  margin: 20px;
  border-radius: 10px;
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
export const SmallChartWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  padding-top: 20px;
`;
