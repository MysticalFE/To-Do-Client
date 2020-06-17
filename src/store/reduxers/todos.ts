import { ADD_TO_DO } from "../actionTypes";

export interface Item {
  id: number;
  value: string;
  completed: boolean;
}

export interface addToDo {
  type: string;
  value: string;
}

const initialState: Array<Item> = [];

export default (state = initialState, action: addToDo) => {
  const { type } = action;
  switch (type) {
    case ADD_TO_DO:
      let id = 0;
      let item = {
        id: ++id,
        value: action.value,
        completed: false,
      };
      return [...state, item];
    default:
      return state;
  }
};
