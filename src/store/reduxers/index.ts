import { combineReducers } from "redux";
import todos from "./todos";
import toggle from "./toggle";
import list from "./getList";
import { Item } from "@/typings";

export interface AppStoreType {
  todos: Array<Item>;
}

export interface ToDoList {
  list: {
    data: Item[];
  };
}

export interface ToggleType {
  toggle: boolean;
}

export default combineReducers({
  todos,
  toggle,
  list,
});
