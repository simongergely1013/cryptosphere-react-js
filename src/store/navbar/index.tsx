type Actions = {
  GET_NAVBAR_DATA_PENDING: string,
  GET_NAVBAR_DATA_SUCCESS: string,
  GET_NAVBAR_DATA_ERROR: string,
}

export const ACTIONS: Actions = {
  GET_NAVBAR_DATA_PENDING: "GET_NAVBAR_DATA_PENDING",
  GET_NAVBAR_DATA_SUCCESS: "GET_NAVBAR_DATA_SUCCESS",
  GET_NAVBAR_DATA_ERROR: "GET_NAVBAR_DATA_ERROR",
};

type InitialState = {
  isLoading: boolean,
  isError: boolean,
  navBarData: {
    btcDominance: number,
    coins: number,
    ethDominance: number,
    marketCapChange24h: number,
    markets: number,
    totalMarketCap: string,
    totalMarketCapLong: string,
    totalVolume: string,
    totalVolumeLong: string,
    totalVolumePercentage: string,
    btcMarketCap: string,
    ethMarketCap: string,
  }
}

const initialState: InitialState = {
  isLoading: false,
  isError: false,
  navBarData: {
    btcDominance: 0,
    coins: 0,
    ethDominance: 0,
    marketCapChange24h: 0,
    markets: 0,
    totalMarketCap: "",
    totalMarketCapLong: "",
    totalVolume: "",
    totalVolumeLong: "",
    totalVolumePercentage: "",
    btcMarketCap: "",
    ethMarketCap: "",
  },
};

const navBarReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case ACTIONS.GET_NAVBAR_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTIONS.GET_NAVBAR_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        navBarData: action.payload,
      };
    case ACTIONS.GET_NAVBAR_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default navBarReducer;
