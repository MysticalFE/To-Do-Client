import {
  ADD_TO_DO,
  TOGGLE_MODAL,
  COMPLETED_TO_DO,
  FETCH_TODO_LIST,
} from "./actionTypes";
import { Item } from "@/typings";
import { $todo } from "@/api";

let nextTodoId = 0;

export const getList = (list: Item[]) => ({
  type: FETCH_TODO_LIST,
  data: list,
});

export function fetchList() {
  return (dispatch: any) => {
    return $todo.getList().then((data) => {
      dispatch(getList(data));
      console.log(data);
      return data;
    });
  };
}
export const addToDos = (value: string) => {
  return {
    value,
    id: nextTodoId++,
    type: ADD_TO_DO,
  };
};

export const toggle = (toggle: boolean) => ({
  toggle,
  type: TOGGLE_MODAL,
});

export const completedToDo = (id: number) => ({
  id,
  type: COMPLETED_TO_DO,
});
