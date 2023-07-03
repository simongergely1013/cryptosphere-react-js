import axios from "axios";
import { CoinsTable } from "../../components/CoinsTable";
import { useContext, useState, useEffect } from "react";
import {
  CoinsPageWrapper,
  HeaderDiv,
  ChartsWrapper,
  ChartsWrapperInner,
  TopChartHeaderRow,
  TopChartHeader,
} from "./Coins.styles";
import {
  formatNumber,
  formatDate,
  formatVolumeMarketCap,
  getDate,
} from "../../utilities";
import { LineChart } from "../../components/LineChart";
import { BarChart } from "../../components/BarChart";
import { CurrencyContext } from "../../contexts/CurrencyContext";

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
  const getThemeColors = () => {
    const theme = localStorage.getItem("theme");
    return JSON.parse(theme);
  };
  useEffect(() => {
    getCoinsData();
    getChartsData();
  }, [currency]);

  const theme = getThemeColors();
  const btcCurrentVolumeFormatted = parseInt(btcCurrentVolume);
  const chartHoursFormatted = chartHours
    .map((el) => formatDate(el))
    .slice(0, 24);
  const btcPricesData = {
    labels: chartHoursFormatted,
    datasets: [
      {
        label: "BTC Price",
        data: btcPricesHourly.slice(0, 24),
        borderColor:
          btcPricesHourly[0] < btcPricesHourly[24]
            ? theme.btcPriceChartBorderColorGain
            : btcPricesHourly[0] > btcPricesHourly[24]
            ? theme.btcPriceChartBorderColorLoss
            : theme.btcPriceChartBorderColorGain,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          btcPricesHourly[0] < btcPricesHourly[24]
            ? gradient.addColorStop(0, theme.btcPriceChartGradienColorGain)
            : btcPricesHourly[0] > btcPricesHourly[24]
            ? gradient.addColorStop(0, theme.btcPriceChartGradienColorLoss)
            : gradient.addColorStop(0, theme.btcPriceChartGradienColorGain);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          return gradient;
        },
        pointRadius: 0,
        borderWidth: 3,
        fill: true,
      },
    ],
  };
  const btcVolumesData = {
    labels: chartHoursFormatted,
    datasets: [
      {
        label: "BTC Volume",
        data: btcVolumesHourly.slice(0, 24),
        borderColor: "#e76f51",
        backgroundColor: theme.btcVolumeChartBackgroundColor,
      },
    ],
  };
  return (
    <CoinsPageWrapper>
      <HeaderDiv>
        <h2>Overview</h2>
      </HeaderDiv>
      <ChartsWrapper>
        <TopChartHeaderRow>
          <TopChartHeader>
            <h3>BTC</h3>
            <h2>{formatNumber(btcCurrentPrice)}</h2>
            <h3>
              {day} {month},{year}
            </h3>
          </TopChartHeader>
          <TopChartHeader>
            <h3>Volume 24h</h3>
            <h2>{formatVolumeMarketCap(btcCurrentVolumeFormatted)}</h2>
            <h3>
              {day} {month},{year}
            </h3>
          </TopChartHeader>
        </TopChartHeaderRow>
        <ChartsWrapperInner>
          <LineChart data={btcPricesData} />
          <BarChart data={btcVolumesData} />
        </ChartsWrapperInner>
      </ChartsWrapper>
      <HeaderDiv>
        <h2>TOP 50 by Market Cap</h2>
      </HeaderDiv>
      <CoinsTable />
    </CoinsPageWrapper>
  );
};
