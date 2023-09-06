export const getAppError = (state) => {
  if (state.navBar.isError || state.coins.isError || state.coinsTable.isError) {
    return true;
  } else {
    return false;
  }
};
