import { combineReducers } from "redux";
import todos from "./todos";
import modal from "./toggle";
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
  fetchAddSuccess: boolean;
}

export default combineReducers({
  todos,
  modal,
  list,
});
