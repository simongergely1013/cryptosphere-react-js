import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 8px;
  border: 1px solid #06d554;
  background: ${(props) => props.background};
  transition: background 0.5s ease;
  cursor: pointer;
`;
