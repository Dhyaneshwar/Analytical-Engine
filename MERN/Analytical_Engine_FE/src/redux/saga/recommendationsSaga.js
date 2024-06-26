import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  GET_ASSET_RECOMMENDATION_REQUEST_ACTION,
  GET_RECOMMENDATIONS_REQUEST_ACTION,
  getAssestRecommendationsResponseAction,
  getRecommendationsResponseAction,
} from '../actions/recommendationsAction'
import qs from 'qs'

function* recommendationsSagaWorker() {
  try {
    const response = yield call(
      axios.get,
      `${process.env.VITE_API_URL}/recommendations`
    )
    yield put(getRecommendationsResponseAction(response.data.recommendations))
  } catch (error) {
    console.log(error)
  }
}

function* assetRecommendationsSagaWorker({ payload }) {
  const { assest_type, assest_ids } = payload
  const queryString = qs.stringify(
    { asset_id: assest_ids },
    { arrayFormat: 'indices' }
  )
  try {
    const response = yield call(
      axios.get,
      `${process.env.VITE_API_URL}/recommendations/${assest_type}/${queryString}`
    )
    const payload = {
      response: response?.data?.recommendations || [],
      asset: assest_type,
    }
    yield put(getAssestRecommendationsResponseAction(payload))
  } catch (error) {
    console.log(error)
  }
}

export function* watchRecommendationsSaga() {
  yield takeLatest(
    GET_ASSET_RECOMMENDATION_REQUEST_ACTION,
    assetRecommendationsSagaWorker
  )
  yield takeLatest(
    GET_RECOMMENDATIONS_REQUEST_ACTION,
    recommendationsSagaWorker
  )
}
