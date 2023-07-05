import styled from "styled-components";
import { BulletPoint, TrendingUp, TrendingDown } from "../NavBar/NavBar.styles";

export const ListItemWithProgress = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: disc;
  cursor: pointer;
`;
const HoverDiv3 = styled.div`
  width: 350px;
  padding: 10px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: 100px;
  margin-left: -300px;
`;
const HoverDivInner = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSpan = styled.span`
  font-weigth: bold;
  color: ${(props) => props.color};
  margin-left: 8px;
`;
export const TotalMarketCapHoverDiv = ({
  totalMarketCap,
  changePercentage,
  text,
  color,
}) => {
  return (
    <HoverDiv3>
      <HoverDivInner>
        <BulletPoint />
        Total Market Cap:{" "}
        <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
          {totalMarketCap}
          {text}
        </span>
      </HoverDivInner>
      <HoverDivInner>
        <BulletPoint />
        24h Change: <StyledSpan color={color}>{changePercentage}%</StyledSpan>
        {changePercentage > 0 ? <TrendingUp /> : <TrendingDown />}
      </HoverDivInner>
    </HoverDiv3>
  );
};
