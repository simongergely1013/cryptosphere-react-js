import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import navBar from "./navbar";
import coins from "./coins";
import coinsTable from "./coinsTable";
import coin from "./coin";
import portfolio from "./portfolio";
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
  coins,
  coinsTable,
  coin,
  portfolio: persistReducer(portfolioPersistConfig, portfolio),
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["navBar", "coins", "coinsTable", "coin", "portfolio"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
