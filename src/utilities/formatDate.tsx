export const formatDate = (date: string) => {
  const formattedDate = new Date(date).getDate();
  return formattedDate;
};
