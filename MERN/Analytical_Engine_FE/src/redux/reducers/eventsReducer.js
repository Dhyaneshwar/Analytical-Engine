import {
  GET_EVENTS_REQUEST_ACTION,
  GET_EVENTS_RESPONSE_ACTION,
} from '@/redux/actions/eventsAction'
import { RESET_EVENTS_ACTION } from '../actions/eventsAction'

const initialState = {
  loading: false,
  events: [],
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST_ACTION:
      return {
        ...state,
        loading: true,
      }
    case GET_EVENTS_RESPONSE_ACTION:
      return {
        ...state,
        loading: false,
        events: action.payload,
      }
    case RESET_EVENTS_ACTION:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default eventsReducer
