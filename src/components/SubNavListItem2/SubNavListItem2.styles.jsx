import styled from "styled-components";

export const HoverDiv2 = styled.div`
  width: 440px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: 100px;
  margin-left: -600px;
  transition: all 0.2s ease-in-out;
`;
