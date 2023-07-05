import axios from "axios";
import { CoinsTable } from "../../components/CoinsTable";
import { useContext, useState, useEffect } from "react";
import { PageHeader } from "../../components/PageHeader";
import { TopChartTitlePrice } from "../../components/TopChartTitlePrice";
import { TopChartTitleVolume } from "../../components/TopChartTitleVolume";
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
} from "../../utilities";

export const Coins = () => {
  const { currency } = useContext(CurrencyContext);
  const [isLoading, setLoading] = useState(false);
  const [btcCurrentPrice, setBtcCurrentPrice] = useState(0);
  const [btcCurrentVolume, setBtcCurrentVolume] = useState(0);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [chartHours, setChartHours] = useState([]);
  const [btcPricesHourly, setBtcPricesHourly] = useState([]);
  const [btcVolumesHourly, setBtcVolumesHourly] = useState([]);

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
      const search = "&days=1&interval=hourly";
      const fullURL = `${base}${currency}${search}`;
      const { data } = await axios(fullURL);
      setBtcPricesHourly(data.prices.map((el) => el[1]));
      setBtcVolumesHourly(data.total_volumes.map((el) => el[1]));
      setChartHours(data.prices.map((el) => el[0]));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoinsData();
    getChartsData();
  }, [currency]);
  const chartHoursFormatted = chartHours
    .map((el) => formatDate(el))
    .slice(0, 24);
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
          <LineChart
            data={btcPricesData(chartHoursFormatted, btcPricesHourly)}
          />
          <BarChart
            data={btcVolumesData(chartHoursFormatted, btcVolumesHourly)}
          />
        </ChartsWrapperInner>
      </ChartsWrapper>
      <PageHeader text={"TOP 50 by Market Cap"} />
      <CoinsTable />
    </CoinsPageWrapper>
  );
};
