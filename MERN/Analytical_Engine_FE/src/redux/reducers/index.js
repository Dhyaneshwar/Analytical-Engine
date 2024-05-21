import { combineReducers } from 'redux'
import contactsReducer from './contactsReducer'
import contentsReducer from './contentsReducer'
import eventsReducer from './eventsReducer'
import organisationsReducer from './organisationsReducer'
import usersReducer from './usersReducer'
import recommendationsReducer from './recommendationsReducer'

const rootReducer = combineReducers({
  contactsReducer,
  contentsReducer,
  eventsReducer,
  organisationsReducer,
  recommendationsReducer,
  usersReducer,
})

export default rootReducer
