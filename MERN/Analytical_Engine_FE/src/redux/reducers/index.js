import { combineReducers } from 'redux'
import yourReducer from './yourReducer'
import authReducer from './authReducer'
import contactsReducer from './contactsReducer'
import recommendationsReducer from './recommendationsReducer'

const rootReducer = combineReducers({
  authReducer,
  yourReducer,
  contactsReducer,
  recommendationsReducer,
})

export default rootReducer
