import { createSelector } from '@reduxjs/toolkit'

export const getContentsReducer = (state) => state.contentsReducer

export const getContentsSelector = createSelector(
  [getContentsReducer],
  (state) => state.contents
)
