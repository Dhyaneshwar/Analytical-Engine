import React, { useEffect } from 'react'
import Layout from '../../../utils/Layout'
import { getRecommendationsSelector } from '../../../redux/selectors/recommendationsSelector'
import {
  getRecommendationsRequestAction,
  resetRecommendationsAction,
} from '../../../redux/actions/recommendationsAction'
import { connect } from 'react-redux'

function Recommendations({ getRecommendationsRequest, resetRecommendations }) {
  const fetchRecommendations = async () => {
    try {
      await getRecommendationsRequest()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchRecommendations()

    return () => {
      resetRecommendations()
    }
  }, [])
  return <Layout title="Data Analysis for Recommendations" />
}

const mapStateToProps = (state) => {
  return {
    getRecommendations: getRecommendationsSelector(state),
  }
}

const mapDispatchToProps = {
  getRecommendationsRequest: getRecommendationsRequestAction,
  resetRecommendations: resetRecommendationsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations)
