const getDate = () => {
  return new Date();
};
export const day = getDate().toString().slice(8, 10);
export const month = getDate().toString().slice(4, 7);
export const year = getDate().toString().slice(11, 15);
