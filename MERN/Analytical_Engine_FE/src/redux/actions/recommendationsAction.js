export const GET_RECOMMENDATIONS_REQUEST_ACTION = 'GET_RECOMMENDATION_REQUEST'
export const GET_RECOMMENDATIONS_RESPONSE_ACTION = 'GET_RECOMMENDATION_RESPONSE'
export const GET_ASSET_RECOMMENDATION_REQUEST_ACTION =
  'GET_ASSET_RECOMMENDATION_REQUEST'
export const GET_ASSET_RECOMMENDATION_RESPONSE_ACTION =
  'GET_ASSET_RECOMMENDATION_RESPONSE'
export const RESET_RECOMMENDATIONS_ACTION = 'RESET_RECOMMENDATIONS'

export const getRecommendationsRequestAction = () => {
  return {
    type: GET_RECOMMENDATIONS_REQUEST_ACTION,
  }
}

export const getRecommendationsResponseAction = (payload) => {
  return {
    type: GET_RECOMMENDATIONS_RESPONSE_ACTION,
    payload,
  }
}

export const getAssestRecommendationsRequestAction = (payload) => {
  return {
    type: GET_ASSET_RECOMMENDATION_REQUEST_ACTION,
    payload,
  }
}

export const getAssestRecommendationsResponseAction = (payload) => {
  return {
    type: GET_ASSET_RECOMMENDATION_RESPONSE_ACTION,
    payload,
  }
}

export const resetRecommendationsAction = () => {
  return {
    type: RESET_RECOMMENDATIONS_ACTION,
  }
}
