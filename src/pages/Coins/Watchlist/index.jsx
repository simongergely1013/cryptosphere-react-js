import ReactModal from "react-modal";
import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import { WatchListPageWrapper, modalStyles } from "./Watchlist.styles";
import { AddAssetButton } from "../../../components/AddAssetButton";
import { WatchlistTrashButton } from "../../../components/WatchlistTrashButton";
import { AddCoinToWatchlistWindow } from "../../../components/AddCoinToWatchlistWindow";
import { PageHeader } from "../../../components/PageHeader";
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
  TableData1,
  TableData2,
  PercentageChangeDiv,
  TableData2Container,
  TableData3,
  TableData3Container,
  ArrowUp,
  ArrowDown,
} from "../../../components/CoinsTable/CoinsTable.styles";
import { CoinsPercentageBar } from "../../../components/CoinsPercentageBar";
import { ChevronUpAndDown } from "../../../components/ChevronUpAndDown";
import { getRandomColor } from "../../../utilities/getRandomColor";
import { formatNumber } from "../../../utilities/formatNumber";
import { formatSupply } from "../../../utilities/formatSupply";
import { formatVolumeMarketCap } from "../../../utilities/formatVolumeMarketCap";
import { getThemeColors } from "../../../utilities/getThemeColors";
import { getCoinPricesData } from "../../../utilities/getCoinPricesData";
import {
  getWatchlistData,
  removeFromWatchlist,
  sortByName,
  sortByPrice,
  sortBy1hChange,
  sortBy24hChange,
  sortBy7dChange,
  openModal,
  closeModal,
} from "../../../store/watchlist/actions";
import { SmallLineChart } from "../../../components/LineChart";

const WatchList = () => {
  const { currency } = useContext(CurrencyContext);
  const { main, text } = getThemeColors();
  const { coinsPercentageBarColor } = getThemeColors();
  const { assets, data, isModalOpen } = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWatchlistData(currency));
  }, [currency, assets]);
  return (
    <WatchListPageWrapper>
      <AddAssetButton
        text={"Add Coin"}
        background={main}
        borderColor={text}
        onClick={() => dispatch(openModal)}
      />
      <ReactModal isOpen={isModalOpen} style={modalStyles}>
        <AddCoinToWatchlistWindow
          onClickX={() => dispatch(closeModal)}
          onClickCloseButton={() => dispatch(closeModal)}
        />
      </ReactModal>
      <PageHeader text={"Your watchlist"} />
      <CoinsTableWrapper>
        <CoinsTableContainer>
          <TableHeaderRow>
            <NumeroHeader>#</NumeroHeader>
            <NameHeader>
              Name <ChevronUpAndDown onClick={() => dispatch(sortByName())} />
            </NameHeader>
            <TableHeaderContainer1>
              <Price>
                Price{" "}
                <ChevronUpAndDown onClick={() => dispatch(sortByPrice())} />
              </Price>
              <OneHourChange>
                1h%{" "}
                <ChevronUpAndDown onClick={() => dispatch(sortBy1hChange())} />
              </OneHourChange>
              <OneDayChange>
                24h%{" "}
                <ChevronUpAndDown onClick={() => dispatch(sortBy24hChange())} />
              </OneDayChange>
              <OneWeekChange>
                7d%{" "}
                <ChevronUpAndDown onClick={() => dispatch(sortBy7dChange())} />
              </OneWeekChange>
            </TableHeaderContainer1>
            <TableHeaderContainer2>
              <TableHeader2>24h Volume/Market Cap</TableHeader2>
              <TableHeader3>Circulating/Total Supply</TableHeader3>
            </TableHeaderContainer2>
            <TableHeader4>Last 7d</TableHeader4>
          </TableHeaderRow>
          <CoinsRowsContainer>
            {data.map((obj, index) => {
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
              const coinPricesData = getCoinPricesData(sparklineData);
              const assetName = obj.name.toLowerCase();
              return (
                <TableRow key={obj.name}>
                  <NumeroHeader>
                    <WatchlistTrashButton
                      onClick={() => dispatch(removeFromWatchlist(assetName))}
                    />
                  </NumeroHeader>
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
                      color={percentageChange1h > 0 ? "#00FC2A" : "#FE1040"}
                    >
                      <PercentageChangeDiv>
                        {percentageChange1h > 0 ? <ArrowUp /> : <ArrowDown />}
                        {percentageChange1h}%
                      </PercentageChangeDiv>
                    </TableData1>
                    <TableData1
                      color={percentageChange24h > 0 ? "#00FC2A" : "#FE1040"}
                    >
                      <PercentageChangeDiv>
                        {percentageChange24h > 0 ? <ArrowUp /> : <ArrowDown />}
                        {percentageChange24h}%
                      </PercentageChangeDiv>
                    </TableData1>
                    <TableData1
                      color={percentageChange7d > 0 ? "#00FC2A" : "#FE1040"}
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
                        width={percentageVolume24h}
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
                        width={percentageCirculating}
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
          </CoinsRowsContainer>
        </CoinsTableContainer>
      </CoinsTableWrapper>
    </WatchListPageWrapper>
  );
};

export default WatchList;
