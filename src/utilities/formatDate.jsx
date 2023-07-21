export const formatDate = (date) => {
  const formattedDate = new Date(date).getHours() + ":" + "00";
  return formattedDate;
};
