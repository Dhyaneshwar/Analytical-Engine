import React from 'react'
import ModalContainer from '../../../utils/ModalContainer'
import { Box, Typography } from '@mui/material'
import { connect } from 'react-redux'
import { getContactsRecommendationSelector } from '../../../redux/selectors/recommendationsSelector'
import { getContactsSelector } from '../../../redux/selectors/contactsSelector'
import _ from 'lodash'
import {
  contactModalColumns,
  contactModalCommonColumns,
} from '../../../const/dataGridColumn'
import CustomTable from '../../../utils/CustomTable'
import CustomBarChart from '../../../utils/CustomBarChart'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function ContactRecommendation({ getContactRecommendations, selectedRows }) {
  const sortedSelectedRows = selectedRows.sort((a, b) => {
    return Number(a) - Number(b)
  })
  if (_.isEmpty(getContactRecommendations)) {
    return (
      <ModalContainer wd="50%" ht="50%">
        <Typography variant="h1" textAlign="center" m={'25px'} fontWeight={600}>
          No Recommendations Avaialble For Selected Contacts
        </Typography>
        <Typography variant="h3" fontWeight={600} m={'20px 0'} color="#242427">
          Recommendations is not available for the contacts with following
          ID(s):
        </Typography>
        <Typography
          variant="h3"
          fontWeight={500}
          fontSize={'26px'}
          textAlign="center"
          color="#242427"
          mb="20px"
        >
          {sortedSelectedRows.join(', ')}
        </Typography>
        <Typography variant="h3" fontWeight={600} m={'20px 0'} color="#242427">
          Please select some other rows (like 150, 165, 183, 199, 220, 221, 259)
        </Typography>
      </ModalContainer>
    )
  }

  const transformData = (data) => {
    const keyByData = _.keyBy(data, 'asset_id')
    const ans = Object.keys(keyByData).map((key) => ({
      id: key,
      name: key,
      title: keyByData[key].title,
      organisation_id: keyByData[key].organisation_id,
      system_score: keyByData[key].system_score,
    }))
    return ans
  }

  const result = transformData(getContactRecommendations)

  return (
    <ModalContainer>
      <Typography variant="h1" textAlign="center" m={'15px 0'} fontWeight={600}>
        Table about Contact Title, Organisation ID and System Score
      </Typography>
      <CustomTable
        rowData={result}
        columnData={contactModalCommonColumns}
        height="20%"
      />

      <Typography variant="h1" textAlign="center" mt={'25px'} fontWeight={600}>
        Contact and its System Score
      </Typography>
      <Box
        width="75%"
        height="75%"
        margin="0 auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ResponsiveContainer width="60%" height="85%">
          <BarChart
            data={result}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 15,
            }}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#71f5de" stopOpacity={0.8} />
                <stop offset="98%" stopColor="#71f5de" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#48494e" />
            <XAxis
              dataKey="name"
              textAnchor={'end'}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'black' }}
              style={{ fontSize: '10px' }}
            >
              <Label
                value="Asset ID"
                position="insideBottom"
                offset={-10}
                fill="black"
                style={{ fontSize: '15px' }}
              />
            </XAxis>
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'black' }}
              style={{ fontSize: '10px' }}
            >
              <Label
                value="System Score"
                angle={-90}
                position="inside"
                offset={50}
                fill="black"
                style={{ fontSize: '15px' }}
              />
            </YAxis>
            <Tooltip />
            <Bar
              dataKey="system_score"
              fill="url(#colorGradient)"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Typography variant="h1" textAlign="center" m={'25px'} fontWeight={600}>
        Contact Recommendations
      </Typography>
      <CustomTable
        rowData={getContactRecommendations}
        columnData={contactModalColumns}
        height="20%"
        overflow={false}
      />
    </ModalContainer>
  )
}
const mapStateToProps = (state) => ({
  getContactRecommendations: getContactsRecommendationSelector(state),
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactRecommendation)
