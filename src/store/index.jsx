import thunk from "redux-thunk";
import navBar from "./navbar";
import coins from "./coins";
import coinsTable from "./coinsTable";
import coin from "./coin";
import portfolio from "./portfolio";
import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";

const reducers = combineReducers({
  navBar,
  coins,
  coinsTable,
  coin,
  portfolio,
});

export const store = createStore(reducers, applyMiddleware(thunk));
