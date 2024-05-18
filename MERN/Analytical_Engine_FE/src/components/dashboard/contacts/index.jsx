import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import {
  gridTemplateLargeScreens,
  gridTemplateSmallScreens,
} from '@/const/gridTemplate'
import Row1 from '@/utils/Row1'
import Row2 from '@/utils/Row2'
import Row3 from '@/utils/Row3'

const Contacts = () => {
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
              gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: '1fr',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  )
}

export default Contacts
