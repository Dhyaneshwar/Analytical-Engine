import { takeLatest, call, put } from 'redux-saga/effects'
import { GET_CONTACTS_REQUEST_ACTION } from '@/redux/actions/contactsAction'
import axios from 'axios'
import { getContactsResponseAction } from '../actions/contactsAction'

function* contactsSagaWorker(action) {
  try {
    console.log('GET_CONTACTS_REQUEST_ACTION')
    const response = yield call(
      axios.get,
      `${process.env.VITE_API_URL}/contacts`
    )
    console.log(response)
    yield put(getContactsResponseAction(response.data.contacts))
  } catch (error) {
    console.log(error)
  }
}

export function* watchContactsSaga() {
  yield takeLatest(GET_CONTACTS_REQUEST_ACTION, contactsSagaWorker)
}
