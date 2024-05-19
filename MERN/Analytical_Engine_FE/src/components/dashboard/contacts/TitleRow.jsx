import React from 'react'
import DashboardBox from '../../../utils/DashboardBox'
import TitleBox from '../../../utils/TitleBox'

function TitleRow({ title }) {
  return (
    <DashboardBox gridArea="a">
      <TitleBox width="100%" height="100%">
        {title}
      </TitleBox>
    </DashboardBox>
  )
}

export default TitleRow
