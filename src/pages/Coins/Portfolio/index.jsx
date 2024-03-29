import ReactModal from "react-modal";
import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import {
  PortfolioPageWrapper,
  CoinRow,
  CoinDataWrapper,
  CoinProgressBar,
  modalStyles,
} from "./Portfolio.styles";
import { AddAssetButton } from "../../../components/AddAssetButton";
import { TrashButton } from "../../../components/PortfolioTrashButton";
import { AddAssetWindow } from "../../../components/AddAssetWindow";
import { PageHeader } from "../../../components/PageHeader";
import { CoinBox1 } from "../../../components/CoinBox1";
import { PortfolioCoinBox } from "../../../components/PortfolioCoinBox";
import { PortfolioProgressBar } from "../../../components/PortfolioProgressBar";
import { Title } from "../../../components/PortfolioCoinBox/PortfolioCoinBox.styles";
import { getThemeColors } from "../../../utilities/getThemeColors";
import {
  getPortfolioData,
  openModal,
  closeModal,
  addNewAsset,
  removeAsset,
} from "../../../store/portfolio/actions";

const Portfolio = () => {
  const { currency } = useContext(CurrencyContext);
  const { main, text } = getThemeColors();
  const { assets, isModalOpen } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortfolioData(currency));
  }, [currency]);
  return (
    <PortfolioPageWrapper>
      <AddAssetButton
        text={"Add Asset"}
        background={main}
        borderColor={text}
        onClick={() => dispatch(openModal)}
      />
      <ReactModal isOpen={isModalOpen} style={modalStyles}>
        <AddAssetWindow
          onClickX={() => dispatch(closeModal)}
          onClickCloseButton={() => dispatch(closeModal)}
          addAsset={(newAsset, currency) =>
            dispatch(addNewAsset(newAsset, currency))
          }
        />
      </ReactModal>
      <PageHeader text={"Your statistics"} />

      {assets.map((asset) => {
        const currentPrice = asset.currentPrice;
        const priceChange = asset.priceChangePercentage24h;
        const dominancePercent = asset.dominancePercent;
        const supplyPercent = asset.supplyPercent;
        const coinAmount = asset.amount;
        const investmentValue = asset.currentInvestmentValue;
        const returnOnInvestment = asset.priceChangePercentageSincePurchase;
        const purchaseDate = asset.date;
        const assetId = asset.id;
        return (
          <CoinRow key={asset.name}>
            <CoinBox1
              src={asset.image}
              coinName={asset.name}
              coinSymbol={asset.symbol}
              button={
                <TrashButton onClick={() => dispatch(removeAsset(assetId))} />
              }
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
              <Title>Your Investment:</Title>
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
