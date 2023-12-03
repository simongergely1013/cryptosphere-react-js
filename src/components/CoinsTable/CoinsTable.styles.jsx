import styled from "styled-components";
import { Link } from "react-router-dom";

export const CoinsTableWrapper = styled.div`
  width: 98%;
  height: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 17px;
  font-weight: normal;
  margin-bottom: 50px;
`;
export const CoinsTableContainer = styled.div`
  width: 100%;
  padding: 10px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  overflow: auto;
  transition: all 0.2s ease-in-out;
`;
export const TableHeaderRow = styled.div`
  display: flex;
`;
export const NumeroHeader = styled.div`
  height: 65px;
  width: 2%;
  text-align: left;
  padding-left: 15px;
  display: flex;
  align-items: center;
`;
export const NameHeader = styled.div`
  height: 65px;
  width: 15%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-left: 8px;

  display: flex;
  align-items: center;
`;
export const TableHeaderContainer1 = styled.div`
  width: 30%;
  display: flex;
`;
export const TableHeaderContainer2 = styled.div`
  width: 43%;
  display: flex;
  padding-left: 10px;
  padding-right: 15px;
  margin-right: -10px;
`;
export const Price = styled.div`
  height: 65px;
  width: 25%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px 0px 0px;
  margin-right: 8px;
`;
export const OneHourChange = styled.div`
  height: 65px;
  width: 25%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-left: 20px;
  padding: 0px 10px 0px 15px;
  margin-left: 8px;
`;
export const OneDayChange = styled.div`
  height: 65px;
  width: 25%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 0px 10px;
`;
export const OneWeekChange = styled.div`
  height: 65px;
  width: 25%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 0px 10px;
  margin-right: 10px;
`;
export const TableHeader1 = styled.div`
  height: 65px;
  width: 50px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
export const TableHeader2 = styled.div`
  height: 65px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TableHeader3 = styled.div`
  height: 65px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TableHeader4 = styled.div`
  height: 65px;
  width: 10%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  margin-right: 55px;
`;
export const CoinsRowsContainer = styled.div`
  height: 500;
  overflow: auto;
`;
export const TableRow = styled.div`
  height: 100px;
  margin-bottom: 5px;
  border-bottom: 1px solid #707070;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CoinName = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
`;
export const CoinNameInnerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`;
export const CoinLogo = styled.img`
  width: 34px;
  margin-right: 20px;
`;
export const CoinNameLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;
export const TableData1Container = styled.div`
  width: 27%;
  display: flex;
  justify-content: space-between;
`;
export const TableDataInnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TableData1 = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
`;
export const TableData2Container = styled.div`
  width: 41%;
  display: flex;
`;
export const TableData2 = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 10px;
`;
export const TableData3Container = styled.div`
  width: 14%;
  display: flex;
`;
export const TableData3 = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PercentageChangeDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
