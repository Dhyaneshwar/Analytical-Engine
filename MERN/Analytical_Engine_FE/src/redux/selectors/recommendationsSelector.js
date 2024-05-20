import { createSelector } from '@reduxjs/toolkit'

export const getRecommendationsReducer = (state) => state.recommendationsReducer

export const getContactsRecommendationSelector = createSelector(
  [getRecommendationsReducer],
  (state) => state.contact
)
