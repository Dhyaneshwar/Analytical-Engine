import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import {
  gridTemplateLargeScreens,
  gridTemplateSmallScreens,
} from '@/const/gridTemplate'
import TitleRow from '@/utils/TitleRow'
import Rows from '@/utils/Rows'

function Layout({ title }) {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1200px)')

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
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: 'minmax(370px, 1fr)',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <TitleRow title={title} />
      <Rows />
    </Box>
  )
}

export default Layout
