import CoinsTable from "../../components/CoinsTable";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalState } from "../../hooks";
import { CurrencyContext } from "../../contexts/CurrencyContext";
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
import { day, month, year } from "../../utilities/getDate";
import { LineChart } from "../../components/LineChart";
import { BarChart } from "../../components/BarChart";
import { btcPricesData } from "../../utilities/btcPricesData";
import { btcVolumesData } from "../../utilities/btcVolumesData";
import { getThemeColors } from "../../utilities/getThemeColors";

const Coins = () => {
  const { currency } = useContext(CurrencyContext);
  const { background } = getThemeColors();
  const dispatch = useDispatch();
  const coinsData = useSelector((state) => state.coins);
  const chartHours = coinsData.chartHours;
  const isLoading = coinsData.isLoading;
  const error = coinsData.error;

  const [btcChartDuration, setBtcChartDuration] = useLocalState(
    "btcChartDuration",
    1
  );
  useEffect(() => {
    dispatch(getCoinsData());
    dispatch(getChartsData());
  }, [currency, btcChartDuration]);
  return (
    <CoinsPageWrapper>
      <PageHeader text={"Overview"} />
      <ChartsWrapper>
        <TopChartHeaderRow>
          <TopChartTitlePrice
            btcPrice={coinsData.btcCurrentPrice}
            day={day}
            month={month}
            year={year}
          />
          <TopChartTitleVolume
            btcVolume={coinsData.btcCurrentVolume}
            day={day}
            month={month}
            year={year}
          />
        </TopChartHeaderRow>
        <ChartsWrapperInner>
          <LineChart data={btcPricesData(chartHours, coinsData.btcPrices)} />
          <BarChart data={btcVolumesData(chartHours, coinsData.btcVolumes)} />
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

export default Coins;
