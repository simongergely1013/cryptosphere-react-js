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
import { getLocalStorageItem } from "../../../utilities/getLocalStorageItem";
import { getPortfolioData } from "../../../store/portfolio/actions";

const Portfolio = () => {
  const { main, text } = getThemeColors();
  const { currency } = useContext(CurrencyContext);
  const portfolioData = useSelector((state) => state.portfolio.portfolioData);
  const totalMarketCap = getLocalStorageItem("totalMarketCap");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortfolioData(currency));
  }, [currency]);
  return (
    <PortfolioPageWrapper>
      <AddAssetButton text={"Add Asset"} background={main} borderColor={text} />
      <PageHeader text={"Your statistics"} />

      {portfolioData.map((coin) => {
        const currentPrice = coin.current_price;
        const priceChange = coin.price_change_percentage_24h.toFixed(2);
        const dominancePercent = Math.round(
          (coin.market_cap / totalMarketCap) * 100
        );
        const supplyPercent = Math.round(
          (coin.circulating_supply / coin.total_supply) * 100
        );
        return (
          <CoinRow>
            <CoinBox1
              src={coin.image}
              coinName={coin.name}
              coinSymbol={coin.symbol.toUpperCase()}
            />
            <CoinDataWrapper>
              <Title>Market Price:</Title>
              <PortfolioCoinBox
                title1={"Current price: "}
                title2={"Price change 24h: "}
                title3={"Mark. Cap/Tot. Mark. Cap: "}
                title4={"Circulating/Tot. supply: "}
                data1={currentPrice}
                data2={Math.abs(priceChange)}
                data3={dominancePercent + "%"}
                data4={supplyPercent + "%"}
                color={priceChange >= 0 ? "#00FC2A" : "#FE1040"}
                child={
                  <PortfolioProgressBar
                    innerBar={<CoinProgressBar percent={dominancePercent} />}
                  />
                }
              />
              <Title>Coin Price:</Title>
              <PortfolioCoinBox
                title1={"Coin amount: "}
                title2={"Amount value: "}
                title3={"Price change since purchase: "}
                title4={"Purchase date: "}
              />
            </CoinDataWrapper>
          </CoinRow>
        );
      })}
    </PortfolioPageWrapper>
  );
};

export default Portfolio;
