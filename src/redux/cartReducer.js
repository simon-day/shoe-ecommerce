import { cartActionTypes } from './cartActionTypes';

const INITIAL_STATE = {
  hidden: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};
