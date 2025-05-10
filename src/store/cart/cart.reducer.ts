import { AnyAction } from "redux";

import { CartItem } from "./cart.types";
import { setIsCartOpen, setCartItems } from "./cart.action";

// Type for the cart state in the Redux store
export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

// Initial state for the cart
export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

// Reducer function to handle cart-related actions
// Updates cart state based on the type of action dispatched
export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction) => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  // Handles setting the array of items in the cart
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
