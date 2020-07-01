import { FETCH_TODO_LIST } from "../actionTypes";
import { Item, GetListAction } from "../../typings";

const initialState: Array<Item> = [];

export default (state = initialState, action: GetListAction) => {
  const { type } = action;
  switch (type) {
    case FETCH_TODO_LIST:
      return {
        ...state,
        data: action.data,
      };
    default:
      return { ...state };
  }
};
