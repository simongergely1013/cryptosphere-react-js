import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import {
  getCoinsTableData,
  increasePage,
} from "../../store/coinsTable/actions";
import { CoinsPercentageBar } from "../CoinsPercentageBar";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { useContext, useEffect } from "react";
import { getRandomColor } from "../../utilities/getRandomColor";
import { formatNumber } from "../../utilities/formatNumber";
import { formatSupply } from "../../utilities/formatSupply";
import { formatVolumeMarketCap } from "../../utilities/formatVolumeMarketCap";
import { getThemeColors } from "../../utilities/getThemeColors";
import { getSmallChartLabels } from "../../utilities/getSmallChartLabels";
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
  TableData1Container,
  TableData2Container,
  TableData3Container,
  TableData1,
  TableData2,
  TableData3,
  PercentageChangeDiv,
  ArrowUp,
  ArrowDown,
} from "./CoinsTable.styles";
import { SmallLineChart } from "../LineChart";

const CoinsTable = () => {
  const { currency } = useContext(CurrencyContext);
  const { coinsPercentageBarColor } = getThemeColors();
  const dispatch = useDispatch();
  const {
    coinsData: coinsTableData,
    page,
    hasMore,
  } = useSelector((state) => state.coinsTable);

  const isLoading = coinsTableData.hasMore;
  const error = coinsTableData.error;
  useEffect(() => {
    dispatch(getCoinsTableData(currency));
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
            dataLength={coinsTableData.length}
            next={() => dispatch(increasePage())}
            hasMore={hasMore}
            loader={<h3>Loading...</h3>}
            endMessage={<p>No more coins left</p>}
          >
            {coinsTableData.map((obj, index) => {
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
                .filter((element, index) => {
                  return index % 6 === 0;
                })
                .map((el) => el);
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
                  <TableData1Container>
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
                  </TableData1Container>
                  <TableData2Container>
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
                  </TableData2Container>
                  <TableData3Container>
                    <TableData3>
                      <SmallLineChart data={coinPricesData} />
                    </TableData3>
                  </TableData3Container>
                </TableRow>
              );
            })}
          </InfiniteScroll>
        </CoinsRowsContainer>
      </CoinsTableContainer>
    </CoinsTableWrapper>
  );
};

export default CoinsTable;
