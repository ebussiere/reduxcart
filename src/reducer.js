// reducer - function that is used to update the store.
import cartItems from "./cart-items.js";
import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE } from './actions.js';

const initialState = {
  cart: cartItems,
  total: 105,
  amount: 5
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [], amount: 0 };
    case DECREASE:
      let tempCartDecrease = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        };
        return cartItem;
      });
      return { ...state, cart: tempCartDecrease };

    case INCREASE:
      let tempCartIncrease =
        state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount + 1 };
          };
          return cartItem;
        }
        );

      return { ...state, cart: tempCartIncrease };
    case REMOVE:
      return { ...state, cart: state.cart.filter((res) => res.id !== action.payload.id) };
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      }, {
        total: 0,
        amount: 0
      });
      total = parseFloat(total.toFixed(2));

      return { ...state, total, amount };
    default:
      return state;
  }
}

export default reducer;
