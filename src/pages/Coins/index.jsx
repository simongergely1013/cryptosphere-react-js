import axios from "axios";
import { CoinsTable } from "../../components/CoinsTable";
import { useContext, useState, useEffect } from "react";
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

export const Coins = () => {
  const { currency } = useContext(CurrencyContext);
  const { background } = getThemeColors();
  const [days, setDays] = useState(1);
  const [interval, setInterval] = useState("minutely");
  const [isLoading, setLoading] = useState(false);
  const [btcCurrentPrice, setBtcCurrentPrice] = useState(0);
  const [btcCurrentVolume, setBtcCurrentVolume] = useState(0);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [chartHours, setChartHours] = useState([]);
  const [btcPrices, setBtcPrices] = useState([]);
  const [btcVolumes, setBtcVolumes] = useState([]);

  const getCoinsData = async () => {
    try {
      const base =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=";
      const search = `&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;
      const fullURL = `${base}${currency}${search}`;
      const { data } = await axios(fullURL);
      setBtcCurrentPrice(data[0].current_price);
      setBtcCurrentVolume(data[0].total_volume);
      setDay(getDate().toString().slice(8, 10));
      setMonth(getDate().toString().slice(4, 7));
      setYear(getDate().toString().slice(11, 15));
    } catch (error) {
      console.log(error);
    }
  };
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
