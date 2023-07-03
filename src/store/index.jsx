import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";

const initialState = {};

const coinReducer = (state = initialState, action) => {
  return state;
};

const reducers = combineReducers({
  coin: coinReducer,
});

export const store = createStore(reducers);
