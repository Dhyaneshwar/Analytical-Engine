export const GET_ASSET_RECOMMENDATION_REQUEST_ACTION =
  'GET_ASSET_RECOMMENDATION_REQUEST'
export const GET_ASSET_RECOMMENDATION_RESPONSE_ACTION =
  'GET_ASSET_RECOMMENDATION_RESPONSE'

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
