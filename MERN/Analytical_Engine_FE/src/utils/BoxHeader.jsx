import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import FlexBetween from './FlexBetween'

const BoxHeader = ({ icon, title, subtitle, sideText }) => {
  const { palette } = useTheme()
  return (
    <FlexBetween p="5px">
      <Box m="5px auto">
        <Typography variant="h4" color={palette.secondary[500]}>
          {title}
        </Typography>
        <Typography variant="h6">{subtitle}</Typography>
      </Box>
    </FlexBetween>
  )
}

export default BoxHeader
