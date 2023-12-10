import { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinData } from "../../../store/coin/actions";
import { addToWatchlist } from "../../../store/watchlist/actions";
import { useLocalState } from "../../../hooks";
import { CurrencyConverter } from "../../../components/CurrencyConverter";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import { getThemeColors } from "../../../utilities/getThemeColors";
import { getButtonColor } from "../../../utilities/getButtonColor";
import { getAppError } from "../../../utilities/getAppError";
import { PageHeader } from "../../../components/PageHeader";
import { CoinBox1 } from "../../../components/CoinBox1";
import { CoinBox2 } from "../../../components/CoinBox2";
import { CoinBox3 } from "../../../components/CoinBox3";
import { WatchlistPlusButton } from "../../../components/WatchlistPlusButton";
import { CoinDescription } from "../../../components/CoinDescription";
import { CoinUrlBox } from "../../../components/CoinUrlBox";
import { CoinUrl } from "../../../components/CoinUrl";
import { CoinChartDurationButton } from "../../../components/CoinChartDurationButton";
import { BigLineChart } from "../../../components/LineChart";
import {
  CoinPageWrapper,
  SummaryWrapper,
  CoinUrlsRow,
  CurrencyConversionRow,
  ChartDurationRow,
} from "./Coin.styles";

const Coin = (props) => {
  const { currency } = useContext(CurrencyContext);
  const { background } = getThemeColors();
  const dispatch = useDispatch();
  const coinId = props.match.params.coinId;
  const state = useSelector((state) => state.coin);
  const isAppError = useSelector((state) => getAppError(state));
  const [coinChartDuration, setCoinChartDuration] = useLocalState(
    "coinChartDuration",
    30
  );
  useEffect(() => {
    dispatch(getCoinData(coinId, currency, coinChartDuration));
  }, [currency, coinChartDuration]);

  return (
    <CoinPageWrapper>
      <PageHeader text={"Your Summary"} />
      <SummaryWrapper>
        <CoinBox1
          src={state.coinImgSrc}
          coinName={state.coinName}
          coinSymbol={state.coinSymbol}
          child={<CoinUrlBox coinHomePage={state.coinHomePage} />}
          button={
            <WatchlistPlusButton
              onClick={() =>
                dispatch(addToWatchlist(state.coinName.toLowerCase()))
              }
            />
          }
        />
        <CoinBox2
          coinPrice={state.coinCurrentPrice}
          priceChangePercentage={state.priceChangePercentage24h}
          ath={state.coinAth}
          athDate={state.coinAthDate}
          atl={state.coinAtl}
          atlDate={state.coinAtlDate}
        />
        <CoinBox3
          coinMarketCap={state.coinMarketCap}
          coinFullyDillutedValuation={state.coinFullyDillutedValuation}
          coinVolume24h={state.coinVolume24h}
          coinVolumeOverMarketCap={state.coinVolumeOverMarketCap}
          coinCirculatingSupply={state.coinCirculatingSupply}
          coinSymbol={state.coinSymbol}
          coinTotalSupply={state.coinTotalSupply}
          num1={state.num1}
          num2={state.num2}
          color1={state.color1}
          color2={state.color2}
        />
      </SummaryWrapper>
      <PageHeader text={"Description"} />
      <CoinDescription coinDescription={state.coinDescription} />
      <CoinUrlsRow>
        <CoinUrl blockchainSite={state.coinBlockChainSite1} />
        <CoinUrl blockchainSite={state.coinBlockChainSite2} />
        <CoinUrl blockchainSite={state.coinBlockChainSite3} />
      </CoinUrlsRow>
      <ChartDurationRow>
        <CoinChartDurationButton
          onClick={() => setCoinChartDuration(30)}
          duration={"1 month"}
          background={getButtonColor(coinChartDuration === 30, background)}
        />
        <CoinChartDurationButton
          onClick={() => setCoinChartDuration(90)}
          duration={"3 months"}
          background={getButtonColor(coinChartDuration === 90, background)}
        />
        <CoinChartDurationButton
          onClick={() => setCoinChartDuration(365)}
          duration={"1 year"}
          background={getButtonColor(coinChartDuration === 365, background)}
        />
        <CoinChartDurationButton
          onClick={() => setCoinChartDuration("max")}
          duration={"All time"}
          background={getButtonColor(coinChartDuration === "max", background)}
        />
      </ChartDurationRow>
      <CurrencyConversionRow>
        <CurrencyConverter
          coinSymbol={state.coinSymbol}
          coinCurrentPrice={state.coinCurrentPrice}
        />
      </CurrencyConversionRow>
      <BigLineChart data={state.lineChartData} isError={isAppError} />
    </CoinPageWrapper>
  );
};

export default Coin;
