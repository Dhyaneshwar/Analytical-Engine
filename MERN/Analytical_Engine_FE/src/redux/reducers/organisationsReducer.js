import {
  GET_ORGANISATIONS_REQUEST_ACTION,
  GET_ORGANISATIONS_RESPONSE_ACTION,
} from '@/redux/actions/organisationsAction'
import { RESET_ORGANISATIONS_ACTION } from '../actions/organisationsAction'

const initialState = {
  loading: false,
  organisations: [],
}

const organisationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORGANISATIONS_REQUEST_ACTION:
      return {
        ...state,
        loading: true,
      }
    case GET_ORGANISATIONS_RESPONSE_ACTION:
      return {
        ...state,
        loading: false,
        organisations: action.payload,
      }
    case RESET_ORGANISATIONS_ACTION:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default organisationsReducer
