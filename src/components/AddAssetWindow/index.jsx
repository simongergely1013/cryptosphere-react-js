import React, { useState, useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import {
  Wrapper,
  TopRow,
  HeaderDiv,
  EscDiv,
  MiddleRow,
  Box,
  Text,
  FormWrapper,
  Form,
  BottomRow,
} from "./AddAssetWindow.styles";
import { XButtonModal } from "../XButtonModal";
import { CloseModalButton } from "../CloseModalButton";
import { SaveModalButton } from "../SaveModalButton";
import { PortfolioCoinSearch } from "../PortfolioCoinSearch";
import { PortfolioCoinAmountInput } from "../PortfolioCoinAmountInput";
import { PortfolioDateInput } from "../PortfolioDateInput";

export const AddAssetWindow = ({ onClickX, onClickCloseButton, addAsset }) => {
  const { currency } = useContext(CurrencyContext);
  const [newAsset, setNewAsset] = useState({});

  const setCoinId = (id) => {
    setNewAsset({ ...newAsset, id });
  };
  const setCoinAmount = (amount) => {
    setNewAsset({ ...newAsset, amount });
  };
  const setCoinDate = (date) => {
    date = date.split("-").reverse().join("-");
    setNewAsset({ ...newAsset, date });
  };
  const handleSave = () => {
    if (
      newAsset === undefined ||
      newAsset.amount <= 0 ||
      newAsset.id === undefined ||
      newAsset.amount === undefined ||
      newAsset.date === undefined
    ) {
      return;
    } else {
      addAsset(newAsset, currency);
    }
  };
  return (
    <Wrapper>
      <TopRow>
        <HeaderDiv>Select Coins</HeaderDiv>
        <EscDiv>
          <XButtonModal onClick={onClickX} />
        </EscDiv>
      </TopRow>
      <MiddleRow>
        <Box>
          <Text>1. Choose a coin.</Text>
          <Text>2. Enter the amount you want to purchase.</Text>
          <Text>3. Select the date of purchase.</Text>
        </Box>
        <FormWrapper>
          <Form>
            <PortfolioCoinSearch setId={setCoinId} />
            <PortfolioCoinAmountInput setAmount={setCoinAmount} />
            <PortfolioDateInput setDate={setCoinDate} />
          </Form>
        </FormWrapper>
      </MiddleRow>
      <BottomRow>
        <CloseModalButton onClick={onClickCloseButton} />
        <SaveModalButton onClick={handleSave} />
      </BottomRow>
    </Wrapper>
  );
};
