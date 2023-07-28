export const getRandomColor = () => {
  const colors = [
    "#FEE158",
    "#FFB528",
    "#8A92B2",
    "#1BA27A",
    "#E4CD82",
    "#BB9F33",
    "#FFDCCE",
    "#FE7D43",
    "#F4B2B0",
    "#B3404A",
    "#2775C9",
    "#F09242",
  ];
  const index = Math.floor(Math.random() * 12);
  return colors[index];
};
