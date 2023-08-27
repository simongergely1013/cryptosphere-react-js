import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 28%;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.text};
  border-radius: 20px;
  padding-left: 34px;
  font-size: 19px;
  font-weight: normal;
`;
export const SearchList = styled.div`
  width: 250px;
  background: ${(props) => props.theme.navBackground};
  border-radius: 20px;
  position: absolute;
  z-index: 50;
  margin-top: 73px;
  left: 40%;
  padding: 5px 20px 20px 20px;
`;
export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
`;
