import styled from "styled-components";

export const WatchListPageWrapper = styled.div`
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
export const modalStyles = {
  content: {
    width: "40%",
    height: "504px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    borderRadius: "20px",
  },
};
