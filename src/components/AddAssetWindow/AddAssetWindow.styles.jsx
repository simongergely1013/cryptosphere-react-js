import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.navBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  width: 25%;
  height: 100%;
  background: ${(props) => props.theme.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  paddin: 0px 5px 0px 5px;
  align-items: center;
  border-radius: 20px;
  margin-right: 20px;
`;
export const Text = styled.h2`
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 15px;
`;
export const BottomRow = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
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
  justify-content: space-between;
  align-items: center;
`;
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
