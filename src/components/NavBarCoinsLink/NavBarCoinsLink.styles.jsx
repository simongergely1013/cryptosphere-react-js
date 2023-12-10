import styled from "styled-components";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

export const ListItemCoins = styled.li`
  list-style-type: none;
  width: 150px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px 10px 10px;
  border-radius: 10px;
  background: ${(props) => props.background};
  transition: all 0.2s ease-in-out;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-size: 22px;
  font-wieght: 500;
`;
