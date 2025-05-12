// Root saga that combines all individual sagas for the Redux-Saga middleware
import { all, call } from "typed-redux-saga/macro";

import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
