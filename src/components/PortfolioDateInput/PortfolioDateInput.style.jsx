import styled from "styled-components";

export const DateInput = styled.input`
  width: 100%;
  height: 28%;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  border-radius: 20px;
  padding-left: 34px;
  font-size: 19px;
  font-weight: normal;
`;
