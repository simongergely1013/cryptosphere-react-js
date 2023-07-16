import thunk from "redux-thunk";
import coins from "./coins";
import coinsTable from "./coinsTable";
import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";

const reducers = combineReducers({
  coins,
  coinsTable,
});

export const store = createStore(reducers, applyMiddleware(thunk));
