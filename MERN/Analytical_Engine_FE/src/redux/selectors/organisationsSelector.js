import { createSelector } from '@reduxjs/toolkit'

export const getOrganisationsReducer = (state) => state.organisationsReducer

export const getOrganisationsSelector = createSelector(
  [getOrganisationsReducer],
  (state) => state.organisations
)
