import React, { useState } from 'react'
import DashboardBox from '@/utils/DashboardBox'
import BoxHeader from '@/utils/BoxHeader'
import BarChart from '@/utils/CustomBarChart'
import { Box, Button, Modal, Typography, styled } from '@mui/material'
import CustomTable from '@/utils/CustomTable'
import { contactColumns } from '@/const/dataGridColumn'
import { connect } from 'react-redux'
import { getAssestRecommendationsRequestAction } from '../../../redux/actions/recommendationsAction'
import ContactRecommendation from './ContactRecommendation'

function Row2({
  domainCount,
  contactData,
  isAboveMediumScreens,
  getAssestRecommendationsRequest,
}) {
  const margin = isAboveMediumScreens ? '7px auto' : '10px auto'
  const height = isAboveMediumScreens ? '78%' : '86%'
  const [selectedRows, setSelectedRows] = useState([])
  const [showModal, setShowModal] = useState(false)

  const fetchContactRecommendations = () => {
    getAssestRecommendationsRequest({
      assest_type: 'contact',
      assest_ids: selectedRows,
    })
    setShowModal(true)
  }

  const handleModalClose = () => setShowModal(false)

  return (
    <>
      <Modal open={showModal} onClose={handleModalClose}>
        <ContactRecommendation selectedRows={selectedRows} />
      </Modal>
      <DashboardBox gridArea="e" trn="scale(1.015)">
        <BoxHeader title="List of Contacts" />
        <CustomTable
          rowData={contactData}
          columnData={contactColumns}
          height={height}
          setSelectedRows={setSelectedRows}
        />
        <Button
          sx={{
            margin,
            display: 'block',
            border: '1px solid black',
            fontSize: '16px',
            textTransform: 'capitalize',
          }}
          onClick={fetchContactRecommendations}
        >
          Get Selected Contact Recommendations
        </Button>
      </DashboardBox>
      <DashboardBox gridArea="f">
        <Box
          p="25px"
          textAlign="justify"
          sx={{
            backgroundImage: 'linear-gradient(#ffd56f, #11b485)',
            color: 'transparent',
            backgroundClip: 'text',
          }}
        >
          <InsightsTypography variant="h3">
            This dashboard provides an overview of contact data, highlighting
            that California, New York, and Illinois have the highest contact
            counts, with Los Angeles, New York, and Chicago being the top
            cities. The United States has the most contacts by country,
            significantly more than others like Canada and Scotland. The
            contacts list includes detailed information such as names, emails,
            and descriptions, while the domain "temporary.org" is the most
            commonly used among contacts.
          </InsightsTypography>
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="g">
        <BoxHeader title="Most used Domains" />
        <BarChart dataCount={domainCount} angle={-10} />
      </DashboardBox>
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  getAssestRecommendationsRequest: getAssestRecommendationsRequestAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Row2)

const InsightsTypography = styled(Typography)({
  color: 'inherit',
  backgroundColor: 'inherit',
  fontWeight: 500,
  fontSize: 18,
})
