import React from "react";
import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
`;
export const MainContainer = styled.div`
    width: 1920px;
    height: 1848px;
    border-color: #191b1f;
    border-width: 10px;
    border-style: solid;
    background: #1f2128;
`;
export const NavBar = styled.nav`
    display: flex;
`;
const SearchInput = styled.input``;
export const Search = () => {
    return(
        <div>
            {/* need search svg here ?*/}
            <SearchInput/>
        </div>
    )
}

export const CurrencySelector = (props) => {
    return(
        <div>
            {/* img with src={props.src} ? */}
            <select>
                <option value="usd">USD</option>
                <option value="gbp">GBP</option>
                <option value="eur">EUR</option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
            </select>
        </div>
    )
}
export const ThemeSwitch = (props) => {
    return(
        <div>
            {/* toggle svg */}
        </div>
    )
}
const InfoDiv = styled.div`
    display: flex;
`;
export const MacroIndexes = (props) => {
    return(
        <InfoDiv>
            {/* macro indexes */}
        </InfoDiv>
    )
}