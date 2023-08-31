import { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinData } from "../../../store/coin/actions";
import { useLocalState } from "../../../hooks";
import { CurrencyConverter } from "../../../components/CurrencyConverter";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import { coinPricesData } from "../../../utilities/coinPricesData";
import { getThemeColors } from "../../../utilities/getThemeColors";
import { getButtonColor } from "../../../utilities/getButtonColor";
import { PageHeader } from "../../../components/PageHeader";
import { CoinBox1 } from "../../../components/CoinBox1";
import { CoinBox2 } from "../../../components/CoinBox2";
import { CoinBox3 } from "../../../components/CoinBox3";
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
  const coinData = useSelector((state) => state.coin.coinData);
  const isLoading = useSelector((state) => state.coin.isLoading);
  const error = useSelector((state) => state.coin.error);
  const [coinChartDuration, setCoinChartDuration] = useLocalState(
    "coinChartDuration",
    1
  );
  useEffect(() => {
    dispatch(getCoinData(coinId, currency, coinChartDuration));
  }, [currency, coinChartDuration]);
  return (
    <CoinPageWrapper>
      <PageHeader text={"Your Summary"} />
      <SummaryWrapper>
        <CoinBox1
          src={coinData.coinImgSrc}
          coinName={coinData.coinName}
          coinSymbol={coinData.coinSymbol}
          child={<CoinUrlBox coinHomePage={coinData.coinHomePage} />}
        />
        <CoinBox2
          coinPrice={coinData.coinCurrentPrice}
          priceChangePercentage={coinData.priceChangePercentage24h}
          ath={coinData.coinAth}
          athDate={coinData.coinAthDate}
          atl={coinData.coinAtl}
          atlDate={coinData.coinAtlDate}
        />
        <CoinBox3
          coinMarketCap={coinData.coinMarketCap}
          coinFullyDillutedValuation={coinData.coinFullyDillutedValuation}
          coinVolume24h={coinData.coinVolume24h}
          coinVolumeOverMarketCap={coinData.coinVolumeOverMarketCap}
          coinCirculatingSupply={coinData.coinCirculatingSupply}
          coinSymbol={coinData.coinSymbol}
          coinTotalSupply={coinData.coinTotalSupply}
          num1={coinData.num1}
          num2={coinData.num2}
          color1={coinData.color1}
          color2={coinData.color2}
        />
      </SummaryWrapper>
      <PageHeader text={"Description"} />
      <CoinDescription coinDescription={coinData.coinDescription} />
      <CoinUrlsRow>
        <CoinUrl blockchainSite={coinData.coinBlockChainSite1} />
        <CoinUrl blockchainSite={coinData.coinBlockChainSite2} />
        <CoinUrl blockchainSite={coinData.coinBlockChainSite3} />
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
          coinSymbol={coinData.coinSymbol}
          coinCurrentPrice={coinData.coinCurrentPrice}
        />
      </CurrencyConversionRow>
      <BigLineChart
        data={coinPricesData(coinData.chartLabels, coinId, coinData.coinPrices)}
      />
    </CoinPageWrapper>
  );
};

export default Coin;
