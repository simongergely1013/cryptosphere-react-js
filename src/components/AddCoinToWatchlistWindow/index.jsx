import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Wrapper,
  TopRow,
  HeaderDiv,
  EscDiv,
  MiddleRow,
  FormWrapper,
  Form,
  BottomRow,
} from "./AddCoinToWatchListWindow.styles";
import { XButtonModal } from "../XButtonModal";
import { WatchlistCoinSearch } from "../WatchlistCoinSearch";
import { CloseModalButton } from "../CloseModalButton";
import { SaveModalButton } from "../SaveModalButton";
import { addToWatchlist } from "../../store/watchlist/actions";

export const AddCoinToWatchlistWindow = ({ onClickX, onClickCloseButton }) => {
  const dispatch = useDispatch();
  const [newAsset, setNewAsset] = useState("");

  const setCoinId = (id) => {
    setNewAsset(id);
  };
  const handleSave = () => {
    if (newAsset === undefined || newAsset === "") {
      return;
    } else {
      dispatch(addToWatchlist(newAsset));
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
        <FormWrapper>
          <Form>
            <WatchlistCoinSearch setId={setCoinId} />
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
