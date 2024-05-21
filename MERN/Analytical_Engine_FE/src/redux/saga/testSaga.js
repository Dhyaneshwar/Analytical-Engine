import { takeLatest, call, put } from 'redux-saga/effects'
import { TEST_ACTION_TYPE } from '@/redux/actions/testAction'

function* testSagaWorker(action) {
  try {
    console.log('hello world')
  } catch (error) {
    console.log(error)
  }
}

export function* watchTestSaga() {
  yield takeLatest(TEST_ACTION_TYPE, testSagaWorker)
}
