import React, { useEffect, useState } from 'react'
import Layout from '../../../utils/Layout'
import {
  getOrganisationsRequestAction,
  resetOrganisationsAction,
} from '../../../redux/actions/organisationsAction'
import { getOrganisationsSelector } from '../../../redux/selectors/organisationsSelector'
import { connect } from 'react-redux'
import { Box, Button, useMediaQuery } from '@mui/material'
import TitleRow from '../../../utils/TitleRow'
import DashboardBox from '../../../utils/DashboardBox'
import { organisationColumns } from '../../../const/dataGridColumn'
import CustomTable from '../../../utils/CustomTable'
import DashboardContainer from '../../../utils/DashboardContainer'
import { resetRecommendationsAction } from '../../../redux/actions/recommendationsAction'
import BoxHeader from '../../../utils/BoxHeader'
import {
  countOccurrences,
  filterTopValues,
  orderValues,
  transformCounts,
} from '../../../utils/tranformers'
import CustomPieChart from '../../../utils/CustomPieChart'
import BarChart from '../../../utils/CustomBarChart'
import _ from 'lodash'

const gridTemplateLargeScreens = `
  "a a a"
  "d c b"
  "d c b"
  "d c b"
  "d c b"
  "d e e"
  "f e e"
  "f e e"
  "f e e"
  "f e e"
`

export const gridTemplateSmallScreens = `
  "a"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "e"
  "f"
  "f"
  "f"
`
function Organisations({
  getOrganisations,
  getOrganisationsRequest,
  resetOrganisations,
  resetRecommendations,
}) {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1200px)')

  const height = isAboveMediumScreens ? '75%' : '60%'
  const margin = isAboveMediumScreens ? '20px auto 3px auto' : '10px auto'
  const [selectedRows, setSelectedRows] = useState([])
  const [stateCount, setStateCount] = useState([])
  const [cityCount, setCityCount] = useState([])
  const [industryCount, setIndustryCount] = useState([])
  const [profileCount, setProfileCount] = useState([])

  const fetchOrganisationRecommendations = () => {
    console.log('selectedRows', selectedRows)
  }

  const fetchOrganisations = async () => {
    try {
      await getOrganisationsRequest()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const countByCity = transformCounts(getOrganisations, 'city')
    const validCityCount = countByCity.filter(
      ({ name }) => name !== 'N/A' && name !== 'NA'
    )
    setCityCount(validCityCount)

    const countByState = transformCounts(getOrganisations, 'state')
    setStateCount(countByState)

    const countByIndustry = transformCounts(getOrganisations, 'industry', true)
    setIndustryCount(countByIndustry)

    const profileCounts = {}
    getOrganisations.forEach((item) => {
      if (item.profile) {
        item.profile.forEach((profile) => {
          if (profileCounts[profile.trim()]) {
            profileCounts[profile]++
          } else {
            profileCounts[profile] = 1
          }
        })
      }
    })
    const countedItems = _.map(profileCounts, (count, name) => ({
      name,
      count,
    }))
    const transformedArray = filterTopValues(countedItems, 15)
    setProfileCount(transformedArray)
  }, [getOrganisations])

  useEffect(() => {
    fetchOrganisations()

    return () => {
      resetOrganisations()
      resetRecommendations()
    }
  }, [])

  return (
    <DashboardContainer
      gridTemplateLargeScreens={gridTemplateLargeScreens}
      gridTemplateSmallScreens={gridTemplateSmallScreens}
    >
      <TitleRow title="Data Analysis for Organisations" />
      <DashboardBox gridArea="b">
        <BoxHeader title="Number of Organisations per City" />
        <BarChart dataCount={cityCount} angle={-30} />
      </DashboardBox>
      <DashboardBox gridArea="c">
        <BoxHeader title="Number of Organisations per State" />
        <CustomPieChart dataCount={stateCount} />
      </DashboardBox>
      <DashboardBox gridArea="d">
        <BoxHeader title="Top 10 Industry Domain of Organisations" />
        <BarChart dataCount={industryCount} angle={-30} />
      </DashboardBox>
      <DashboardBox gridArea="e" trn="scale(1.015)">
        <BoxHeader title="List of Organisations" />
        <CustomTable
          rowData={getOrganisations}
          columnData={organisationColumns}
          height={height}
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
          onClick={fetchOrganisationRecommendations}
        >
          Get Selected Organisation Recommendations
        </Button>
      </DashboardBox>
      <DashboardBox gridArea="f">
        <BoxHeader title="Top 15 Highly needed Profiles in Organisations" />
        <BarChart dataCount={profileCount} angle={-30} labelHeight={80} />
      </DashboardBox>
    </DashboardContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    getOrganisations: getOrganisationsSelector(state),
  }
}

const mapDispatchToProps = {
  getOrganisationsRequest: getOrganisationsRequestAction,
  resetOrganisations: resetOrganisationsAction,
  resetRecommendations: resetRecommendationsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Organisations)
