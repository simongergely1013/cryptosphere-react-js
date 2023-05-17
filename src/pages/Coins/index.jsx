import React from "react";
import styled from "styled-components";

const CoinsPageWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: ${(props) => props.theme.text};
`;
const HeaderDiv = styled.div`
    padding-left: 60px;
`;
export default class Coins extends React.Component {
    state = {}

    render(){
        return(
            <CoinsPageWrapper>
                <HeaderDiv>
                <h2>Your overview</h2>
                </HeaderDiv>
            </CoinsPageWrapper>
        )
    }
}