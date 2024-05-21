import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  GET_CONTENTS_REQUEST_ACTION,
  getContentsResponseAction,
} from '@/redux/actions/contentsAction'

function* contentsSagaWorker() {
  try {
    const response = yield call(
      axios.get,
      `${process.env.VITE_API_URL}/contents`
    )
    yield put(getContentsResponseAction(response.data.contents))
  } catch (error) {
    console.log(error)
  }
}

export function* watchContentsSaga() {
  yield takeLatest(GET_CONTENTS_REQUEST_ACTION, contentsSagaWorker)
}
