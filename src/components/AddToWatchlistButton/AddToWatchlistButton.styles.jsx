import styled from "styled-components";

export const Svg = styled.svg`
  width: 25px;
  color: ${(props) => props.color};
  cursor: pointer;
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.h4`
  font-weight: normal;
  margin-right: 10px;
`;
