import React, { useState, useRef, useEffect } from "react";
import {
  CoinBoxContainer,
  CoinBox,
  CoinBoxInner,
  CoinImage,
  CoinUrlBox,
  CopyIcon,
  HomePageDiv,
} from "./CoinBox1.styles";

export const CoinBox1 = ({ src, coinName, coinSymbol, coinHomePage }) => {
  const [url, setUrl] = useState("");
  const urlRef = useRef();

  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
    alert("Copied to clipboard!");
  };
  useEffect(() => {
    setUrl(urlRef.current.innerText);
  });
  return (
    <CoinBoxContainer>
      <CoinBox>
        <CoinBoxInner>
          <CoinImage src={src} />
        </CoinBoxInner>
        <h2>
          {coinName} ({coinSymbol})
        </h2>
      </CoinBox>
      <CoinUrlBox>
        <CopyIcon onClick={copyUrl} />
        <HomePageDiv ref={urlRef}>{coinHomePage}</HomePageDiv>
      </CoinUrlBox>
    </CoinBoxContainer>
  );
};
