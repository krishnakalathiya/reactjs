import { combineReducers } from "redux";
import { ChcolateReducer , CakeReducer , IcecreamReducer } from "./reducer";

export const rootReducer = combineReducers({
  choco:ChcolateReducer,
  cake:CakeReducer,
  ice:IcecreamReducer
})