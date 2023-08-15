import styled from "styled-components";

export const PortfolioPageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding-left: 60px;
  padding-right: 60px;
  transition: all 0.2s ease-in-out;
`;
