import styled from "styled-components";

export const CurrencySelect = styled.select`
  width: 130px;
  height: 43px;
  background: ${(props) => props.theme.navBackground};
  color: ${(props) => props.theme.text};
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  padding-left: 20px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
export const Option = styled.option`
  padding-left: 15px;
`;
