import {
  GET_ASSET_RECOMMENDATION_REQUEST_ACTION,
  GET_ASSET_RECOMMENDATION_RESPONSE_ACTION,
} from '../actions/recommendationsAction'

const initialState = {
  loading: false,
  contacts: [],
  contents: [],
  events: [],
  organisations: [],
  recommendations: [],
  users: [],
}

const recommendationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSET_RECOMMENDATION_REQUEST_ACTION:
      return {
        ...state,
        loading: true,
      }
    case GET_ASSET_RECOMMENDATION_RESPONSE_ACTION:
      return {
        ...state,
        loading: false,
        [action.payload.asset]: action.payload.response,
      }
    default:
      return state
  }
}

export default recommendationsReducer
