import {
  GET_USERS_REQUEST_ACTION,
  GET_USERS_RESPONSE_ACTION,
} from '@/redux/actions/usersAction'
import { RESET_USERS_ACTION } from '../actions/usersAction'

const initialState = {
  loading: false,
  users: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST_ACTION:
      return {
        ...state,
        loading: true,
      }
    case GET_USERS_RESPONSE_ACTION:
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    case RESET_USERS_ACTION:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default usersReducer
