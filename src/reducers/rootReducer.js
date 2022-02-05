import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  content: todoReducer,

  // TODO: CAlendarReducer
});
