import { RootState } from "../store";

export const getAppError = (state: RootState) => {
  if (state.navBar.isError || state.coins.isError || state.coinsTable.isError) {
    return true;
  } else {
    return false;
  }
};
