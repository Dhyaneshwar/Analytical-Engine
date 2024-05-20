import React, { useRef } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

function CustomTable({ rowData, columnData }) {
  const handleSelectionChange = (selectedRowIds) => {
    console.log('Selected row IDs:', selectedRowIds)
  }

  return (
    <Box
      mt="0.5rem"
      p="0 0.5rem"
      sx={{
        height: '85%',
        width: '100%',
        overflowX: 'auto',
        '& .MuiDataGrid-root': {
          color: '#d1d3da',
          border: 'none',
          fontSize: '1.2rem',
        },
        // Code for fixing the pagination styles
        // '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows, & .MuiTablePagination-root':
        //   {
        //     color: '#d1d3da',
        //     border: 'none',
        //     fontSize: '1.2rem',
        //   },
        '& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer':
          {
            display: 'none',
          },
      }}
    >
      <Box width="1400px">
        <DataGrid
          columnHeaderHeight={25}
          rowHeight={35}
          hideFooter={true}
          checkboxSelection
          rows={rowData || []}
          columns={columnData}
          onRowSelectionModelChange={handleSelectionChange}
        />
      </Box>
    </Box>
  )
}

export default CustomTable
