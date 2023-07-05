import styled from "styled-components";

export const CoinPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text};
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
