import { all } from "redux-saga/effects";
import { watchYourSaga } from "./yourSaga";

function* rootSaga() {
  yield all([watchYourSaga()]);
}

export default rootSaga;
