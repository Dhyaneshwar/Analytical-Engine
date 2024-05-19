import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

function CustomTable({ rowData, columnData }) {
  return (
    <Box
      mt="0.5rem"
      p="0 0.5rem"
      height="85%"
      sx={{
        '& .MuiDataGrid-root': {
          color: '#d1d3da',
          border: 'none',
        },
      }}
    >
      <DataGrid
        columnHeaderHeight={25}
        rowHeight={35}
        hideFooter={true}
        rows={rowData || []}
        columns={columnData}
      />
    </Box>
  )
}

export default CustomTable
