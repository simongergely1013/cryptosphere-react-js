import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import {
  PortfolioPageWrapper,
  CoinRow,
  CoinDataWrapper,
  CoinProgressBar,
} from "./Portfolio.styles";
import { AddAssetButton } from "../../../components/AddAssetButton";
import { PageHeader } from "../../../components/PageHeader";
import { CoinBox1 } from "../../../components/CoinBox1";
import { PortfolioCoinBox } from "../../../components/PortfolioCoinBox";
import { PortfolioProgressBar } from "../../../components/PortfolioProgressBar";
import { Title } from "../../../components/PortfolioCoinBox/PortfolioCoinBox.styles";
import { getThemeColors } from "../../../utilities/getThemeColors";
import { getPortfolioData } from "../../../store/portfolio/actions";

const Portfolio = () => {
  const { main, text } = getThemeColors();
  const { currency } = useContext(CurrencyContext);
  const portfolio = useSelector((state) => state.portfolio.assets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortfolioData(currency));
  }, [currency]);
  return (
    <PortfolioPageWrapper>
      <AddAssetButton text={"Add Asset"} background={main} borderColor={text} />
      <PageHeader text={"Your statistics"} />

      {portfolio.map((asset) => {
        const currentPrice = asset.currentPrice;
        const priceChange = asset.priceChangePercentage;
        const dominancePercent = asset.dominancePercent;
        const supplyPercent = asset.supplyPercent;
        const coinAmount = asset.amount;
        const investmentValue = asset.currentInvestmentValue;
        const returnOnInvestment = asset.priceChangePercentageSincePurchase;
        const purchaseDate = asset.date;
        return (
          <CoinRow>
            <CoinBox1
              src={asset.image}
              coinName={asset.name}
              coinSymbol={asset.symbol}
            />
            <CoinDataWrapper>
              <Title>Market Price:</Title>
              <PortfolioCoinBox
                title1={"Current price: "}
                title2={"Price change 24h: "}
                title3={"Mark. Cap/Tot. Mark. Cap: "}
                title4={"Circulating/Tot. supply: "}
                data1={currentPrice}
                data2={priceChange + "%"}
                data3={dominancePercent + "%"}
                data4={supplyPercent + "%"}
                color1={priceChange >= 0 ? "#00FC2A" : "#FE1040"}
                child={
                  <PortfolioProgressBar
                    innerBar={<CoinProgressBar percent={dominancePercent} />}
                  />
                }
              />
              <Title>Investment:</Title>
              <PortfolioCoinBox
                title1={"Coin amount: "}
                title2={"Investment value: "}
                title3={"Return on investment: "}
                title4={"Purchase date: "}
                data1={coinAmount}
                data2={investmentValue}
                data3={returnOnInvestment + "%"}
                data4={purchaseDate}
                color2={returnOnInvestment >= 0 ? "#00FC2A" : "#FE1040"}
              />
            </CoinDataWrapper>
          </CoinRow>
        );
      })}
    </PortfolioPageWrapper>
  );
};

export default Portfolio;
