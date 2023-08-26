import styled from "styled-components";

export const CoinBoxContainer = styled.div`
  width: 25%;
  height: 350px;
  margin: 15px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CoinBox = styled.div`
  width: 100%;
  height: 80%;
  background: ${(props) => props.theme.main};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;
export const CoinBoxInner = styled.div`
  width: 50%;
  height: 50%;
  background: ${(props) => props.theme.background};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
`;
export const CoinImage = styled.img`
  width: 50%;
`;
export const CoinName = styled.h2`
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 25px;
`;
