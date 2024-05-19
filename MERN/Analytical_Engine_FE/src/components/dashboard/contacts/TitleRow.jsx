import React from 'react'
import DashboardBox from '../../../utils/DashboardBox'
import TitleBox from '../../../utils/TitleBox'
import { useMediaQuery } from '@mui/material'

function TitleRow({ title }) {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1024px)')

  const size = !isAboveMediumScreens && '2rem'
  return (
    <DashboardBox gridArea="a">
      <TitleBox width="100%" height="100%" size={size}>
        {title}
      </TitleBox>
    </DashboardBox>
  )
}

export default TitleRow
