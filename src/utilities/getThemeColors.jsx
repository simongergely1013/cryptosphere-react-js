export const getThemeColors = () => {
  const theme = localStorage.getItem("theme");
  return JSON.parse(theme);
};
