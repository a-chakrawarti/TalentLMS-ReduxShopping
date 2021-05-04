import { CLEAR_CART, DECREASE, REMOVE, INCREASE, GET_TOTAL } from "./actions";

import cartItems from "./assets/data";

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREASE: {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    }
    case INCREASE: {
      //   console.log("Increased");
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case REMOVE: {
      //   console.log("Removed!", action.payload.id);
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }

    case GET_TOTAL: {
      let { total, amount } = state.cart.reduce(
        (cartTotal, item) => {
          const { price, amount } = item;
          const itemTotal = price * amount;

          // Total Price
          cartTotal.total += itemTotal;

          // No of item in cart
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));

      return {
        ...state,
        total,
        amount,
      };
    }
    default:
      return state;
  }
};

export default reducer;
