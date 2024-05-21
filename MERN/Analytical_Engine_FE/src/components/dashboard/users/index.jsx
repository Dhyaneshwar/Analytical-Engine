import React, { useEffect, useState } from 'react'
import Layout from '../../../utils/Layout'
import {
  getUsersRequestAction,
  resetUsersAction,
} from '../../../redux/actions/usersAction'
import { getUsersSelector } from '../../../redux/selectors/usersSelector'
import { connect } from 'react-redux'
import { Box, Button, useMediaQuery } from '@mui/material'
import TitleRow from '../../../utils/TitleRow'
import DashboardBox from '../../../utils/DashboardBox'
import { userColumns } from '../../../const/dataGridColumn'
import CustomTable from '../../../utils/CustomTable'
import DashboardContainer from '../../../utils/DashboardContainer'
import { resetRecommendationsAction } from '../../../redux/actions/recommendationsAction'
import BoxHeader from '../../../utils/BoxHeader'
import { transformCounts } from '../../../utils/tranformers'
import CustomPieChart from '../../../utils/CustomPieChart'
import BarChart from '../../../utils/CustomBarChart'

const gridTemplateLargeScreens = `
  "a a a"
  "b b c"
  "b b c"
  "b b c"
  "b b c"
  "b b d"
  "b b d"
  "b b d"
  "b b d"
  "b b d"
`

export const gridTemplateSmallScreens = `
  "a"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
`
function Users({
  getUsers,
  getUsersRequest,
  resetUsers,
  resetRecommendations,
}) {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1200px)')

  const height = isAboveMediumScreens ? '85%' : '75%'
  const margin = isAboveMediumScreens ? '20px auto 3px auto' : '10px auto'
  const [selectedRows, setSelectedRows] = useState([])
  const [genderCount, setGenderCount] = useState([])
  const [positionCount, setPositionCount] = useState([])

  const fetchUserRecommendations = () => {
    console.log('selectedRows', selectedRows)
  }

  const fetchUsers = async () => {
    try {
      await getUsersRequest()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const countByGender = transformCounts(getUsers, 'gender')
    setGenderCount(countByGender)

    const countByPosition = transformCounts(getUsers, 'position', true)
    setPositionCount(countByPosition)
  }, [getUsers])

  useEffect(() => {
    fetchUsers()

    return () => {
      resetUsers()
      resetRecommendations()
    }
  }, [])

  return (
    <DashboardContainer
      gridTemplateLargeScreens={gridTemplateLargeScreens}
      gridTemplateSmallScreens={gridTemplateSmallScreens}
    >
      <TitleRow title="Data Analysis for Users" />
      <DashboardBox gridArea="b">
        <BoxHeader title="List of Users" />
        <CustomTable
          rowData={getUsers}
          columnData={userColumns}
          height={height}
          overflow={false}
          setSelectedRows={setSelectedRows}
        />
        <Button
          sx={{
            margin,
            display: 'block',
            border: '1px solid black',
            fontSize: '16px',
            textTransform: 'capitalize',
          }}
          onClick={fetchUserRecommendations}
        >
          Get Selected User Recommendations
        </Button>
      </DashboardBox>
      <DashboardBox gridArea="c">
        <BoxHeader title="Genders" />
        <CustomPieChart dataCount={genderCount} />
      </DashboardBox>
      <DashboardBox gridArea="d">
        <BoxHeader title="Top 10 Positions of Users" />
        <BarChart dataCount={positionCount} />
      </DashboardBox>
    </DashboardContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    getUsers: getUsersSelector(state),
  }
}

const mapDispatchToProps = {
  getUsersRequest: getUsersRequestAction,
  resetUsers: resetUsersAction,
  resetRecommendations: resetRecommendationsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
