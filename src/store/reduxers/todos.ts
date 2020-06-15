import { ADD_TO_DO } from "../actionTypes";

interface Item {
  id: number;
  value: string;
}

export interface addToDo {
  type: string;
  toggle?: boolean;
  value: "";
}

const initialState = {
  toggle: false,
  list: [
    {
      id: 0,
      value: "",
    },
  ],
};

export default (state = initialState, action: addToDo) => {
  console.log(action);
  const { type } = action;
  switch (type) {
    case ADD_TO_DO:
      let id = 0;
      let item = {
        id: ++id,
        value: action.value,
      };
      return {
        toggle: action.toggle,
        list: [...state.list, item],
      };
    default:
      return state;
  }
};
