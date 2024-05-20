export const GET_CONTACTS_REQUEST_ACTION = 'GET_CONTACTS_REQUEST'
export const GET_CONTACTS_RESPONSE_ACTION = 'GET_CONTACTS_RESPONSE'
export const RESET_CONTACTS_ACTION = 'RESET_CONTACTS'

export const getContactsRequestAction = () => {
  return {
    type: GET_CONTACTS_REQUEST_ACTION,
  }
}

export const getContactsResponseAction = (payload) => {
  return {
    type: GET_CONTACTS_RESPONSE_ACTION,
    payload,
  }
}

export const resetContactsAction = () => {
  return {
    type: RESET_CONTACTS_ACTION,
  }
}
