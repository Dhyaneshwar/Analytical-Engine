export const GET_CONTACTS_REQUEST_ACTION = 'GET_CONTACTS_REQUEST'
export const GET_CONTACTS_RESPONSE_ACTION = 'GET_CONTACTS_RESPONSE'

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
