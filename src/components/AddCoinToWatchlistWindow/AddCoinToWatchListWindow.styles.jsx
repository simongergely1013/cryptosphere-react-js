import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.navBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`;
export const TopRow = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
`;
export const HeaderDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: normal;
`;
export const EscDiv = styled.div`
  height: 15%;
  display: flex;
  right: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
export const MiddleRow = styled.div`
  width: 100%;
  height: 42.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormWrapper = styled.div`
  width: 50%;
  height: 100%;
`;
export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ButtonsDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BottomRow = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
