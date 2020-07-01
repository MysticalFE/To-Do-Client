import { ADD_TO_DO, COMPLETED_TO_DO } from "../actionTypes";
import { Item, addToDo } from "@/typings";

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
