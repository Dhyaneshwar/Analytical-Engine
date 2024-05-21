import { createSelector } from '@reduxjs/toolkit'

export const getEventsReducer = (state) => state.eventsReducer

export const getEventsSelector = createSelector(
  [getEventsReducer],
  (state) => state.events
)
