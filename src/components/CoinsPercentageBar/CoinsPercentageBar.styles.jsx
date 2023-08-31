import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const NumberContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Number = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
`;
export const BulletPoint = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  margin-right: 10px;
  background: ${(props) => props.background};
`;

export const BarMain = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 20px;
  background: ${(props) => props.background};
`;
export const BarInner = styled.div`
  width: ${(props) => props.width};
  height: 10px;
  border-radius: 20px;
  background: ${(props) => props.background};
`;
