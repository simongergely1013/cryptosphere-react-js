import React, { useState, useRef, useEffect } from "react";
import { UrlDiv, CopyIcon, NewTabIcon } from "./CoinUrl.styles";

export const CoinUrl = ({ blockchainSite }) => {
  const [url, setUrl] = useState("");
  const urlRef = useRef();

  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
    alert("Copied to clipboard!");
  };
  const openInNewTab = () => {
    window.open(url);
  };
  useEffect(() => {
    setUrl(urlRef.current.innerText);
  });
  return (
    <UrlDiv>
      <CopyIcon onClick={copyUrl} />
      <div ref={urlRef}>{blockchainSite}</div>
      <NewTabIcon onClick={openInNewTab} />
    </UrlDiv>
  );
};
