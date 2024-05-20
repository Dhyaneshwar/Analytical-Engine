import React, { useEffect, useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { getContactsRequestAction } from '@/redux/actions/contactsAction'
import { getContactsSelector } from '@/redux/selectors/contactsSelector'
import {
  contactsGridTemplateLargeScreens,
  contactsGridTemplateSmallScreens,
} from '@/const/gridTemplate'
import Row1 from './Row1'
import Row2 from './Row2'
import { connect } from 'react-redux'
import _ from 'lodash'
import TitleRow from '@/utils/TitleRow'
import { resetContactsAction } from '../../../redux/actions/contactsAction'

const Contacts = ({ getContactsRequest, getContacts, resetContacts }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1200px)')
  const [countryCount, setCountryCount] = useState([])
  const [stateCount, setStateCount] = useState([])
  const [cityCount, setCityCount] = useState([])
  const [domainCount, setDomainCount] = useState([])

  const fetchContacts = async () => {
    try {
      await getContactsRequest()
    } catch (err) {
      console.log(err)
    }
  }

  const countOccurrences = (array, key) => {
    const counts = _.countBy(array, key)
    return _.map(counts, (count, name) => ({ name, count }))
  }

  const orderValues = (array) => _.orderBy(array, ['count'], ['desc'])

  const filterTopValues = (array, limit) => {
    return _.slice(orderValues(array), 0, limit)
  }

  const extractDomainCounts = (emails) => {
    const domainCounts = {}
    emails.forEach((email) => {
      const domain = email?.substring(email.indexOf('@') + 1)
      domainCounts[domain] = (domainCounts[domain] || 0) + 1
    })
    return domainCounts
  }

  const transformCounts = (contacts, key, topValues = false, limit = 10) => {
    const filteredArray = _.filter(contacts, (item) => item[key])
    const countedItems = countOccurrences(filteredArray, key)
    const transformedArray = topValues
      ? filterTopValues(countedItems, limit)
      : orderValues(countedItems)
    return transformedArray
  }

  const getDomainCounts = (contacts, threshold = 1, limit = 5) => {
    const domainCounts = extractDomainCounts(contacts.map(({ email }) => email))
    const countContact = _.pickBy(domainCounts, (count) => count > threshold)
    const transformedArray = _.map(countContact, (count, name) => ({
      name,
      count,
    }))
    return filterTopValues(transformedArray, limit)
  }

  useEffect(() => {
    const countByCountry = transformCounts(getContacts, 'country')
    setCountryCount(countByCountry)

    const countByState = transformCounts(getContacts, 'state', true)
    setStateCount(countByState)

    const countByCity = transformCounts(getContacts, 'city')
    const cityData = countByCity.filter(({ count }) => count > 3)
    setCityCount(cityData)

    const countByDomain = getDomainCounts(getContacts)
    setDomainCount(countByDomain)
  }, [getContacts])

  useEffect(() => {
    fetchContacts()

    return () => {
      resetContacts()
    }
  }, [])

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
              gridTemplateRows: 'repeat(10, 75px)',
              gridTemplateAreas: contactsGridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: 'minmax(370px, 1fr)',
              gridAutoRows: '80px',
              gridTemplateAreas: contactsGridTemplateSmallScreens,
            }
      }
    >
      <TitleRow title="Data Analysis for Contacts" />
      <Row1
        countryCount={countryCount}
        stateCount={stateCount}
        cityCount={cityCount}
      />
      <Row2
        domainCount={domainCount}
        contactData={getContacts}
        isAboveMediumScreens={isAboveMediumScreens}
      />
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
  resetContacts: resetContactsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
