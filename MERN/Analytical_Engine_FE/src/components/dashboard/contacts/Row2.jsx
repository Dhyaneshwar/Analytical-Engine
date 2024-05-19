import React from 'react'
import DashboardBox from '@/utils/DashboardBox'
import { Box } from '@mui/material'
import TitleBox from '../../../utils/TitleBox'

function Row2() {
  return (
    <>
      <DashboardBox gridArea="e" trn="none"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
      <DashboardBox gridArea="g"></DashboardBox>
    </>
  )
}

export default Row2
