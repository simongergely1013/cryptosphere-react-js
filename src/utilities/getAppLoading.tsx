import { RootState } from "../store";

export const getAppLoading = (state: RootState) => {
  return (
    state.navBar.isLoading &&
    state.coins.isLoading &&
    state.coinsTable.isLoading
  );
};
