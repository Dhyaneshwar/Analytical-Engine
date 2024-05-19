import React from 'react'
import DashboardBox from '@/utils/DashboardBox'
import BoxHeader from '@/utils/BoxHeader'
import BarChart from '../../../utils/CustomBarChart'
import CustomPieChart from '../../../utils/CustomPieChart'

function Row1({ countryCount, stateCount, cityCount }) {
  return (
    <>
      <DashboardBox gridArea="c">
        <BoxHeader title="Cities with more than 3 Contacts" />
        <CustomPieChart dataCount={cityCount} />
      </DashboardBox>
      <DashboardBox gridArea="b">
        <BoxHeader title="Top 10 States with Contacts" />
        <BarChart dataCount={stateCount} />
      </DashboardBox>
      <DashboardBox gridArea="d">
        <BoxHeader title="Number of Contacts per Country" />
        <BarChart dataCount={countryCount} />
      </DashboardBox>
    </>
  )
}

export default Row1
