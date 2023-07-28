export const getLocalStorageItem = (string) => {
  const item = JSON.parse(localStorage.getItem(string));
  return item;
};
