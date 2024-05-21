import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  GET_USERS_REQUEST_ACTION,
  getUsersResponseAction,
} from '@/redux/actions/usersAction'

function* usersSagaWorker() {
  try {
    const response = yield call(axios.get, `${process.env.VITE_API_URL}/users`)
    yield put(getUsersResponseAction(response.data.users))
  } catch (error) {
    console.log(error)
  }
}

export function* watchUsersSaga() {
  yield takeLatest(GET_USERS_REQUEST_ACTION, usersSagaWorker)
}
