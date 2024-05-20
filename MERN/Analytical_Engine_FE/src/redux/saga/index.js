import { all } from 'redux-saga/effects'
import { watchYourSaga } from './yourSaga'
import { watchContactsSaga } from './contactsSaga'
import { watchRecommendationsSaga } from './recommendationsSaga'

function* rootSaga() {
  yield all([watchYourSaga(), watchContactsSaga(), watchRecommendationsSaga()])
}

export default rootSaga
