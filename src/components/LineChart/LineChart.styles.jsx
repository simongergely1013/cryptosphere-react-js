import styled from "styled-components";

export const SmallChartWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-top: 120px;
  padding-bottom: 35px;
  background: ${(props) => props.theme.main};
  margin: 10px;
  border-radius: 10px;
  transition: all 0.2s ease;
`;
export const TopChartDiv = styled.div`
  width: 80%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BigChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
