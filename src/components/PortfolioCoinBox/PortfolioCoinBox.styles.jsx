import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100px;
  background: ${(props) => props.theme.main};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  padding: 0px 15px 0px 15px;
`;
export const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h4`
  font-size: 18px;
  font-weight: normal;
  margin-right: 12px;
`;
export const Data = styled.h4`
  font-size: 18px;
  font-weight: normal;
  color: ${(props) => props.color};
`;
