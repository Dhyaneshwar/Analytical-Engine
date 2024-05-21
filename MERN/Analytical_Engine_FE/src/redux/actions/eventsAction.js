export const GET_EVENTS_REQUEST_ACTION = 'GET_EVENTS_REQUEST'
export const GET_EVENTS_RESPONSE_ACTION = 'GET_EVENTS_RESPONSE'
export const RESET_EVENTS_ACTION = 'RESET_EVENTS'

export const getEventsRequestAction = () => {
  return {
    type: GET_EVENTS_REQUEST_ACTION,
  }
}

export const getEventsResponseAction = (payload) => {
  return {
    type: GET_EVENTS_RESPONSE_ACTION,
    payload,
  }
}

export const resetEventsAction = () => {
  return {
    type: RESET_EVENTS_ACTION,
  }
}
