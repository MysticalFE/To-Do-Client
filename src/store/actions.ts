import { ADD_TO_DO, TOGGLE_MODAL } from "./actionTypes";

export const addToDos = (value: string) => {
  return {
    value,
    type: ADD_TO_DO,
  };
};

export const toggle = (toggle: boolean) => ({
  toggle,
  type: TOGGLE_MODAL,
});
