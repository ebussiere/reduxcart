// reducer - function that is used to update the store.
import { CLEAR_CART } from './actions.js';
function reducer(state, action) {
  console.log({ state, action });

  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [], amount: 0 };
    case 'DECREASE':
      return { ...state, count: state.count - 1 };
    case 'INCREASE':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export default reducer;
