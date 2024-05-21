import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  GET_EVENTS_REQUEST_ACTION,
  getEventsResponseAction,
} from '@/redux/actions/eventsAction'

function* eventsSagaWorker() {
  try {
    const response = yield call(axios.get, `${process.env.VITE_API_URL}/events`)
    yield put(getEventsResponseAction(response.data.events))
  } catch (error) {
    console.log(error)
  }
}

export function* watchEventsSaga() {
  yield takeLatest(GET_EVENTS_REQUEST_ACTION, eventsSagaWorker)
}
