import styled from "styled-components";

export const DateInput = styled.input`
  width: 85%;
  height: 28%;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  border-radius: 20px;
  padding-left: 34px;
  padding-right: 25px;
  font-size: 19px;
  font-weight: normal;
`;
