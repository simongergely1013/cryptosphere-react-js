import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import navBar from "./navbar";
import navBarSearch from "./navBarSearch";
import coins from "./coins";
import coinsTable from "./coinsTable";
import coin from "./coin";
import currencyConverter from "./currencyConverter";
import portfolio from "./portfolio";
import portfolioSearch from "./portfolioSearch";
import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

const portfolioPersistConfig = {
  key: "portfolio",
  storage,
  whitelist: ["assets"],
};

const rootReducer = combineReducers({
  navBar,
  navBarSearch,
  coins,
  coinsTable,
  coin,
  currencyConverter,
  portfolio: persistReducer(portfolioPersistConfig, portfolio),
  portfolioSearch,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "navBar",
    "navBarSearch",
    "coins",
    "coinsTable",
    "coin",
    "currencyConverter",
    "portfolio",
    "portfolioSearch",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
