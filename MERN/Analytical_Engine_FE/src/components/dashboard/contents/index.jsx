import React, { useEffect } from 'react'
import Layout from '../../../utils/Layout'
import { connect } from 'react-redux'
import {
  getContentsRequestAction,
  resetContentsAction,
} from '../../../redux/actions/contentsAction'
import { getContentsSelector } from '../../../redux/selectors/contentsSelector'
import { resetRecommendationsAction } from '../../../redux/actions/recommendationsAction'

function Contents({ getContentsRequest, resetContents, resetRecommendations }) {
  const fetchContents = async () => {
    try {
      await getContentsRequest()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchContents()

    return () => {
      resetContents()
      resetRecommendations()
    }
  }, [])
  return <Layout title="Data Analysis for Contents" />
}

const mapStateToProps = (state) => {
  return {
    getContents: getContentsSelector(state),
  }
}

const mapDispatchToProps = {
  getContentsRequest: getContentsRequestAction,
  resetContents: resetContentsAction,
  resetRecommendations: resetRecommendationsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contents)
