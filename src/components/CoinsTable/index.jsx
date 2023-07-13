import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { CoinsPercentageBar } from "../CoinsPercentageBar";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { useContext, useState, useEffect } from "react";
import {
  getRandomColor,
  formatNumber,
  formatSupply,
  formatVolumeMarketCap,
  getThemeColors,
} from "../../utilities";
import {
  CoinsTableWrapper,
  CoinsTableContainer,
  TableHeaderRow,
  NumeroHeader,
  NameHeader,
  TableHeaderContainer1,
  TableHeaderContainer2,
  Price,
  OneHourChange,
  OneDayChange,
  OneWeekChange,
  TableHeader2,
  TableHeader3,
  TableHeader4,
  CoinsRowsContainer,
  TableRow,
  CoinName,
  CoinNameInnerDiv,
  CoinLogo,
  CoinNameLink,
  TableData1,
  TableData2,
  TableData3,
  PercentageChangeDiv,
  ArrowUp,
  ArrowDown,
} from "./CoinsTable.styles";
import { SmallLineChart } from "../LineChart";

export const CoinsTable = (props) => {
  const { currency } = useContext(CurrencyContext);
  const { coinsPercentageBarColor } = getThemeColors();
  const [page, setPage] = useState(1);
  const [coinsData, setCoinsData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const getCoinsData = async () => {
    try {
      const base =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=";
      const search = `&order=market_cap_desc&per_page=10&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;
      const fullURL = `${base}${currency}${search}`;
      const { data } = await axios(fullURL);
      setCoinsData([...coinsData, ...data]);
      if (!data.length) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const increasePage = () => {
    setPage(page + 1);
  };
  const getSmallChartLabels = () => {
    let labels = [];
    for (let i = 0; i < 73; i++) {
      labels.push("");
    }
    return labels;
  };
  useEffect(() => {
    getCoinsData();
  }, [currency, page]);
  return (
    <CoinsTableWrapper>
      <CoinsTableContainer>
        <TableHeaderRow>
          <NumeroHeader>#</NumeroHeader>
          <NameHeader>Name</NameHeader>
          <TableHeaderContainer1>
            <Price>Price</Price>
            <OneHourChange>1h%</OneHourChange>
            <OneDayChange>24h%</OneDayChange>
            <OneWeekChange>7d%</OneWeekChange>
          </TableHeaderContainer1>
          <TableHeaderContainer2>
            <TableHeader2>24h Volume/Market Cap</TableHeader2>
            <TableHeader3>Circulating/Total Supply</TableHeader3>
          </TableHeaderContainer2>
          <TableHeader4>Last 7d</TableHeader4>
        </TableHeaderRow>
        <CoinsRowsContainer>
          <InfiniteScroll
            dataLength={coinsData.length}
            next={increasePage}
            hasMore={hasMore}
            loader={<h3>Loading...</h3>}
            endMessage={<p>No more coins left</p>}
          >
            {coinsData.map((obj, index) => {
              const percentageChange1h =
                obj.price_change_percentage_1h_in_currency.toFixed(2);
              const percentageChange24h =
                obj.price_change_percentage_24h.toFixed(2);
              const percentageChange7d =
                obj.price_change_percentage_7d_in_currency.toFixed(2);
              const percentageVolume24h = (
                (obj.total_volume / obj.market_cap) *
                100
              ).toFixed(2);
              const percentageCirculating = (
                (obj.circulating_supply / obj.total_supply) *
                100
              ).toFixed(2);
              const circulatingSupply = formatSupply(obj.circulating_supply);
              const totalSupply = formatSupply(obj.total_supply);
              const totalVolume = formatVolumeMarketCap(
                obj.total_volume,
                currency
              );
              const marketCap = formatVolumeMarketCap(obj.market_cap, currency);
              const color1 = getRandomColor();
              const color2 = coinsPercentageBarColor;
              const sparklineData = obj.sparkline_in_7d.price
                .map((el) => el)
                .filter((element, index) => {
                  return index % 2 === 0;
                });
              const coinPricesData = {
                labels: getSmallChartLabels(),
                datasets: [
                  {
                    label: "",
                    data: sparklineData,
                    borderColor:
                      sparklineData[0] < sparklineData[sparklineData.length - 1]
                        ? "#00FF5F"
                        : "red",
                    pointRadius: 0,
                    borderWidth: 3,
                  },
                ],
              };
              return (
                <TableRow key={obj.name}>
                  <NumeroHeader>{index + 1}</NumeroHeader>
                  <CoinName>
                    <CoinNameInnerDiv>
                      <CoinLogo src={obj.image} />
                      <CoinNameLink
                        name={obj.name}
                        key={obj.name}
                        to={`/coin/${obj.name.toLowerCase()}`}
                      >
                        {obj.name} ({obj.symbol.toUpperCase()})
                      </CoinNameLink>
                    </CoinNameInnerDiv>
                  </CoinName>
                  <TableData1>{formatNumber(obj.current_price)}</TableData1>
                  <TableData1
                    style={{
                      color: percentageChange1h > 0 ? "#00FC2A" : "#FE1040",
                    }}
                  >
                    <PercentageChangeDiv>
                      {percentageChange1h > 0 ? <ArrowUp /> : <ArrowDown />}
                      {percentageChange1h}%
                    </PercentageChangeDiv>
                  </TableData1>
                  <TableData1
                    style={{
                      color: percentageChange24h > 0 ? "#00FC2A" : "#FE1040",
                    }}
                  >
                    <PercentageChangeDiv>
                      {percentageChange24h > 0 ? <ArrowUp /> : <ArrowDown />}
                      {percentageChange24h}%
                    </PercentageChangeDiv>
                  </TableData1>
                  <TableData1
                    style={{
                      color: percentageChange7d > 0 ? "#00FC2A" : "#FE1040",
                    }}
                  >
                    <PercentageChangeDiv>
                      {percentageChange7d > 0 ? <ArrowUp /> : <ArrowDown />}
                      {percentageChange7d}%
                    </PercentageChangeDiv>
                  </TableData1>
                  <TableData2>
                    <CoinsPercentageBar
                      num1={totalVolume}
                      num2={marketCap}
                      width={percentageVolume24h.toString() + "%"}
                      color1={color1}
                      color2={color2}
                      background1={color1}
                      background2={color2}
                    />
                  </TableData2>
                  <TableData2>
                    <CoinsPercentageBar
                      num1={circulatingSupply}
                      num2={totalSupply}
                      width={percentageCirculating.toString() + "%"}
                      color1={color1}
                      color2={color2}
                      background1={color1}
                      background2={color2}
                    />
                  </TableData2>
                  <TableData3>
                    <SmallLineChart data={coinPricesData} />
                  </TableData3>
                </TableRow>
              );
            })}
          </InfiniteScroll>
        </CoinsRowsContainer>
      </CoinsTableContainer>
    </CoinsTableWrapper>
  );
};
