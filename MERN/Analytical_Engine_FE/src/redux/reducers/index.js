import { combineReducers } from 'redux'
import yourReducer from './yourReducer'
import authReducer from './authReducer'
import contactsReducer from './contactsReducer'

const rootReducer = combineReducers({
  authReducer,
  yourReducer,
  contactsReducer,
})

export default rootReducer
