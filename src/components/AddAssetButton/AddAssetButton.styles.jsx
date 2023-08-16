import styled from "styled-components";

export const AddAsset = styled.div`
  width: 40%;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  color: ${(props) => props.theme.text};
  margin-top: 74px;
  margin-bottom: 35px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid ${(props) => props.borderColor};
`;
