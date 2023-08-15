import thunk from "redux-thunk";
import navBar from "./navbar";
import coins from "./coins";
import coinsTable from "./coinsTable";
import coin from "./coin";
import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";

const reducers = combineReducers({
  navBar,
  coins,
  coinsTable,
  coin,
});

export const store = createStore(reducers, applyMiddleware(thunk));
