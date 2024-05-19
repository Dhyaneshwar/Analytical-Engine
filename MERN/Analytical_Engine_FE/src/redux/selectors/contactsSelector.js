import { createSelector } from '@reduxjs/toolkit'

export const getContactsReducer = (state) => state.contactsReducer

export const getContactsSelector = createSelector(
  [getContactsReducer],
  (state) => state.contacts
)
