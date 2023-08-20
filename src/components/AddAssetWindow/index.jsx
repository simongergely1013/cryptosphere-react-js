import React from "react";
import {
  Wrapper,
  TopRow,
  HeaderDiv,
  EscDiv,
  MiddleRow,
  Box,
  FormWrapper,
  Form,
  BottomRow,
  Input,
} from "./AddAssetWindow.styles";
import { XButtonModal } from "../XButtonModal";
import { CloseModalButton } from "../CloseModalButton";
import { SaveModalButton } from "../SaveModalButton";
import { PortfolioCoinSearch } from "../PortfolioCoinSearch";

export const AddAssetWindow = ({
  onClickX,
  onClickCloseButton,
  onClickSave,
}) => {
  const handleSubmit = () => {};
  return (
    <Wrapper>
      <TopRow>
        <HeaderDiv>Select Coins</HeaderDiv>
        <EscDiv>
          <XButtonModal onClick={onClickX}>close</XButtonModal>
        </EscDiv>
      </TopRow>
      <MiddleRow>
        <Box></Box>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <PortfolioCoinSearch />
            <Input />
            <Input />
          </Form>
        </FormWrapper>
      </MiddleRow>
      <BottomRow>
        <CloseModalButton onClick={onClickCloseButton} />
        <SaveModalButton onClick={onClickSave} />
      </BottomRow>
    </Wrapper>
  );
};
