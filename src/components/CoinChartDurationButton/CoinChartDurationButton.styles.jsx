import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 15px;
`;
export const Button = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid #06d554;
  background: ${(props) => props.background};
  cursor: pointer;
  transition: color ease-in-out;
`;
