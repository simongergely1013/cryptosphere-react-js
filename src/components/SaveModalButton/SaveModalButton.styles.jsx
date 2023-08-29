import styled from "styled-components";

export const Button = styled.div`
  width: 30%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${(props) => props.background};
  color: ${(props) => props.text};
  cursor: pointer;
  font-size: 15px;
  font-weight: normal;
  border: ${(props) => props.border};
`;
