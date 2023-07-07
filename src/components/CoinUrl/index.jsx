import React, { useState, useRef, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { UrlDiv, CopyIcon, NewTabIcon } from "./CoinUrl.styles";

export const CoinUrl = ({ blockchainSite }) => {
  const [url, setUrl] = useState("");
  const urlRef = useRef();

  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
    alert("URL copied");
  };
  const openInNewTab = () => {
    window.open(url);
  };
  useEffect(() => {
    setUrl(urlRef.current.innerText);
  });
  return (
    <UrlDiv>
      <CopyToClipboard text={url}>
        <CopyIcon onClick={copyUrl} />
      </CopyToClipboard>
      <div ref={urlRef}>{blockchainSite}</div>
      <NewTabIcon onClick={openInNewTab} />
    </UrlDiv>
  );
};
