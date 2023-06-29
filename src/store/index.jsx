// This is what I tried before implementing useReducer
// It wasn't working
// I don't know if I need any of this now
// Should I keep it?

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
