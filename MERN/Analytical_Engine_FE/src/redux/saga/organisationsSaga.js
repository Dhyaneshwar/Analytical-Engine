import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  GET_ORGANISATIONS_REQUEST_ACTION,
  getOrganisationsResponseAction,
} from '@/redux/actions/organisationsAction'

function* organisationsSagaWorker() {
  try {
    const response = yield call(
      axios.get,
      `${process.env.VITE_API_URL}/organisations`
    )
    yield put(getOrganisationsResponseAction(response.data.organisations))
  } catch (error) {
    console.log(error)
  }
}

export function* watchOrganisationsSaga() {
  yield takeLatest(GET_ORGANISATIONS_REQUEST_ACTION, organisationsSagaWorker)
}
