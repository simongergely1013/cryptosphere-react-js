import styled from "styled-components";

export const CoinsPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text};
`;
export const HeaderDiv = styled.div`
  margin-bottom: 30px;
  width: 98%;
`;
export const ChartsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
export const ChartsWrapperInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const TopChartHeaderRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 20;
  margin-bottom: -130px;
`;
export const TopChartHeader = styled.div`
  width: 50%;
  padding-left: 55px;
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
