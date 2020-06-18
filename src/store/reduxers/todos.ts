import { ADD_TO_DO, COMPLETED_TO_DO } from "../actionTypes";

export interface Item {
  id: number;
  value: string;
  completed: boolean;
}

export interface addToDo {
  type: string;
  value: string;
  id?: number;
}

const initialState: Array<Item> = [];

export default (state = initialState, action: addToDo) => {
  const { type } = action;
  switch (type) {
    case ADD_TO_DO:
      let item = {
        id: action.id,
        value: action.value,
        completed: false,
      };
      return [...state, item];
    case COMPLETED_TO_DO:
      console.log(state);
      console.log(action);
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    default:
      return state;
  }
};
