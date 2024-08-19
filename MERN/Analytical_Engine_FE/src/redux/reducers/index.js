import { combineReducers } from 'redux'
import contactsReducer from './contactsReducer'
import contentsReducer from './contentsReducer'
import eventsReducer from './eventsReducer'
import organisationsReducer from './organisationsReducer'
import usersReducer from './usersReducer'
import recommendationsReducer from './recommendationsReducer'
import { api } from '@/state/api'

const rootReducer = combineReducers({
  contactsReducer,
  contentsReducer,
  eventsReducer,
  organisationsReducer,
  recommendationsReducer,
  usersReducer,
  [api.reducerPath]: api.reducer,
})

export default rootReducer
