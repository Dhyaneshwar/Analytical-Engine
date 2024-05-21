import { createSelector } from '@reduxjs/toolkit'

export const getRecommendationsReducer = (state) => state.recommendationsReducer

export const getRecommendationsSelector = createSelector(
  [getRecommendationsReducer],
  (state) => state.recommendation
)

export const getContactsRecommendationSelector = createSelector(
  [getRecommendationsReducer],
  (state) => state.contact
)
