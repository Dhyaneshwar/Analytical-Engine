import { takeLatest, call, put } from 'redux-saga/effects'
import { YOUR_ACTION_TYPE } from '@/redux/actions/yourAction'

function* yourSagaWorker(action) {
  try {
    console.log('hello world')
  } catch (error) {
    console.log(error)
  }
}

export function* watchYourSaga() {
  yield takeLatest(YOUR_ACTION_TYPE, yourSagaWorker)
}
