import { Box, useMediaQuery } from '@mui/material'
import React from 'react'

function DashboardContainer({
  children,
  gridTemplateLargeScreens,
  gridTemplateSmallScreens,
}) {
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
      {children}
    </Box>
  )
}

export default DashboardContainer
