import styled from "styled-components";

export const CoinPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding-left: 60px;
  padding-right: 60px;
  transition: background 1s ease-in-out;
`;
export const SummaryWrapper = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
export const CoinUrlsRow = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  margin-bottom: 50px;
`;
export const CurrencyConversionRow = styled.div`
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
export const ChartDurationRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;
