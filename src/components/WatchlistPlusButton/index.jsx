import React, { useState } from "react";
import { Div, Text, Svg } from "./WatchlistPlusButton.styles";

export const WatchlistPlusButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Div>
      <Text>Add to watchlist</Text>
      <Svg
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        color={isHovered ? "#2172e5" : ""}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </Svg>
    </Div>
  );
};
