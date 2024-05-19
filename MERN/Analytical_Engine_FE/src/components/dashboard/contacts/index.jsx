import React, { useEffect, useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { getContactsRequestAction } from '@/redux/actions/contactsAction'
import { getContactsSelector } from '@/redux/selectors/contactsSelector'
import {
  gridTemplateLargeScreens,
  gridTemplateSmallScreens,
} from '@/const/gridTemplate'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { connect } from 'react-redux'
import _ from 'lodash'
import TitleRow from './TitleRow'

const Contacts = ({ getContactsRequest, getContacts }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1200px)')
  const [countryCount, setCountryCount] = useState([])
  const [stateCount, setStateCount] = useState([])
  const [cityCount, setCityCount] = useState([])

  const fetchContacts = async () => {
    try {
      await getContactsRequest()
    } catch (err) {
      console.log(err)
    }
  }

  const transformCounts = (state, demography) => {
    const filteredState = _.filter(state, (state) => state[demography])
    const demographicCounts = _.countBy(filteredState, demography)
    const transformedArray = _.map(demographicCounts, (count, name) => ({
      name,
      count,
    }))
    const sortedArray = _.orderBy(transformedArray, ['count'], ['desc'])
    return _.slice(sortedArray, 0, 10)
  }

  useEffect(() => {
    fetchContacts()
  }, [getContactsRequest])

  useEffect(() => {
    const countByCountry = transformCounts(getContacts, 'country')
    setCountryCount(countByCountry)
    const countByState = transformCounts(getContacts, 'state')
    setStateCount(countByState)
    const countByCity = transformCounts(getContacts, 'city')
    setCityCount(countByCity)
  }, [getContacts])

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      p="10px"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
              gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: '1fr',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <TitleRow title="Data Analysis for Contacts" />
      <Row1
        countryCount={countryCount}
        stateCount={stateCount}
        cityCount={cityCount}
      />
      <Row2 />
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    getContacts: getContactsSelector(state),
  }
}

const mapDispatchToProps = {
  getContactsRequest: getContactsRequestAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
