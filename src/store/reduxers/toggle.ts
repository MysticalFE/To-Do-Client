import { TOGGLE_MODAL } from "../actionTypes";

export interface Toggle {
  type: string;
  toggle?: boolean;
  fetchAddSuccess?: boolean;
}

const initialState = {
  toggle: false,
  fetchAddSuccess: false,
};

export default (state = initialState, action: Toggle) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        ...action,
      };
    default:
      return { ...state };
  }
};
