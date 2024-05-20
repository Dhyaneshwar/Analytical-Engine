import React from 'react'
import DashboardBox from './DashboardBox'
import { Box, Typography } from '@mui/material'

function Rows() {
  return (
    <>
      <DashboardBox gridArea="b" />
      <DashboardBox gridArea="c" />
      <DashboardBox gridArea="d" />
      <DashboardBox gridArea="e" />
      <DashboardBox gridArea="f" />
      <DashboardBox gridArea="g">
        <Box
          p="25px"
          textAlign="justify"
          sx={{
            backgroundImage: 'linear-gradient(#ffd56f, #11b485)',
            color: 'transparent',
            backgroundClip: 'text',
          }}
        >
          <Typography
            variant="h3"
            color="inherit"
            bgcolor="inherit"
            fontWeight={500}
            fontSize={38}
            textAlign="center"
            margin="30px auto"
          >
            Work In Progress
          </Typography>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h" />
      <DashboardBox gridArea="i" />
      <DashboardBox gridArea="j" />
      <DashboardBox gridArea="k" />
    </>
  )
}

export default Rows
