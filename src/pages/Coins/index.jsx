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
import { getButtonColor } from "../../utilities/getButtonColor";
import { getAppLoading } from "../../utilities/getAppLoading";
import { getAppError } from "../../utilities/getAppError";

const Coins = () => {
  const { currency } = useContext(CurrencyContext);
  const { background } = getThemeColors();
  const dispatch = useDispatch();
  const isAppLoading = useSelector((state) => getAppLoading(state));
  const isAppError = useSelector((state) => getAppError(state));
  const {
    chartHours,
    btcCurrentPrice,
    btcCurrentVolume,
    btcPrices,
    btcVolumes,
  } = useSelector((state) => state.coins);

  const [btcChartDuration, setBtcChartDuration] = useLocalState(
    "btcChartDuration",
    30
  );

  useEffect(() => {
    dispatch(getCoinsData(currency));
    dispatch(getChartsData(currency, btcChartDuration));
  }, [currency, btcChartDuration]);

  return (
    <CoinsPageWrapper>
      <PageHeader text={"Your Overview"} />
      <ChartsWrapper>
        <TopChartHeaderRow>
          <TopChartTitlePrice
            btcPrice={btcCurrentPrice}
            day={day}
            month={month}
            year={year}
          />
          <TopChartTitleVolume
            btcVolume={btcCurrentVolume}
            day={day}
            month={month}
            year={year}
          />
        </TopChartHeaderRow>
        <ChartsWrapperInner>
          <LineChart
            data={btcPricesData(chartHours, btcPrices)}
            isLoading={isAppLoading}
            isError={isAppError}
          />
          <BarChart
            data={btcVolumesData(chartHours, btcVolumes)}
            isLoading={isAppLoading}
            isError={isAppError}
          />
        </ChartsWrapperInner>
      </ChartsWrapper>
      <ChartDurationRow>
        <BtcChartDurationButton
          duration={"1 month"}
          onClick={() => setBtcChartDuration(30)}
          background={getButtonColor(btcChartDuration === 30, background)}
        />
        <BtcChartDurationButton
          duration={"3 months"}
          onClick={() => setBtcChartDuration(90)}
          background={getButtonColor(btcChartDuration === 90, background)}
        />
        <BtcChartDurationButton
          duration={"1 year"}
          onClick={() => setBtcChartDuration(365)}
          background={getButtonColor(btcChartDuration === 365, background)}
        />
        <BtcChartDurationButton
          duration={"All time"}
          onClick={() => setBtcChartDuration("max")}
          background={getButtonColor(btcChartDuration === "max", background)}
        />
      </ChartDurationRow>
      <PageHeader text={"TOP 50 by Market Cap"} />
      <CoinsTable isLoading={isAppLoading} isError={isAppError} />
    </CoinsPageWrapper>
  );
};

export default Coins;
