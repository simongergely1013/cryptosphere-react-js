export const getDate = () => {
  return new Date();
};
export const getCurrentMonth = () => {
  const today = getDate();
  let month: string | number = today.getMonth().toString();
  switch (true) {
    case Number(month) < 10:
      month = "0" + (Number(month) + 1).toString();
      return month;
    default:
      month = (Number(month) + 1).toString();
      return month;
  }
};

export const day = getDate().toString().slice(8, 10);
export const month = getDate().toString().slice(4, 7);
export const year = getDate().toString().slice(11, 15);
