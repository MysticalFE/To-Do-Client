import { combineReducers } from "redux";
import todos from "./todos";

export interface AppStoreType {
  todos: {
    type: string;
    toggle: boolean;
  };
}

export default combineReducers({
  todos,
});
