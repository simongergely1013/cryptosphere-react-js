import styled from "styled-components";

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
`;
export const CoinLogo = styled.img`
  width: 34px;
`;
export const ChartsWrapper = styled.div`
  width: 92%;
  display: flex;
`;
export const ChartContainer = styled.div`
  width: 50%;
`;
