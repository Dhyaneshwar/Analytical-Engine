import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '@/redux/reducers'
import rootSaga from '@/redux/saga'
import { api } from '@/state/api'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware).concat(api.middleware),
})
sagaMiddleware.run(rootSaga)
// setupListeners(store.dispatch)

export default store
