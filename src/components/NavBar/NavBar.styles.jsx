import React from "react";
import styled from "styled-components";

export const StyledNav = styled.nav`
  max-width: 1720px;
  display: flex;
  align-items: center;
  height: 97px;
  padding-left: 44px;
  padding-right: 20px;
  background: ${(props) => props.theme.main};
  position: relative;
  z-index: 50;
  transition: all 0.2s ease-in-out;
`;
export const LinksList = styled.ul`
  display: flex;
  z-index: 10;
  width: 50%;
`;
export const NavBarInnerContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CurrencyDiv = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
`;
export const SubNavContainer = styled.div`
  width: 100%;
  height: 43px;
  display: flex;
  margin-bottom: 20px;
  border-radius: 10px;
`;
export const SubNavEmptyDiv = styled.div`
  width: 25%;
  height: 100%;
  background: ${(props) => props.theme.background};
  transition: all 0.2s ease-in-out;
`;
export const SubNavDivCenter = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.main};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: all 0.2s ease-in-out;
`;
export const ListDiv = styled.div`
  width: 100%;
  padding: 10px;
`;
export const StyledListSubNav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
`;
export const BulletPoint = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.theme.bulletPointBackground};
  margin-right: 10px;
  transition: all 0.2s ease-in-out;
`;
const ArrowTrendingDown = styled.svg`
  width: 25px;
  color: red;
  margin-left: 5px;
`;
const ArrowTrendingUp = styled.svg`
  width: 25px;
  color: green;
  margin-left: 5px;
`;
export const TrendingDown = () => {
  return (
    <ArrowTrendingDown
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
      />
    </ArrowTrendingDown>
  );
};
export const TrendingUp = () => {
  return (
    <ArrowTrendingUp
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
      />
    </ArrowTrendingUp>
  );
};
