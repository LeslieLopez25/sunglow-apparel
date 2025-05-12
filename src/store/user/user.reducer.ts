import { AnyAction } from "redux";

import {
  signInFailed,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
  signInSuccess,
} from "./user.action";

import { UserData } from "../../utils/firebase/firebase.utils";

// Defines the shape of the user state in Redux
export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

// Initial state when the app starts
const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

// Reducer that handles user-related actions to update the state
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  //  When user signs in successfully, set currentUser to the returned payload
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  // When user signs out successfully, clear the currentUser
  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  // If any authentication action fails, store the error
  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};
