import { all } from 'redux-saga/effects'
import { watchTestSaga } from './testSaga'
import { watchContactsSaga } from './contactsSaga'
import { watchUsersSaga } from './usersSaga'
import { watchRecommendationsSaga } from './recommendationsSaga'
import { watchContentsSaga } from './contentsSaga'
import { watchEventsSaga } from './eventsSaga'
import { watchOrganisationsSaga } from './organisationsSaga'

function* rootSaga() {
  yield all([
    watchTestSaga(),
    watchContactsSaga(),
    watchContentsSaga(),
    watchEventsSaga(),
    watchOrganisationsSaga(),
    watchRecommendationsSaga(),
    watchUsersSaga(),
  ])
}

export default rootSaga
