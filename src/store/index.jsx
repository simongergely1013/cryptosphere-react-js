import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import coinsData from "./coinsData";

const reducers = combineReducers({
  coinsData,
});

export const store = createStore(reducers, applyMiddleware(thunk));
