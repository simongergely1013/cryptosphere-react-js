import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCoinsData } from "../../store/coinsData/actions";
import { PageHeader } from "../../components/PageHeader";
import { TopChartTitlePrice } from "../../components/TopChartTitlePrice";
import { TopChartTitleVolume } from "../../components/TopChartTitleVolume";
import { ChartDurationRow } from "./Coin/Coin.styles";
import { BtcChartDurationButton } from "../../components/BtcChartDurationButton";
import { CoinsTable } from "../../components/CoinsTable";
import {
  CoinsPageWrapper,
  ChartsWrapper,
  ChartsWrapperInner,
  TopChartHeaderRow,
} from "./Coins.styles";
import { LineChart } from "../../components/LineChart";
import { BarChart } from "../../components/BarChart";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import {
  formatDate,
  getDate,
  btcPricesData,
  btcVolumesData,
  getThemeColors,
} from "../../utilities";

const Coins = (props) => {
  const { currency } = useContext(CurrencyContext);
  const { background } = getThemeColors();
  const [days, setDays] = useState(1);
  const [interval, setInterval] = useState("hourly");
  const [day, setDay] = useState(getDate().toString().slice(8, 10));
  const [month, setMonth] = useState(getDate().toString().slice(4, 7));
  const [year, setYear] = useState(getDate().toString().slice(11, 15));
  const [chartHours, setChartHours] = useState([]);
  const [btcPrices, setBtcPrices] = useState([]);
  const [btcVolumes, setBtcVolumes] = useState([]);

  // I just left this here for the moment as reference

  // const getCoinsData = async () => {
  //   try {
  //     const base =
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=";
  //     const search = `&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;
  //     const fullURL = `${base}${currency}${search}`;
  //     const { data } = await axios(fullURL);
  //     setBtcCurrentPrice(data[0].current_price);
  //     setBtcCurrentVolume(data[0].total_volume);
  //     setDay(getDate().toString().slice(8, 10));
  //     setMonth(getDate().toString().slice(4, 7));
  //     setYear(getDate().toString().slice(11, 15));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const getChartsData = async () => {
    try {
      const base =
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=";
      const search = `&days=${days}&interval=${interval}`;
      const fullURL = `${base}${currency}${search}`;
      const { data } = await axios(fullURL);
      setBtcPrices(data.prices.map((el) => el[1]));
      setBtcVolumes(data.total_volumes.map((el) => el[1]));
      setChartHours(data.prices.map((el) => formatDate(el[0])));
    } catch (error) {
      console.log(error);
    }
  };
  const handleChartDuration = (dayNum) => {
    setDays(dayNum);
  };
  useEffect(() => {
    getCoinsData();
    getChartsData();
  }, [currency, days]);
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
          <LineChart data={btcPricesData(chartHours, btcPrices)} />
          <BarChart data={btcVolumesData(chartHours, btcVolumes)} />
        </ChartsWrapperInner>
      </ChartsWrapper>
      <ChartDurationRow>
        <BtcChartDurationButton
          duration={"1d"}
          onClick={() => handleChartDuration(1)}
          background={days === 1 ? "#06d554" : background}
        />
        <BtcChartDurationButton
          duration={"7d"}
          onClick={() => handleChartDuration(7)}
          background={days === 7 ? "#06d554" : background}
        />
        <BtcChartDurationButton
          duration={"30d"}
          onClick={() => handleChartDuration(30)}
          background={days === 30 ? "#06d554" : background}
        />
        <BtcChartDurationButton
          duration={"90d"}
          onClick={() => handleChartDuration(90)}
          background={days === 90 ? "#06d554" : background}
        />
        <BtcChartDurationButton
          duration={"1y"}
          onClick={() => handleChartDuration(365)}
          background={days === 365 ? "#06d554" : background}
        />
        <BtcChartDurationButton
          duration={"Max"}
          onClick={() => handleChartDuration("max")}
          background={days === "max" ? "#06d554" : background}
        />
      </ChartDurationRow>
      <PageHeader text={"TOP 50 by Market Cap"} />
      <CoinsTable />
    </CoinsPageWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    btcCurrentPrice: state.coinsData.btcCurrentPrice,
    btcCurrentVolume: state.coinsData.btcCurrentVolume,
    isLoading: state.coinsData.isLoading,
    error: state.coinsData.error,
  };
};
const mapDispatchToProps = {
  getCoinsData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Coins);
