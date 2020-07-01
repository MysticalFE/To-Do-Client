import {
  ADD_TO_DO,
  TOGGLE_MODAL,
  COMPLETED_TO_DO,
  FETCH_TODO_LIST,
} from "./actionTypes";
import { Item } from "@/typings";
import { $todo } from "@/api";

export const getList = (list: Item[]) => ({
  type: FETCH_TODO_LIST,
  data: list,
});

export const addToDos = (value: string) => {
  return {
    value,
    type: ADD_TO_DO,
  };
};

export const toggle = (toggle: boolean, fetchAddSuccess: boolean = false) => ({
  toggle,
  fetchAddSuccess,
  type: TOGGLE_MODAL,
});

export const completedToDo = (id: number) => ({
  id,
  type: COMPLETED_TO_DO,
});

export function fetchList() {
  return async (dispatch: any) => {
    const data = await $todo.getList();
    dispatch(getList(data));
    return data;
  };
}

export function fetchAdd(value: string) {
  return async () => {
    await $todo.add({ data: { value } });
    // dispatch(getList(data));
    // return Promise.resolve();
  };
}
