import React from "react";
import { useState } from "react";
import { ListItemWithProgress } from "./SubNavTotalMarketCap.styles";
import { BulletPoint, TrendingUp, TrendingDown } from "../NavBar/NavBar.styles";
import { TotalMarketCapHoverDiv } from "./SubNavTotalMarketCap.styles";
import { hoverColor } from "../../App.styles";

export const SubNavTotalMarketCap = ({
  marketCap,
  text,
  marketCapChange24h,
  color,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <ListItemWithProgress
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        color={hovered ? hoverColor : ""}
      >
        <BulletPoint />
        {marketCap}
        {text}
        {marketCapChange24h > 0 ? <TrendingUp /> : <TrendingDown />}
      </ListItemWithProgress>
      {hovered && (
        <TotalMarketCapHoverDiv
          totalMarketCap={marketCap}
          changePercentage={marketCapChange24h}
          color={color}
          text={text}
        />
      )}
    </>
  );
};
