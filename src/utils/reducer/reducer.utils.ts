// Utility functions for creating and type-checking Redux actions
import { AnyAction } from "redux";

// Enhances an action creator with a `match` method and typed `type` property
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

// Overload for no-argument action creators
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

// Overload for argument-based action creators
export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

// Implementation of `withMatcher`
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

// Action with payload type
export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

// Action without payload
export type Action<T> = {
  type: T;
};

// Overload for action with payload
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

// Overload for action without payload
export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

// Implementation of `createAction`
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
