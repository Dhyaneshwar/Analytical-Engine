import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import {
  gridTemplateLargeScreens,
  gridTemplateSmallScreens,
} from '@/const/gridTemplate'
import TitleRow from '@/utils/TitleRow'
import Rows from '@/utils/Rows'
import DashboardContainer from './DashboardContainer'

function Layout({ title }) {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1200px)')

  return (
    <DashboardContainer
      gridTemplateLargeScreens={gridTemplateLargeScreens}
      gridTemplateSmallScreens={gridTemplateSmallScreens}
    >
      <TitleRow title={title} />
      <Rows />
    </DashboardContainer>
  )
}

export default Layout
