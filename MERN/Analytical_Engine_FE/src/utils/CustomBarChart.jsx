import React from 'react'
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function CustomBarChart({ dataCount, angle = -25, textAnchor = 'end' }) {
  return (
    <ResponsiveContainer width="100%" height="85%">
      <BarChart
        data={dataCount}
        margin={{
          top: 25,
          right: 20,
          left: 0,
          bottom: 15,
        }}
      >
        <XAxis dataKey="name" angle={angle} textAnchor={textAnchor} />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="count"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default CustomBarChart
