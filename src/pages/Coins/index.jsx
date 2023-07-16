import CoinsTable from "../../components/CoinsTable";
import { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { useLocalState } from "../../hooks";
import { getCoinsData, getChartsData } from "../../store/coins/actions";
import { PageHeader } from "../../components/PageHeader";
import { TopChartTitlePrice } from "../../components/TopChartTitlePrice";
import { TopChartTitleVolume } from "../../components/TopChartTitleVolume";
import { ChartDurationRow } from "./Coin/Coin.styles";
import { BtcChartDurationButton } from "../../components/BtcChartDurationButton";
import {
  CoinsPageWrapper,
  ChartsWrapper,
  ChartsWrapperInner,
  TopChartHeaderRow,
} from "./Coins.styles";
import { day, month, year } from "../../utilities";
import { LineChart } from "../../components/LineChart";
import { BarChart } from "../../components/BarChart";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { btcPricesData, btcVolumesData, getThemeColors } from "../../utilities";

const Coins = (props) => {
  const { currency } = useContext(CurrencyContext);
  const { background } = getThemeColors();
  const [btcChartDuration, setBtcChartDuration] = useLocalState(
    "btcChartDuration",
    1
  );
  useEffect(() => {
    props.getCoinsData();
    props.getChartsData();
  }, [currency, btcChartDuration]);
  return (
    <CoinsPageWrapper>
      <PageHeader text={"Overview"} />
      <ChartsWrapper>
        <TopChartHeaderRow>
          <TopChartTitlePrice
            btcPrice={props.btcCurrentPrice}
            day={day}
            month={month}
            year={year}
          />
          <TopChartTitleVolume
            btcVolume={props.btcCurrentVolume}
            day={day}
            month={month}
            year={year}
          />
        </TopChartHeaderRow>
        <ChartsWrapperInner>
          <LineChart data={btcPricesData(props.chartHours, props.btcPrices)} />
          <BarChart data={btcVolumesData(props.chartHours, props.btcVolumes)} />
        </ChartsWrapperInner>
      </ChartsWrapper>
      <ChartDurationRow>
        <BtcChartDurationButton
          duration={"1d"}
          onClick={() => setBtcChartDuration(1)}
          background={btcChartDuration === 1 ? "#06d554" : background}
        />
        <BtcChartDurationButton
          duration={"7d"}
          onClick={() => setBtcChartDuration(7)}
          background={btcChartDuration === 7 ? "#06d554" : background}
        />
        <BtcChartDurationButton
          duration={"30d"}
          onClick={() => setBtcChartDuration(30)}
          background={btcChartDuration === 30 ? "#06d554" : background}
        />
        <BtcChartDurationButton
          duration={"90d"}
          onClick={() => setBtcChartDuration(90)}
          background={btcChartDuration === 90 ? "#06d554" : background}
        />
        <BtcChartDurationButton
          duration={"1y"}
          onClick={() => setBtcChartDuration(365)}
          background={btcChartDuration === 365 ? "#06d554" : background}
        />
        <BtcChartDurationButton
          duration={"Max"}
          onClick={() => setBtcChartDuration("max")}
          background={btcChartDuration === "max" ? "#06d554" : background}
        />
      </ChartDurationRow>
      <PageHeader text={"TOP 50 by Market Cap"} />
      <CoinsTable />
    </CoinsPageWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    btcCurrentPrice: state.coins.btcCurrentPrice,
    btcCurrentVolume: state.coins.btcCurrentVolume,
    btcPrices: state.coins.btcPrices,
    btcVolumes: state.coins.btcVolumes,
    chartHours: state.coins.chartHours,
    isLoading: state.coins.isLoading,
    error: state.coins.error,
  };
};
const mapDispatchToProps = {
  getCoinsData,
  getChartsData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Coins);
