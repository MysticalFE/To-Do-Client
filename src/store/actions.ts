import { ADD_TO_DO } from "./actionTypes";

export const addToDos = (data: boolean) => {
  return {
    data,
    type: ADD_TO_DO,
  };
};
