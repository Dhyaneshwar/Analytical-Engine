export const GET_USERS_REQUEST_ACTION = 'GET_USERS_REQUEST'
export const GET_USERS_RESPONSE_ACTION = 'GET_USERS_RESPONSE'
export const RESET_USERS_ACTION = 'RESET_USERS'

export const getUsersRequestAction = () => {
  return {
    type: GET_USERS_REQUEST_ACTION,
  }
}

export const getUsersResponseAction = (payload) => {
  return {
    type: GET_USERS_RESPONSE_ACTION,
    payload,
  }
}

export const resetUsersAction = () => {
  return {
    type: RESET_USERS_ACTION,
  }
}
