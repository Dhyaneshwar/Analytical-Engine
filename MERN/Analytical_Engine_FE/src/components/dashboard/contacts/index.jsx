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
import TitleRow from '@/utils/TitleRow'
import { resetContactsAction } from '../../../redux/actions/contactsAction'
import DashboardContainer from '../../../utils/DashboardContainer'
import { resetRecommendationsAction } from '../../../redux/actions/recommendationsAction'
import { getDomainCounts, transformCounts } from '../../../utils/tranformers'

const Contacts = ({
  getContactsRequest,
  getContacts,
  resetContacts,
  resetRecommendations,
}) => {
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
      resetRecommendations()
    }
  }, [])

  return (
    <DashboardContainer
      gridTemplateLargeScreens={contactsGridTemplateLargeScreens}
      gridTemplateSmallScreens={contactsGridTemplateSmallScreens}
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
    </DashboardContainer>
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
  resetRecommendations: resetRecommendationsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
