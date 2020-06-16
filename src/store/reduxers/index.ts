import { combineReducers } from "redux";
import todos from "./todos";
import toggle from "./toggle";
import { Item } from "./todos";

export interface AppStoreType {
  todos: Array<Item>;
}

export interface ToggleType {
  toggle: boolean;
}

export default combineReducers({
  todos,
  toggle,
});
