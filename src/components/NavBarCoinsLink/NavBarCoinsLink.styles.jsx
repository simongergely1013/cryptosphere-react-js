import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const ListItemCoins = styled.li`
  list-style-type: none;
  width: 100px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 40px 10px 10px;
  border-radius: 10px;
  z-index: 10;
  background: {
    this.props.state.coins: "blue" ? "green";
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  font-size: 20px;
  z-index: 10;
`;
