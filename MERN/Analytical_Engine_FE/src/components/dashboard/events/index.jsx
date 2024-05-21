import React, { useEffect } from 'react'
import Layout from '../../../utils/Layout'
import { getEventsSelector } from '../../../redux/selectors/eventsSelector'
import {
  getEventsRequestAction,
  resetEventsAction,
} from '../../../redux/actions/eventsAction'
import { connect } from 'react-redux'
import { resetRecommendationsAction } from '../../../redux/actions/recommendationsAction'

function Events({ getEventsRequest, resetEvents, resetRecommendations }) {
  const fetchEvents = async () => {
    try {
      await getEventsRequest()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchEvents()

    return () => {
      resetEvents()
      resetRecommendations()
    }
  }, [])
  return <Layout title="Data Analysis for Events" />
}

const mapStateToProps = (state) => {
  return {
    getEvents: getEventsSelector(state),
  }
}

const mapDispatchToProps = {
  getEventsRequest: getEventsRequestAction,
  resetEvents: resetEventsAction,
  resetRecommendations: resetRecommendationsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)
