import {
  GET_CONTACTS_REQUEST_ACTION,
  GET_CONTACTS_RESPONSE_ACTION,
} from '@/redux/actions/contactsAction'

const initialState = {
  loading: false,
  contacts: [],
}

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS_REQUEST_ACTION:
      return {
        ...state,
        loading: true,
      }
    case GET_CONTACTS_RESPONSE_ACTION:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      }
    default:
      return state
  }
}

export default contactsReducer
