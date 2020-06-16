import { TOGGLE_MODAL } from "../actionTypes";

export interface Toggle {
  type: string;
  toggle?: boolean;
}

const initialState: boolean = false;

export default (state = initialState, action: Toggle) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return action.toggle;
    default:
      return state;
  }
};
