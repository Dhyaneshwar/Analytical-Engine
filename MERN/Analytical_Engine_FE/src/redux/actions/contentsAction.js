export const GET_CONTENTS_REQUEST_ACTION = 'GET_CONTENTS_REQUEST'
export const GET_CONTENTS_RESPONSE_ACTION = 'GET_CONTENTS_RESPONSE'
export const RESET_CONTENTS_ACTION = 'RESET_CONTENTS'

export const getContentsRequestAction = () => {
  return {
    type: GET_CONTENTS_REQUEST_ACTION,
  }
}

export const getContentsResponseAction = (payload) => {
  return {
    type: GET_CONTENTS_RESPONSE_ACTION,
    payload,
  }
}

export const resetContentsAction = () => {
  return {
    type: RESET_CONTENTS_ACTION,
  }
}
