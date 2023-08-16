import React, { useState, useRef, useEffect } from "react";
import { CoinUrlDiv, CopyIcon, HomePageDiv } from "./CoinUrlBox.styles";

export const CoinUrlBox = ({ coinHomePage }) => {
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
    <CoinUrlDiv>
      <CopyIcon onClick={copyUrl} />
      <HomePageDiv ref={urlRef}>{coinHomePage}</HomePageDiv>
    </CoinUrlDiv>
  );
};
