import { ADD_TO_DO, TOGGLE_MODAL, COMPLETED_TO_DO } from "./actionTypes";

let nextTodoId = 0;
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
