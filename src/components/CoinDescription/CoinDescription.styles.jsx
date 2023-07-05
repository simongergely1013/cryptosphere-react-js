import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  width: 96%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.main};
  padding: 30px;
  margin-bottom: 50px;
  border-radius: 20px;
`;
export const CoinDescriptionDiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 19px;
  text-align: center;
  margin-top: 30px;
`;
