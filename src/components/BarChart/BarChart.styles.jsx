import styled from "styled-components";

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-top: 80px;
  background: ${(props) => props.theme.main};
  margin: 10px;
  border-radius: 10px;
  transition: background 1s ease-in-out;
`;
export const TopChartDiv = styled.div`
  width: 98%;
  height: 90%;
`;
