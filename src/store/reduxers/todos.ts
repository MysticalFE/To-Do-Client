import { ADD_TO_DO, COMPLETED_TO_DO } from "../actionTypes";
import { Item, addToDo } from "@/typings";

const initialState: Array<Item> = [];

export default (state = initialState, action: addToDo) => {
  const { type, value, id } = action;
  switch (type) {
    case ADD_TO_DO:
      let item = {
        value,
      };
      return [...state, item];
    case COMPLETED_TO_DO:
      return [...state, { id }];
    default:
      return state;
  }
};
