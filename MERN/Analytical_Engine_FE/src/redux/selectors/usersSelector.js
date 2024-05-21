import { createSelector } from '@reduxjs/toolkit'

export const getUsersReducer = (state) => state.usersReducer

export const getUsersSelector = createSelector(
  [getUsersReducer],
  (state) => state.users
)
