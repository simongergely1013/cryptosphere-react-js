import React, { useState, useRef, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
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
    alert("URL copied");
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
        <CopyToClipboard text={url}>
          <CopyIcon onClick={copyUrl} />
        </CopyToClipboard>
        <HomePageDiv ref={urlRef}>{coinHomePage}</HomePageDiv>
      </CoinUrlBox>
    </CoinBoxContainer>
  );
};
