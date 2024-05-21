import React, { useEffect } from 'react'
import Layout from '../../../utils/Layout'
import {
  getUsersRequestAction,
  resetUsersAction,
} from '../../../redux/actions/usersAction'
import { getUsersSelector } from '../../../redux/selectors/usersSelector'
import { connect } from 'react-redux'

function Users({ getUsersRequest, resetUsers }) {
  const fetchUsers = async () => {
    try {
      await getUsersRequest()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers()

    return () => {
      resetUsers()
    }
  }, [])
  return <Layout title="Data Analysis for Users" />
}

const mapStateToProps = (state) => {
  return {
    getUsers: getUsersSelector(state),
  }
}

const mapDispatchToProps = {
  getUsersRequest: getUsersRequestAction,
  resetUsers: resetUsersAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
