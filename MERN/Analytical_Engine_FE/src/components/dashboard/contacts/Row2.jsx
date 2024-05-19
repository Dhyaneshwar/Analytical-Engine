import React from 'react'
import DashboardBox from '@/utils/DashboardBox'
import BoxHeader from '@/utils/BoxHeader'
import BarChart from '../../../utils/CustomBarChart'
import { Box, Typography, useTheme } from '@mui/material'
import CustomTable from '../../../utils/CustomTable'

function Row2({ domainCount, contactData }) {
  const contactColumns = [
    {
      field: '_id',
      headerName: 'id',
      flex: 0.25,
    },
    {
      field: 'first_name',
      headerName: 'First Name',
      flex: 0.25,
    },
    {
      field: 'last_name',
      headerName: 'Last Name',
      flex: 0.25,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 0.5,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 0.25,
    },
    {
      field: 'state',
      headerName: 'State',
      flex: 0.25,
    },
    {
      field: 'country',
      headerName: 'Country',
      flex: 0.25,
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1.25,
      renderCell: (params) => `${params.value}`,
    },
  ]
  return (
    <>
      <DashboardBox gridArea="e" trn="none">
        <BoxHeader
          title="List of Contacts"
          sideText={`${contactData?.length} Contacts`}
        />
        <CustomTable rowData={contactData} columnData={contactColumns} />
      </DashboardBox>
      <DashboardBox gridArea="f">
        <Box p="25px" textAlign="justify">
          <Typography
            variant="h3"
            color="#0b8f78"
            fontWeight={500}
            fontSize={18}
          >
            This dashboard provides an overview of contact data, highlighting
            that California, New York, and Illinois have the highest contact
            counts, with Los Angeles, New York, and Chicago being the top
            cities. The United States has the most contacts by country,
            significantly more than others like Canada and Scotland. The
            contacts list includes detailed information such as names, emails,
            and descriptions, while the domain "temporary.org" is the most
            commonly used among contacts.
          </Typography>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="g">
        <BoxHeader title="Most used domains" />
        <BarChart dataCount={domainCount} angle={-10} />
      </DashboardBox>
    </>
  )
}

export default Row2
