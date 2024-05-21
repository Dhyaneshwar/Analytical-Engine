import React, { useEffect } from 'react'
import Layout from '../../../utils/Layout'
import {
  getOrganisationsRequestAction,
  resetOrganisationsAction,
} from '../../../redux/actions/organisationsAction'
import { getOrganisationsSelector } from '../../../redux/selectors/organisationsSelector'
import { connect } from 'react-redux'

function Organisations({ getOrganisationsRequest, resetOrganisations }) {
  const fetchOrganisations = async () => {
    try {
      await getOrganisationsRequest()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchOrganisations()

    return () => {
      resetOrganisations()
    }
  }, [])

  return <Layout title="Data Analysis for Organisations" />
}

const mapStateToProps = (state) => {
  return {
    getOrganisations: getOrganisationsSelector(state),
  }
}

const mapDispatchToProps = {
  getOrganisationsRequest: getOrganisationsRequestAction,
  resetOrganisations: resetOrganisationsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Organisations)
