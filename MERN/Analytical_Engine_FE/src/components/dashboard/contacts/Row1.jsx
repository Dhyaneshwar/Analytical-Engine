import React from 'react'
import DashboardBox from '@/utils/DashboardBox'

import { useTheme } from '@mui/material'
import BoxHeader from '@/utils/BoxHeader'
import BarChart from '../../../utils/CustomBarChart'

function Row1({ countryCount, stateCount, cityCount }) {
  const { palette } = useTheme()
  return (
    <>
      <DashboardBox bgcolor="white" gridArea="a">
        <BoxHeader title="Number of Contacts per City" />
        <BarChart dataCount={cityCount} />
      </DashboardBox>
      <DashboardBox bgcolor="white" gridArea="b">
        <BoxHeader title="Number of Contacts per State" />
        <BarChart dataCount={stateCount} />
      </DashboardBox>
      <DashboardBox bgcolor="white" gridArea="c">
        <BoxHeader title="Number of Contacts per Country" />
        <BarChart dataCount={countryCount} />
      </DashboardBox>
    </>
  )
}

export default Row1
