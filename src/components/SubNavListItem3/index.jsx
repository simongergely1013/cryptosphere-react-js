import React from "react";
import { useState } from "react";
import { ListItemWithProgress } from "./SubNavListItem3.styles";
import { BulletPoint, TrendingUp, TrendingDown } from "../NavBar/NavBar.styles";
import { TotalMarketCapHoverDiv } from "./SubNavListItem3.styles";

export const SubNavListItem3 = ({
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
        color={hovered && "#BDBDBD"}
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
