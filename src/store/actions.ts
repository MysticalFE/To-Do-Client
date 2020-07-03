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
    await $todo.add({ value });
    // dispatch(getList(data));
    // return Promise.resolve();
  };
}

export function fetchUpdate(param: Item) {
  return async (dispatch: any) => {
    await $todo.update({ id: param.id, completed: !param.completed });
    dispatch(completedToDo(param.id as number));
    return param.id;
  };
}

export function fetchQuery(value: string) {
  return async (dispatch: any) => {
    const data = await $todo.query({ value });
    dispatch(getList(data));
    return data;
  };
}
