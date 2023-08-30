import React, { useState } from "react";
import { ConversionSvg } from "./CurrencyConversionIcon.styles";

export const CurrencyConversionIcon = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ConversionSvg
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
        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </ConversionSvg>
  );
};
