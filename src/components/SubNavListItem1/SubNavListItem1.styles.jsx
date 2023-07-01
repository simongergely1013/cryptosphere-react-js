import styled from "styled-components";

export const StyledListItemSubNav = styled.li`
  list-style-type: none;
  cursor: pointer;
`;
export const HoverDiv1 = styled.div`
  width: 400px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-left: -850px;
  margin-top: 100px;
`;
