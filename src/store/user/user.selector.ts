import { createSelector } from "reselect";

import { RootState } from "../store";

import { UserState } from "./user.reducer";

// Selector to get the entire user state slice from the Redux store
export const selectUserReducer = (state: RootState): UserState => state.user;

// Selector to get only the currentUser object from the user state slice
export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
