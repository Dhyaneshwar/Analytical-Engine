export const GET_ORGANISATIONS_REQUEST_ACTION = 'GET_ORGANISATION_REQUEST'
export const GET_ORGANISATIONS_RESPONSE_ACTION = 'GET_ORGANISATION_RESPONSE'
export const RESET_ORGANISATIONS_ACTION = 'RESET_ORGANISATION'

export const getOrganisationsRequestAction = () => {
  return {
    type: GET_ORGANISATIONS_REQUEST_ACTION,
  }
}

export const getOrganisationsResponseAction = (payload) => {
  return {
    type: GET_ORGANISATIONS_RESPONSE_ACTION,
    payload,
  }
}

export const resetOrganisationsAction = () => {
  return {
    type: RESET_ORGANISATIONS_ACTION,
  }
}
