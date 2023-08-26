export const ACTIONS = {
  GET_PORTFOLIO_DATA_PENDING: "GET_PORTFOLIO_DATA_PENDING",
  GET_PORTFOLIO_DATA_SUCCESS: "GET_PORTFOLIO_DATA_SUCCESS",
  GET_PORTFOLIO_DATA_ERROR: "GET_PORTFOLIO_DATA_ERROR",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  ADD_ASSET_PENDING: "ADD_ASSET",
  ADD_ASSET_SUCCESS: "ADD_ASSET_SUCCESS",
  ADD_ASSET_ERROR: "ADD_ASSET_ERROR",
  REMOVE_ASSET: "REMOVE_ASSET",
};

const initialState = {
  isLoading: false,
  error: false,
  isModalOpen: false,
  assets: [
    {
      id: "bitcoin",
      date: "17-07-2022",
      amount: 0.67,
    },
    {
      id: "ethereum",
      date: "17-07-2023",
      amount: 1,
    },
  ],
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PORTFOLIO_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case ACTIONS.GET_PORTFOLIO_DATA_SUCCESS:
      return {
        ...state,
        assets: action.payload,
      };
    case ACTIONS.GET_PORTFOLIO_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case ACTIONS.ADD_ASSET_PENDING:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case ACTIONS.ADD_ASSET_SUCCESS:
      return {
        ...state,
        assets: action.payload,
        isModalOpen: false,
      };
    case ACTIONS.ADD_ASSET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ACTIONS.REMOVE_ASSET:
      return {
        ...state,
        assets: action.payload,
      };

    default:
      return state;
  }
};

export default portfolioReducer;
