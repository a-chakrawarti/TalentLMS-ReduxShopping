export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTAL = "GET_TOTAL";
export const GET_AMOUNT = "GET_AMOUNT";

// Action creators
export const removeItem = (id) => {
  return {
    type: REMOVE,
    payload: { id },
  };
};

export const decreaseItem = (id, amount) => {
  return {
    type: DECREASE,
    payload: { id, amount },
  };
};

export const increaseItem = (id) => {
  return { type: INCREASE, payload: { id } };
};
