import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { CurrencyContext } from "../../../contexts/CurrencyContext";
import { formatNumber } from "../../../utilities";
import { ArrowUp, ArrowDown } from "../Coins.styles";
import {
  CoinPageWrapper,
  HeaderDiv,
  SummaryWrapper,
  CoinBoxContainer,
  CoinBox,
  CoinBoxInner,
  CoinImage,
  CoinUrlBox,
  PriceBoxContainer,
  CoinDataBoxContainer,
  UrlIcon,
  HomePageDiv,
  PriceCHangePercentageDiv,
  PriceChangePercentage,
  SquareStackIcon,
} from "./Coin.styles";

export const Coin = (props) => {
  const { currency } = useContext(CurrencyContext);
  const [coinData, setCoinData] = useState({});
  const [coinName, setCoinName] = useState("");
  const [coinSymbol, setCoinSymbol] = useState("");
  const [coinImgSrc, setCoinImgSrc] = useState("");
  const [coinHomePage, setCoinHomePage] = useState("");
  const [coinCurrentPrice, setCoinCurrentPrice] = useState(0);
  const [priceChangePercentage24h, setPriceChangePercentage24h] = useState(0);

  const getCoinData = async (coinId) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );
      setCoinData(data);
      setCoinName(data.name);
      setCoinSymbol(data.symbol);
      setCoinImgSrc(data.image.large);
      setCoinHomePage(data.links.homepage[0]);
      setCoinCurrentPrice(data.market_data.current_price[currency]);
      setPriceChangePercentage24h(data.market_data.price_change_percentage_24h);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCoinData(props.match.params.coinId);
  }, []);
  return (
    <CoinPageWrapper>
      <HeaderDiv>
        <h2>Summary</h2>
      </HeaderDiv>
      <SummaryWrapper>
        <CoinBoxContainer>
          <CoinBox>
            <CoinBoxInner>
              <CoinImage src={coinImgSrc} />
            </CoinBoxInner>
            <h2>
              {coinName} ({coinSymbol.toUpperCase()})
            </h2>
          </CoinBox>
          <CoinUrlBox>
            <UrlIcon />
            <HomePageDiv>{coinHomePage}</HomePageDiv>
          </CoinUrlBox>
        </CoinBoxContainer>
        <PriceBoxContainer>
          <h2>{formatNumber(coinCurrentPrice)}</h2>
          <PriceCHangePercentageDiv>
            <PriceChangePercentage
              color={priceChangePercentage24h > 0 ? "#00fc2a" : "#fe1040"}
            >
              {" "}
              {priceChangePercentage24h.toFixed(2)}%
            </PriceChangePercentage>
            {priceChangePercentage24h > 0 ? <ArrowUp /> : <ArrowDown />}
          </PriceCHangePercentageDiv>
          <SquareStackIcon />
        </PriceBoxContainer>
        <CoinDataBoxContainer></CoinDataBoxContainer>
      </SummaryWrapper>
      <HeaderDiv>
        <h2>Description</h2>
      </HeaderDiv>
    </CoinPageWrapper>
  );
};
