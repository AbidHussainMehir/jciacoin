import walletReducer from "./wallet";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  wallet: walletReducer,
});

export default rootReducer;
