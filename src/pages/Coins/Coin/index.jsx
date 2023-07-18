import { connect } from "react-redux";
import { getCoinData } from "../../../store/coin/actions";
import { useLocalState } from "../../../hooks";
import { useEffect, useContext } from "react";
import { CurrencyConverter } from "../../../components/CurrencyConverter";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import { coinPricesData, getThemeColors } from "../../../utilities";
import { PageHeader } from "../../../components/PageHeader";
import { CoinBox1 } from "../../../components/CoinBox1";
import { CoinBox2 } from "../../../components/CoinBox2";
import { CoinBox3 } from "../../../components/CoinBox3";
import { CoinDescription } from "../../../components/CoinDescription";
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
  const [coinChartDuration, setCoinChartDuration] = useLocalState(
    "coinChartDuration",
    1
  );
  useEffect(() => {
    props.getCoinData(props.match.params.coinId, coinChartDuration);
  }, [currency, coinChartDuration]);
  localStorage.setItem("coinCurrentPrice", props.coinData.coinCurrentPrice);
  return (
    <CoinPageWrapper>
      <PageHeader text={"Summary"} />
      <SummaryWrapper>
        <CoinBox1
          src={props.coinData.coinImgSrc}
          coinName={props.coinData.coinName}
          coinSymbol={props.coinData.coinSymbol}
          coinHomePage={props.coinData.coinHomePage}
        />
        <CoinBox2
          coinPrice={props.coinData.coinCurrentPrice}
          priceChangePercentage={props.coinData.priceChangePercentage24h}
          ath={props.coinData.coinAth}
          athDate={props.coinData.coinAthDate}
          atl={props.coinData.coinAtl}
          atlDate={props.coinData.coinAtlDate}
        />
        <CoinBox3
          coinMarketCap={props.coinData.coinMarketCap}
          coinFullyDillutedValuation={props.coinData.coinFullyDillutedValuation}
          coinVolume24h={props.coinData.coinVolume24h}
          coinVolumeOverMarketCap={props.coinData.coinVolumeOverMarketCap}
          coinCirculatingSupply={props.coinData.coinCirculatingSupply}
          coinSymbol={props.coinData.coinSymbol}
          coinTotalSupply={props.coinData.coinTotalSupply}
          num1={props.coinData.num1 + "%"}
          num2={props.coinData.num2 + "%"}
          color1={props.coinData.color1}
          color2={props.coinData.color2}
        />
      </SummaryWrapper>
      <PageHeader text={"Description"} />
      <CoinDescription coinDescription={props.coinData.coinDescription} />
      <CoinUrlsRow>
        <CoinUrl blockchainSite={props.coinData.coinBlockChainSite1} />
        <CoinUrl blockchainSite={props.coinData.coinBlockChainSite2} />
        <CoinUrl blockchainSite={props.coinData.coinBlockChainSite3} />
      </CoinUrlsRow>
      <ChartDurationRow>
        <CoinChartDurationButton
          onClick={() => setCoinChartDuration(1)}
          duration={"1d"}
          background={coinChartDuration === 1 ? "#06d554" : background}
        />
        <CoinChartDurationButton
          onClick={() => setCoinChartDuration(7)}
          duration={"7d"}
          background={coinChartDuration === 7 ? "#06d554" : background}
        />
        <CoinChartDurationButton
          onClick={() => setCoinChartDuration(30)}
          duration={"30d"}
          background={coinChartDuration === 30 ? "#06d554" : background}
        />
        <CoinChartDurationButton
          onClick={() => setCoinChartDuration(90)}
          duration={"90d"}
          background={coinChartDuration === 90 ? "#06d554" : background}
        />
        <CoinChartDurationButton
          onClick={() => setCoinChartDuration(365)}
          duration={"1y"}
          background={coinChartDuration === 365 ? "#06d554" : background}
        />
        <CoinChartDurationButton
          onClick={() => setCoinChartDuration("max")}
          duration={"Max"}
          background={coinChartDuration === "max" ? "#06d554" : background}
        />
      </ChartDurationRow>
      <CurrencyConversionRow>
        <CurrencyConverter coinSymbol={props.coinData.coinSymbol} />
      </CurrencyConversionRow>
      <BigLineChart
        data={coinPricesData(
          props.coinData.chartLabels,
          props.match.params.coinId,
          props.coinData.coinPrices
        )}
      />
    </CoinPageWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    coinData: state.coin.coinData,
    isLoading: state.coin.isLoading,
    error: state.coin.error,
    chartDuration: state.coin.chartDuration,
  };
};

export default connect(mapStateToProps, { getCoinData })(Coin);
