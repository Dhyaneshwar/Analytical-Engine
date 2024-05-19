import React from 'react'
import DashboardBox from '@/utils/DashboardBox'
import BoxHeader from '@/utils/BoxHeader'
import BarChart from '../../../utils/CustomBarChart'

function Row2({ domainCount }) {
  return (
    <>
      <DashboardBox gridArea="e" trn="none"></DashboardBox>
      <DashboardBox gridArea="f">
        <BoxHeader title="Most used domains" />
        <BarChart dataCount={domainCount} angle={-10} />
      </DashboardBox>
      <DashboardBox gridArea="g"></DashboardBox>
    </>
  )
}

export default Row2
