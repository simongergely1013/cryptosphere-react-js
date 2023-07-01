import styled from "styled-components";
import { BulletPoint } from "../NavBar/NavBar.styles";

export const ListItemWithProgress = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: disc;
  cursor: pointer;
`;
const EthereumLogoSubNav = styled.svg`
  width: 16px;
  margin-right: 8px;
`;
export const ProgressBar = styled.div`
  width: 60px;
  height: 14px;
  border-radius: 20px;
  margin-left: 8px;
  background: #2172e5;
`;
export const EthDominanceProgeressBar = styled.div`
  height: 100%;
  width: ${(props) => props.percent.ethDominancePercent}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
`;
export const EthereumSvgSubNav = () => {
  return (
    <EthereumLogoSubNav
      viewBox="420.1 80.7 1079.8 1758.6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m959.8 80.7-539.7 895.6 539.7-245.3z" fill="#8a92b2" />
      <path
        d="m959.8 731-539.7 245.3 539.7 319.1zm539.8 245.3-539.8-895.6v650.3z"
        fill="#62688f"
      />
      <path d="m959.8 1295.4 539.8-319.1-539.8-245.3z" fill="#454a75" />
      <path d="m420.1 1078.7 539.7 760.6v-441.7z" fill="#8a92b2" />
      <path d="m959.8 1397.6v441.7l540.1-760.6z" fill="#62688f" />
    </EthereumLogoSubNav>
  );
};
const HoverDiv7 = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: 100px;
  margin-left: 800px;
`;
export const EthDominanceHoverDiv1 = ({ ethDominance }) => {
  return (
    <HoverDiv7>
      <BulletPoint />
      <p>
        Ethereum(ETH) Dominance:{" "}
        <span style={{ fontWeight: "bold" }}>{ethDominance}%</span>
      </p>
    </HoverDiv7>
  );
};
const HoverDiv8 = styled.div`
  align-items: center;
  padding: 10px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: 200px;
  margin-left: 900px;
`;
const HoverDivInner = styled.div`
  display: flex;
  align-items: center;
`;
const ProgressBarHover = styled.div`
  width: 100%;
  height: 14px;
  border-radius: 20px;
  background: #2172e5;
`;
const EthDominanceProgressBarHover = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
`;
export const EthDominanceHoverDiv2 = ({
  ethMarketCap,
  totalMarketCap,
  ethDominancePercent,
}) => {
  return (
    <HoverDiv8>
      ETH Market Cap vs Total Market Cap
      <HoverDivInner>
        <BulletPoint />
        <p>
          ETH Market Cap:{" "}
          <span style={{ fontWeight: "bold" }}>{ethMarketCap}</span>
        </p>
      </HoverDivInner>
      <HoverDivInner>
        <BulletPoint />
        <p>
          Total Market Cap:{" "}
          <span style={{ fontWeight: "bold" }}>{totalMarketCap}</span>
        </p>
      </HoverDivInner>
      <ProgressBarHover>
        <EthDominanceProgressBarHover width={ethDominancePercent} />
      </ProgressBarHover>
      <p style={{ fontWeight: "bold" }}>{ethDominancePercent}%</p>
    </HoverDiv8>
  );
};
