import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  GET_CONTACTS_REQUEST_ACTION,
  getContactsResponseAction,
} from '@/redux/actions/contactsAction'

function* contactsSagaWorker() {
  try {
    const response = yield call(
      axios.get,
      `${process.env.VITE_API_URL}/contacts`
    )
    yield put(getContactsResponseAction(response.data.contacts))
  } catch (error) {
    console.log(error)
  }
}

export function* watchContactsSaga() {
  yield takeLatest(GET_CONTACTS_REQUEST_ACTION, contactsSagaWorker)
}
