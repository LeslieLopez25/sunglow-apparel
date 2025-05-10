import { createSelector } from "reselect";

import { RootState } from "../store";

import { CartState } from "./cart.reducer";

// Base selector to get the cart slice from the overall Redux state
const selectCartReducer = (state: RootState): CartState => state.cart;

// Selector to get the boolean indicating whether the cart dropdown is open
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

// Selector to get the array of items in the cart
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

// Selector to calculate the total cost of all items in the cart
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

// Selector to calculate the total quantity of items in the cart
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
