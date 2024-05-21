import { createSelector } from '@reduxjs/toolkit'

export const getTestReducer = (state) => state.testReducer

export const getTestReducerHello = createSelector(
  [getTestReducer],
  (state) => state.hello
)

export const getTestReducerBye = createSelector(
  [getTestReducer],
  (state) => state.bye
)
