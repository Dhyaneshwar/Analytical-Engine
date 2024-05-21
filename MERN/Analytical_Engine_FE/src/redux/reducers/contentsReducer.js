import {
  GET_CONTENTS_REQUEST_ACTION,
  GET_CONTENTS_RESPONSE_ACTION,
} from '@/redux/actions/contentsAction'
import { RESET_CONTENTS_ACTION } from '../actions/contentsAction'

const initialState = {
  loading: false,
  contents: [],
}

const contentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENTS_REQUEST_ACTION:
      return {
        ...state,
        loading: true,
      }
    case GET_CONTENTS_RESPONSE_ACTION:
      return {
        ...state,
        loading: false,
        contents: action.payload,
      }
    case RESET_CONTENTS_ACTION:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default contentsReducer
