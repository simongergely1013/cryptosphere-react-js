export const getAppLoading = (state) => {
  return (
    state.navBar.isLoading &&
    state.coins.isLoading &&
    state.coinsTable.isLoading
  );
};
