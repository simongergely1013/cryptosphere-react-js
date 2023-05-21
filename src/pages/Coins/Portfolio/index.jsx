import React from "react";
import styled from "styled-components";

const PortfolioPageWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: ${(props) => props.theme.text};
`;
const HeaderDiv = styled.div`
    padding-left: 60px;
`;

export default class Portfolio extends React.Component {
    state = {}

    render(){
        return(
            <PortfolioPageWrapper>
            <HeaderDiv>
            <h2>Your statistics</h2>
            </HeaderDiv>
        </PortfolioPageWrapper>
        )
    }
}