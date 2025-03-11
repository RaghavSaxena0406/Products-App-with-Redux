import { combineReducers, legacy_createStore as createStore } from "redux";
import productsReducer from "./reducers/products-reducer";

const rootReducer = combineReducers({
  productsReducer,
});

export default createStore(rootReducer);
