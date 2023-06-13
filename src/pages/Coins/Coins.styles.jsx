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
  height: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CoinsTable = styled.div`
  width: 100%;
  padding: 5px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  overflow: auto;
`;
export const NumeroHeader = styled.div`
  height: 65px;
  width: 20px;
  text-align: left;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;
export const TableHeader = styled.div`
  height: 65px;
  width: 100px;
  text-align: left;
  border-bottom: 1px solid #707070;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;
export const NameHeader = styled.div`
  height: 65px;
  width: 318px;
  text-align: left;
  border-bottom: 1px solid #707070;
  padding-left: 72px;
  display: flex;
  align-items: center;
`;
export const TableHeader2 = styled.div`
  height: 65px;
  width: 270px;
  text-align: left;
  border-bottom: 1px solid #707070;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;
export const TableHeader3 = styled.div`
  height: 65px;
  width: 135px;
  text-align: center;
  border-bottom: 1px solid #707070;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;
export const TableHeaderRow = styled.div`
  display: flex;
`;
export const CoinsRowsContainer = styled.div`
  overflow: auto;
`;
export const TableRow = styled.div`
  margin-bottom: 5px;
  box-shadow: inset 0px 0px 1px 0px ghostwhite;
  display: flex;
  align-items: center;
`;
export const TableData = styled.div`
  width: 100px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;
export const TableData2 = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 20px;
`;
export const TableData3 = styled.div`
  width: 135px;
  display: flex;
  align-items: center;
`;
export const PercentageChangeDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const CoinName = styled.div`
  padding-left: 72px;
  display: flex;
  align-items: center;
  width: 307px;
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
  margin-top: -420px;
  margin-left: -590px;
`;
export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 350px;
  padding: 100px 50px 0px 50px;
  background: ${(props) => props.theme.main};
  margin: 20px;
  border-radius: 10px;
`;
export const TopChartDiv = styled.div`
  width: 100%;
`;
export const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #00fc2a;
  margin-right: 5px;
`;
export const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fe1040;
  margin-right: 5px;
`;
export const SmallChartWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
