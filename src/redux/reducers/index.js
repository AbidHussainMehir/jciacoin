import walletReducer from "./wallet";
import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["wallet"],
};

const rootReducer = combineReducers({
  wallet: walletReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
