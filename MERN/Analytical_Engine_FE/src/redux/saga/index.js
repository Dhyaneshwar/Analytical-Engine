import { all } from 'redux-saga/effects'
import { watchYourSaga } from './yourSaga'
import { watchContactsSaga } from './contactsSaga'

function* rootSaga() {
  yield all([watchYourSaga(), watchContactsSaga()])
}

export default rootSaga
