import React from "react";
import { useState } from "react";
import { ListItemWithProgress } from "./SubNavTotalMarketCap.styles";
import { BulletPoint, TrendingUp, TrendingDown } from "../NavBar/NavBar.styles";
import { SubNavLoadingBar } from "../SubNavLoadingBar";
import { TotalMarketCapHoverDiv } from "./SubNavTotalMarketCap.styles";
import { hoverColor } from "../../App.styles";

type SubNavTotalMarketCapProps = {
  marketCap: string,
  text: string,
  marketCapChange24h: number,
  color: string,
  isLoading: boolean,
  isError: boolean,
}

export const SubNavTotalMarketCap = ({
  marketCap,
  text,
  marketCapChange24h,
  color,
  isLoading,
  isError,
}:SubNavTotalMarketCapProps): React.JSX.Element => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {isLoading || isError ? (
        <SubNavLoadingBar />
      ) : (
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
      )}
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
