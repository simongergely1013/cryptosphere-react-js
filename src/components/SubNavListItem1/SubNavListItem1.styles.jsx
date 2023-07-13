import styled from "styled-components";

export const StyledListItemSubNav = styled.li`
  list-style-type: none;
  cursor: pointer;
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 500;
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
  transition: all 0.2s ease-in-out;
`;
