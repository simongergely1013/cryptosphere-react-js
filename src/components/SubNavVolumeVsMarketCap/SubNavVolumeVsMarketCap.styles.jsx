import styled from "styled-components";
import { BulletPoint } from "../NavBar/NavBar.styles";

export const ListItemWithProgress = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: disc;
  cursor: pointer;
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 500;
`;
export const ProgressBar = styled.div`
  width: 60px;
  height: 14px;
  border-radius: 20px;
  margin-left: 8px;
  background: #2172e5;
`;
export const TotalVolumeProgressBar = styled.div`
  height: 100%;
  width: ${(props) => props.percent.totalVolumePercent}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
  margin-left: 2px;
  transition: all 0.2s ease-in-out;
`;
const HoverDiv4 = styled.div`
  width: 350px;
  padding: 10px;
  background: ${(props) => props.theme.main};
  border-radius: 10px;
  z-index: 30;
  position: absolute;
  margin-top: 160px;
  margin-left: 100px;
  transition: all 0.2s ease-in-out;
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
const TotalVolumeProgressBarHover = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  border-radius: 20px;
  background: ${(props) => props.theme.progressBarsBackground};
  margin-left: 2px;
  transition: all 0.2s ease-in-out;
`;
export const VolumeVsMarketCapDiv = ({
  volume,
  totalMarketCap,
  totalVolumePercent,
}) => {
  return (
    <HoverDiv4>
      <p>24h Volume vs Total Market Cap</p>
      <HoverDivInner>
        <BulletPoint />
        24h Volume:{" "}
        <span style={{ fontWeight: "bold", marginLeft: "8px" }}>{volume}</span>
      </HoverDivInner>
      <HoverDivInner>
        <BulletPoint />
        Total Market Cap:
        <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
          {totalMarketCap}
        </span>
      </HoverDivInner>
      <ProgressBarHover>
        <TotalVolumeProgressBarHover width={totalVolumePercent} />
      </ProgressBarHover>
      <p style={{ fontWeight: "bold" }}>{totalVolumePercent}%</p>
    </HoverDiv4>
  );
};
