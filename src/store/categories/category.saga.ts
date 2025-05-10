import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

// Worker saga: Fetches categories from Firebase and dispatches success or failure
export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error as Error));
  }
}

// Watcher saga: Listens for FETCH_CATEGORIES_START and triggers the worker
export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

// Root saga for categories: Initializes all category-related sagas
export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
